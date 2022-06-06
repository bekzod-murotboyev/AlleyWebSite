import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import {useNavigate} from "react-router";

function MainListItems({setType, clear}) {

    const navigate = useNavigate()

    function toggle(type) {
        setType(type)
    }

    function logout() {
        clear()
        navigate('/')
    }

    return (
        <React.Fragment>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" onClick={() => toggle('dashboard')}/>
            </ListItemButton>
            <ListItemButton onClick={() => toggle('user')}>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Add user"/>
            </ListItemButton>
            <ListItemButton onClick={() => toggle('news')}>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="Add news"/>
            </ListItemButton>
            <ListItemButton onClick={() => toggle('book')}>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Add book"/>
            </ListItemButton>
            <ListItemButton onClick={logout}>
                <ListItemIcon>
                    <div className='btn btn-sm btn-danger'>
                        <PeopleIcon/>
                    </div>
                </ListItemIcon>
                <ListItemText primary="Logout"/>
            </ListItemButton>
        </React.Fragment>
    )
}

export default MainListItems
