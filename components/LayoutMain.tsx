import { Layout } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';

import Navbar from './Navbar';

const { Header, Content, Footer } = Layout;

function LayoutMain({ children, menuKey }: any) {
  return (
    <Layout className="flex min-h-screen">
      <Header>
        <Navbar defaultSelectedKeys={menuKey} />
      </Header>
      <Content className="site-layout px-10 py-5">{children}</Content>
      <Footer style={{ textAlign: 'center' }}>Ansar Ahmed, Joshua Tay, Vincentius Roger, Nathan AW, Valerie</Footer>
    </Layout>
  );
}

export default LayoutMain;
