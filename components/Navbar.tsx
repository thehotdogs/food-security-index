import React, { useState } from 'react';
import { MenuProps, MenuTheme, Typography, Menu, Avatar, Dropdown } from 'antd';
import Image from 'next/image';
import Router from 'next/router';
import { LogoutOutlined } from '@ant-design/icons';

const pageItems = [
  { label: 'Introduction', key: '' },
  { label: 'Dataset', key: 'data' },
  { label: 'Plot', key: 'plot' }, // remember to pass the key prop
  { label: 'Food Security Calculator', key: 'calculator' }, // which is requir
  { label: 'About The Team', key: 'about' },
];

interface defaultSelectedKeysType {
  defaultSelectedKeys: string;
}

// eslint-disable-next-line react/function-component-definition
const Navbar = ({ defaultSelectedKeys }: defaultSelectedKeysType) => {
  const onClickMenu: MenuProps['onClick'] = (e) => {
    Router.push(`/${e.key}`);
  };
  return (
    <div className="flex relative">
      {/* The purpose of the div below --> so the NextJS Image fill is contained within the div */}
      {/* <div className="mr-10 w-24 relative max-h-fit">
        <Image layout="fill" alt="LOGO" src="/logo.png" />
      </div> */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[defaultSelectedKeys]}
        items={pageItems}
        className="flex-1"
        onClick={onClickMenu}
      />
    </div>
  );
};

export default Navbar;
