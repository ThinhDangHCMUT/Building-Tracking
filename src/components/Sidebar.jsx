import React, { useState, useContext } from "react";
import "./Sidebar.css";
import { UilSignOutAlt, UilBuilding } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { FloorContextAPI } from "../context/floorContext";

const Sidebar = () => {
  const {handleSetFloor} = useContext(FloorContextAPI)
  // console.log(floor)
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const handleSelect = (item ,index) => {
    handleSetFloor(item)
    setSelected(index)
  }

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
          <UilBuilding size={50}/>
          <span>Building Tracking</span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => handleSelect(item.heading, index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
