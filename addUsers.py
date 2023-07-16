import sqlite3

def addEmployee():
    conn = sqlite3.connect('employees.db')
    c = conn.cursor()

    name = input("Введите имя:")
    department = input("Введите отдел:")
    intelligence = input("Введите показатель профессионализма:")
    charisma = input("Введите показатель полезности:")
    behaviour = input("Введите показатель опведения:")
    countVotes = 0

    c.execute("INSERT INTO employees VALUES (?, ?, ?, ?, ?, ?)",
              (name, department, intelligence, charisma, behaviour, countVotes))

    conn.commit()
    conn.close()

    return ({'message': "Employee added successfully!"})




def agreeAddEmployee():
    user = input("Введите Y если хотите добавить работника. Введите N если нет:")
    if user == 'Y':
        addEmployee()

if __name__ == '__main__':
    agreeAddEmployee()
