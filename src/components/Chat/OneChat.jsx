import React, { useState, useEffect } from 'react';

import clasess from './OneChat.module.css'


const OneChat = (props) => {

    return (
        <>
          
            <div key={props.name} className={clasess.wrapper}>
              <div className={`${clasess.clashCard} ${clasess.barbarian}`}>
                <div className={`${clasess.clashCardImage} ${clasess.clashCardImageBarbarian}`}>
                  
                </div>
                <div className={clasess.clashCardUnitName}>{props.name}</div>
                <div className={clasess.clashCardUnitDescription}>{props.department}</div>
                <div className={`${clasess.clashCardUnitStats}${clasess.clashCardUnitStatsBarbarian} ${clasess.clearfix}`}>
                  <div className={clasess.oneThird}>
                    <div className={clasess.statValue}>Поведение:</div>
                    <div className={clasess.stat}>{props.behaviour}</div>
                  </div>
                  <div className={clasess.oneThird}>
                    <div className={clasess.statValue}>Профессионализм:</div>
                    <div className={clasess.stat}>{props.intelligence}</div>
                  </div>
                  <div className={`${clasess.oneThird}${clasess.noBorder}`}>
                    <div className={clasess.statValue}>Полезность:</div>
                    <div className={clasess.stat}>{props.charisma}</div>
                  </div>
                </div>
              </div>
            </div>
         
        </>
      );


            }




export default OneChat;