import "./index.css";
import App from "./App";
import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const MySidebar() => {
const {collapseSidebar } = useProSidebar();
  return (
    <div id ="app" style = {({height: "100vh"}, {display: "flex"})}>
    <Sidebar style = {{height: "100vh"}}>
   <Menu>
   <MenuItem
   icon = {<MenuOutlinedAction/>}
   onClick={() => {
    collapseSidebar();
   }}
   style={{textAlign: "center"}}
   >
   {" "}
   <h2>Admin</h2>
   </MenuItem>
   </Menu>
    </Sidebar>
    </div>
    );
}
;
 
export default MySidebar;


// //import { useState } from 'react'
// //import reactLogo from './assets/react.svg'
// //import viteLogo from '/vite.svg'
// import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
// //+/dist/components/Sidebar";

// import './App.css'
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"
// import React from 'react'

// function App() {
//   const { collapseSidebar } = useProSidebar();
//   return (
//     <div id = "app" style = {({height: "100vh" }, {display: "flex"})}>
//     </div>
//   )
// }

// export default App


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
