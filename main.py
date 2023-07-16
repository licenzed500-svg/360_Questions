import json

from flask import Flask, request, jsonify
import sqlite3



app = Flask(__name__)

@app.route('/search', methods=['POST'])
def search_employee():
    conn = sqlite3.connect('employees.db')
    c = conn.cursor()

    data = request.get_json()
    name = data['name']
    query = "SELECT * FROM employees WHERE "
    conditions = []

    if name:
        conditions.append("name='" + name + "'")

    query += " AND ".join(conditions)

    c.execute(query)
    result = c.fetchall()

    conn.close()

    return jsonify(result)

@app.route('/update', methods=['POST'])
def update_employee():
    conn = sqlite3.connect('employees.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS employees 
                     (intelligence INTEGER, charisma INTEGER, behaviour INTEGER)''')



    data = request.get_json()
    name = data['name']
    department = data['department']
    new_intelligence = data['intelligence']
    new_charisma = data['charisma']
    new_behaviour = data['behaviour']

    c.execute("UPDATE employees SET countVotes = countVotes + 1 WHERE name = ?", (name,))

    query = "SELECT intelligence,charisma,behaviour  FROM employees WHERE name='" + name + "'"
    c.execute(query)
    result = c.fetchone()
    c.execute("SELECT countVotes FROM employees WHERE name='" + name + "'")
    votes = c.fetchone()[0]
    if votes == 0:
        votes+=1

    print(votes)
    print(result)

    if result:
        old_intelligence, old_charisma, old_behaviour = result

        intelligence = (old_intelligence + new_intelligence) / votes
        charisma = (old_charisma + new_charisma) / votes
        behaviour = (old_behaviour + new_behaviour) / votes

        query = "UPDATE employees SET "
        updates = []

        if department:
            updates.append("department='" + department + "'")
        if intelligence:
            updates.append("intelligence=" + str(intelligence))
        if charisma:
            updates.append("charisma=" + str(charisma))
        if behaviour:
            updates.append("behaviour=" + str(behaviour))

        query += ", ".join(updates)
        query += " WHERE name='" + name + "'"

        c.execute(query)
        conn.commit()
        conn.close()

        return ({'message': "Employee updated successfully!"})
    else:
        return ({'message': "Employee not found!"})



@app.route('/get', methods=['GET'])
def get_data():
    conn = sqlite3.connect('employees.db')
    c = conn.cursor()

    c.execute("SELECT * FROM 'employees' ")
    data = c.fetchall()


    data_list = []
    for row in data:

        data_dict = {'name' : row[0], 'department' : row[1], 'intelligence' : row[2], 'charisma' : row[3], 'behaviour' : row[4]}
        
        data_list.append(data_dict)


    return jsonify(data_list)

@app.route('/login-admin', methods=['POST'])
def login_data():
    data = request.get_json()
    conn = sqlite3.connect('bas_admin.db')
    c = conn.cursor()

    admin_list = ["admin_", "admin__"]
    c.execute("INSERT INTO 'bas_admin' VALUES(?,?);", admin_list)
    c.commit()

    data = request.get_json()
    login = data['login']
    password = data['password']

    c.execute("SELECT * FROM bas_admin")

    if login == admin_list[0] and password == admin_list[1]:
        responce = {'status': 'success', 'message': "Login success"}
    else:
        responce = {'status': 'fail', 'message': "Error"}

    return jsonify(responce)

    conn.close()


@app.route('/add', methods=['POST'])
def add_employee():
    conn = sqlite3.connect('employees.db')
    c = conn.cursor()

    #c.execute('''CREATE TABLE IF NOT EXISTS employees
     #               (name TEXT, department TEXT CHECK(length(department)<=200), intelligence INTEGER, charisma INTEGER, behaviour INTEGER)''')

    c.execute('''CREATE TABLE IF NOT EXISTS employees 
                 (name TEXT, department TEXT, intelligence INTEGER, charisma INTEGER, behaviour INTEGER, countVotes INTEGER)''')


    data = request.get_json()
    name = data['name']
    department = data['department']
    intelligence = data['intelligence']
    charisma = data['charisma']
    behaviour = data['behaviour']
    countVotes = 1


    c.execute("INSERT INTO employees VALUES (?, ?, ?, ?, ?, ?)",
              (name, department, intelligence, charisma, behaviour, countVotes))

    conn.commit()
    conn.close()

    print(data);
    return ({'message': "Employee added successfully!"})


if __name__ == '__main__':
    app.run(debug=True)


@app.route('/add-admin', methods=['POST'])
def add_admin():
    data = request.get_json()
    conn = sqlite3.connect('admins.db')
    c = conn.cursor()


    c.execute('''CREATE TABLE IF NOT EXISTS data
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  login TEXT,
                  password TEXT)''')


    c.execute("INSERT INTO data (login, password) VALUES (?, ?)",
              (data['login'], data['password']))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Data added successfully'})



if __name__ == '__main__':
    app.run(__name__)




