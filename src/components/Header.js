import React, {useState } from "react";
import '../../node_modules/antd/dist/antd.css';
import { Menu } from 'antd';
import { HomeOutlined , AppstoreOutlined, CaretDownOutlined ,DeploymentUnitOutlined,ContactsOutlined} from '@ant-design/icons';
import { Image } from 'antd';
import logo from "../assests/images/logo.webp";
import {NavLink,Outlet} from "react-router-dom";


function Header() {
  const [state,setState]=useState('')
  const { SubMenu } = Menu;
  const { current } = state;
  const handleClick = e => {
    console.log('click ', e);
    setState({ current: e.key });
  };
  return (
    <div> 
      <div className="navbar">
    <div className="container">
    <Image className="image-logo"
    width={100}
    src={logo}
  />
       <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" icon={<HomeOutlined />}>
      <NavLink to="/" style={({isActive})=>({ color:isActive ? "blue" : "white"})} rel="noopener noreferrer" >Home</NavLink>
      </Menu.Item>
      <Menu.Item key="SubMenu"  icon={<AppstoreOutlined />}>
        <NavLink to="/news"  rel="noopener noreferrer">News</NavLink>
      </Menu.Item>
      <Menu.Item key="app"  icon={<DeploymentUnitOutlined />}>
        <NavLink to="/"  rel="noopener noreferrer">Matches</NavLink>
      </Menu.Item>
      <Menu.Item key=""  icon={<AppstoreOutlined />}>
        <NavLink to="/about"  rel="noopener noreferrer">About</NavLink>
      </Menu.Item>
       <Menu.Item key="alipay"  icon={<ContactsOutlined />}>
         <NavLink to="/"  rel="noopener noreferrer">Contact</NavLink>
      </Menu.Item>
    </Menu>
    </div>
  </div> <Outlet/>
  </div>
  )
}

export default Header;