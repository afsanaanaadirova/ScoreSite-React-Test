import React, {useState } from "react";
import '../../node_modules/antd/dist/antd.css';
import { Menu } from 'antd';
import { HomeOutlined , AppstoreOutlined, CaretDownOutlined ,DeploymentUnitOutlined,ContactsOutlined} from '@ant-design/icons';
import { Image } from 'antd';
import logo from "../assests/images/logo.webp";


function Header() {
  const [state,setState]=useState('')
  const { SubMenu } = Menu;
  const { current } = state;
  const handleClick = e => {
    console.log('click ', e);
    setState({ current: e.key });
  };
  return (
    <div className="navbar">
      <div className="container">
      <Image
      width={100}
      src={logo}
    />
         <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<HomeOutlined />}>
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
         Home
          </a>
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<CaretDownOutlined />} title="News">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="app"  icon={<DeploymentUnitOutlined />}>
         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
         Matches
          </a>
        </Menu.Item>
        <Menu.Item key=""  icon={<AppstoreOutlined />}>
         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
         About
          </a>
        </Menu.Item>
         <Menu.Item key="alipay"  icon={<ContactsOutlined />}>
         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </Menu.Item>
      </Menu>
      </div>
    
    </div>
  )
}

export default Header;