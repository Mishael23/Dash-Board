import React from 'react'
import "../bar.css";
import Task from './Task';
import { useState } from 'react';


function Bar (){
  const [name, setName]= useState("")
  // console.log(rows.filter(row=>rows.admin.includes("ad")));
  return (
    <div className='SearchBar'>
        <div className='Bar-Items'>
        <input type="Search" name="" id="BAR" 
        placeholder='  Search' onChange={(e)=> setName(e.target.value)} />

            <select className='date' name="cars" id="cars">
            <option value="date">Monday,6th March</option>
            <option value="date">Monday,6th March</option>
            <option value="date">Monday,6th March</option>
            <option value="date">Monday,6th March</option>
            </select>


         <div className='Button'>
                   <div>
                  <button className='btn'>  Card</button>
                </div>

                    <div>
                      
                    <button className='btn1'>List</button>
                         </div>
          </div> 

    </div>
              <div>
              <Task/>
              </div>
    </div>
  )
}

export default Bar
