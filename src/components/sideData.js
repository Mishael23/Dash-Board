import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
export const sideData = [

 {title: "Dashboard" ,
    icon: <DashboardIcon/>,
    link: "/home"
},
{
    title: "Project" ,
    icon: <PieChartIcon/>,
    link: "/Projects"
},
{
    title: "Task List" ,
    icon: <ListAltIcon/>,
    link: "/Task"
},
{
    title: "Services" ,
    icon: <MiscellaneousServicesIcon/>,
    link: "/Service"
}
,
{
    title: "Notifications" ,
    icon: <NotificationsIcon/>,
    link: "/Notification"
},
{
    title: "Chat" ,
    icon: <ForumIcon/>,
    link: "/Chat"
}
];

