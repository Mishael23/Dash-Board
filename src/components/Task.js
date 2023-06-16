import React from 'react'
import "../task.css";
// import IMAGES from '../../assets/index.js'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';

import { TablePagination } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    
    { field: 'name', headerName: 'Name', type: 'number' ,width: 200 , sortable: false, disableColumnMenu:true },
    { field: 'admin', headerName: 'Admin', type: 'number', width: 150 , sortable: false, disableColumnMenu:true },
    { field: 'members', headerName: 'Members',type: 'number', width: 130 , sortable: false, disableColumnMenu:true },
    { field: 'status', headerName: 'Status', type: 'number', width: 180 , sortable: false, disableColumnMenu:true },
    { field: 'runtime', headerName: 'Runtime', type: 'number', width: 250, sortable: false, disableColumnMenu:true },
    { field: 'finishdate', headerName: 'Finishdate', type: 'number', width: 200, sortable: false, disableColumnMenu:true}
  
  
  ];
  const rows = [
    
    {
      id: 1, name: "ClientOnboarding-Circle",
      admin: "Samanta J.",
      members: 3,
      status: "In Progress",
      runtime: "6 hours",
      finishdate: " sixMon"
    },
    {
      id: 2,
      name: "Meeting with Notion",
      admin: "Bob P.",
      members: 4,
      status: 'Done',
      runtime: "6 hours",
      finishdate: "6Mon"
    },
    {
      id: 3,
      name: "First Handoff with Engineers",
      admin: "Kate O.",
      members: 10,
      status: 'In Progress',
      runtime: "3 days",
      finishdate: " 10 Fri"
    },
    {
      id: 4,
      name: "Client Drafting (2) with Lawrence",
      admin: "Jack F.",
      members: 7,
      status: 'Inprogress',
      runtime: "1 week",
      finishdate: "19Sun"
    },
    {
      id: 5,
      name: "Client Drafting (3) with Jane",
      admin: "John J.",
      members: 7,
      status: 'Inprogress',
      runtime: "2 week",
      finishdate: "25 Sat"
    },
  
  ];
  function Task() {
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

<div style={{ height: 219 }}>
<DataGrid className='data-layout'
        rows={rows}
        columns={columns}
        hideFooter={true}
        hideFooterSelectedRowCount={true}
        hideFooterPagination={true}
        initialState={{
            pagination: {
               paginationModel: { page: 0, pageSize: 5},
             },
           }}
       key={rows.id}
        checkboxSelection
        
      />


      </div>

      
</div>
  )
}
export default Task

