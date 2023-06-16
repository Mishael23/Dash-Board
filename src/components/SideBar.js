import React from 'react'
import "../App.css";
import { sideData } from './sideData';
import Head from "../images/Head.png"

function SideBar (){
  return (
    <div className='Sidebar'>
      <div className='lOGO1'>
      <img src="" alt="" />
      <h2 className="logoName">MiKam</h2>
      <hr />
      </div>
      <ul className='SidebarList'>
      {sideData.map((val,key)=>{
        return ( 
        <li className='row'
        id={window.location.pathname===val.link ? "active" : ""}
        key={key} onClick={()=> {window.location.pathname=val.link}}>
          {""}
          <div id='icon'>{val.icon}</div>{""}
          <div id='title'>
            {val.title}</div>
          </li>
        );
      })}
      </ul>
    <div>
      <div className='User'>
      <img className='Profile' width="250px" src={Head} alt="" />
      </div>
      <div className='Status'>
        <h2>John Jameson</h2>
        <p className='mail'>Jameson@Mib.com</p>
      </div>
      </div>
    </div>

    
  );
}

export default SideBar
