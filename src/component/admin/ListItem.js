import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import {useState} from "react";
import ModalForm from "../modal/ModalForm";

function MainListItems() {

    const [open, setOpen] = useState(false)
    const [type, setType] = useState(false)

    function toggle(type) {
        setType(type)
        setOpen(true)
    }

    return (
        <React.Fragment>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
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
            <ModalForm open={open} setOpen={setOpen} type={type}/>
        </React.Fragment>
    )
}

export default MainListItems
