import { Layout, Anchor, Col, Row } from 'antd';
const { Link } = Anchor;
import React from 'react';

import Navbar from './Navbar';

const { Header, Content, Footer } = Layout;

function LayoutMain({ children, menuKey }: any) {
  return (
    <Layout className="">
      <div style={{ minHeight: '100vh' }}>
        <Header>
          <Navbar defaultSelectedKeys={menuKey} />
        </Header>
        <Content>
          <div className="min-h-screen">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <div>Copyright Ⓒ 2022. SC06 Team 1</div>
          <div>
            Joshua Tay, Ansar Ahmed, Vincentius Roger, Nathan AW, Valerie
          </div>
        </Footer>
      </div>
    </Layout>
  );
}

export default LayoutMain;
