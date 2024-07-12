import React, { useState } from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import './mainNavigation.css';
import SideDrawer from './SideDrawer'
import BackDrop from "../UIELement/Backdrop";
import NavLinks from "./NavLinks"

const MainNavigation = props =>{
    const [drawerOpen,setDrawerOpen] = useState(false)
    const openDrawer = ()=>{
        setDrawerOpen(true)
    }
    const closeDrawer = () =>{
        setDrawerOpen(false)
    }
    return (
        <div>
            {drawerOpen&& <BackDrop onClick={closeDrawer}/>}
            
            <SideDrawer show={drawerOpen} onClick={closeDrawer}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks/>
                </nav>
            </SideDrawer>) 
           
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">YourPlaces</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </div>
    )

}
export default MainNavigation