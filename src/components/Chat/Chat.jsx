import React, { useState, useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import clasess from './Chat.module.css'


const Chat = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/get')
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);



    return (
        <>
          {data.map((item) => (
            <div key={item.id} className={clasess.wrapper}>
              <div className={`${clasess.clashCard} ${clasess.barbarian}`}>
                <div className={`${clasess.clashCardImage} ${clasess.clashCardImageBarbarian}`}>
                  
                </div>
                <div className={clasess.clashCardUnitName}>{item.name}</div>
                <div className={clasess.clashCardUnitDescription}>{item.department}</div>
                <div className={`${clasess.clashCardUnitStats}${clasess.clashCardUnitStatsBarbarian} ${clasess.clearfix}`}>
                  <div className={clasess.oneThird}>
                    <div className={clasess.statValue}>Поведение:</div>
                    <div className={clasess.stat}>{item.behaviour}</div>
                  </div>
                  <div className={clasess.oneThird}>
                    <div className={clasess.statValue}>Профессионализм:</div>
                    <div className={clasess.stat}>{item.intelligence}</div>
                  </div>
                  <div className={`${clasess.oneThird}${clasess.noBorder}`}>
                    <div className={clasess.statValue}>Полезность:</div>
                    <div className={clasess.stat}>{item.charisma}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      );


            }




export default Chat;

