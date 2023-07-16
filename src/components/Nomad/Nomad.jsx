import React from "react";
import clasess from "./Nomad.module.css"
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Nomad = () => {

      const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/get')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

    return (
  <div>
        <nav className={clasess.nav}>
            <h2 className={clasess.name}>Статистика по работникам</h2>

            <div>
                <div className={clasess.channels}>
                    <h3>Работники</h3>
            {data.map(item=> <li className={clasess.channels}><NavLink className={clasess.channels} to="/" props={item}>{item.name}</NavLink></li>)}
                </div>
            </div>

            </nav>
      
   </div>
    )


}

export default Nomad