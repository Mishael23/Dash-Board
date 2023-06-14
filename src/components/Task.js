import React from 'react'
import "../task.css";

const Task = () => {
  return (
    
<div className='BackDrop'>

    <div className='Top-text'>
        <div className='Left-text'>
            <h1>Last tasks</h1>
            <p className='Bold-Text'>117 Total, <span id='text-grey'> proceed to resolve them </span></p>
        
        </div>

            <div className='Right-text'>
        
                <div className='Done'>
                    <h1>94</h1>
                    <p id='text-grey'>Done</p>
                </div>
                    <div className='progress'>
                        <h1>23</h1>
                        <p id='text-grey'>In Progress</p>
                    </div>
            
            </div>
    </div>

    <hr id='task-hr'/>

<div className='Groups'>
    <input type="checkbox" name="" id="check" />
    <ul className='headings'>
        <li id=''>Name</li>
        <li id='Admin'>Admin</li>
        <li id='MEM'>Members</li>
        <li id=''>Status</li>
        <li id='RT'>Run Time</li>
        <li id='FD'>Finish Date</li>
    </ul>
</div>

<hr id='task-hr1'/>

<div className='Groups'>
    <input type="checkbox" name="" id="check" />
    <ul className='headings'>
        <li id='Name'>ClientOnboarding - CIRCLE</li>
        <li id='Admin2'><img src="" alt="" /> Samantha J.</li>
        <li id='MEM1'>3</li>
        <li id='IN-Pro'><img src="" alt="" />   In Progress</li>
        <li id='RT2'>6 Hours</li>
        <li id='date'>6 Mon</li>
    </ul>
</div>

<div className='Groups1'>
    <input type="checkbox" name="" id="check" />
    <ul className='headings1'>
        <li id='Name'>Meeting with Webflow & Notion</li>
        <li id='Admin2'><img src="" alt="" /> Bob P.</li>
        <li id='MEM1'>4</li>
        <li id='IN-Pro'><img src="" alt="" />   Done</li>
        <li id='RT2'>2 Hours</li>
        <li id='date'>7 Tue</li>
    </ul>
</div>

<div className='Groups2'>
    <input type="checkbox" name="" id="check" />
    <ul className='headings2'>
        <li id='Name'>First Handoff with Engineers</li>
        <li id='Admin2'><img src="" alt="" /> Kate O.</li>
        <li id='MEM1'>10</li>
        <li id='IN-Pro'><img src="" alt="" />In Progress</li>
        <li id='RT2'>3 days</li>
        <li id='date'>10 Fri</li>
    </ul>
</div>

<div className='Groups3'>
    <input type="checkbox" name="" id="check" />
    <ul className='headings'>
        <li id='Name'>Client Drafting (2) with Lawrence</li>
        <li id='Admin2'><img src="" alt="" /> Jack F.</li>
        <li id='MEM1'>7</li>
        <li id='IN-Pro'><img src="" alt="" />   In Progress</li>
        <li id='RT2'>1 Week</li>
        <li id='date'>6 Mon</li>
    </ul>
</div>

</div>

      
 
  )
}

export default Task

