import React from "react";
import Nav from "../Navbar/Nav";
import SideList from "./SideList";
import "./admin.css";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Nav />
      <br/>
      <br/>
      <br/>
      <div className="admin-page">
        <div className='left-admin'>
          <SideList />
        </div>
        <div className='right-admin'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
