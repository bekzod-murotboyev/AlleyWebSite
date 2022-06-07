import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import {useNavigate} from "react-router";
import {StepIcon} from "@mui/material";
import {ImportContacts, InsertEmoticon} from "@mui/icons-material";

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
            <ListItemButton onClick={() => toggle('University')}>
                <ListItemIcon>
                    <ImportContacts/>
                </ListItemIcon>
                <ListItemText primary="Add University"/>
            </ListItemButton>
            <ListItemButton onClick={() => toggle('User')}>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Add User"/>
            </ListItemButton>
            <ListItemButton onClick={() => toggle('News')}>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="Add News"/>
            </ListItemButton>
            <ListItemButton onClick={() => toggle('Writer')}>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Writer"/>
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
