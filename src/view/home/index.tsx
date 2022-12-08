import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import MainMenu from '@/components/mainMenu';
import Style from "./home.module.scss"
const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout className={Style.layout}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className={Style.logo} />
                <MainMenu></MainMenu>
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: Style.trigger,
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;