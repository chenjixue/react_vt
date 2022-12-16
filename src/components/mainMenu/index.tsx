import React, { useState } from 'react';
import {
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const MainMenu: React.FC = () => {
    let nav = useNavigate()
    let currentRouter = useLocation()
    let items = [
        {
            key: '/1',
            icon: <UserOutlined />,
            label: 'nav 1',
            children: [
                { label: '子菜单项', key: '/cpo' },
                { label: '子菜单项', key: '/cp1' },
            ],
        },
        {
            key: '/2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
            children: [
                {
                    label: '子菜单项',
                    key: '/2c',
                    children: [{
                        label: '子菜单项',
                        key: '/cpt'
                    }]
                },
                {
                    label: '子菜单项',
                    key: '/3c',
                    children: [{
                        label: '子菜单项',
                        key: '/cpt3'
                    }]
                },
                {
                    label: '子菜单项',
                    key: '/4c',
                    children: [{
                        label: '子菜单项',
                        key: '/cpt4'
                    }]
                },
                { label: '子菜单项', key: '/cp2' },
                { label: '子菜单项', key: '/cp3' },
            ],
        },
    ]
    let findParantKey = (meuns: any, key: any) => {
        for (let t of meuns) {
            if (t.key === key) {
                return [key]
            }
        }
        let isFind = false
        let keys: string[] = [];
        let findKey = (meuns: any) => {
            if (isFind) {
                return
            }
            for (let t of meuns) {
                if (t.key === key) {
                    isFind = true
                    return
                }
                t.children && findKey(t.children)
                if (isFind) {
                    keys.push(t.key)
                    break
                }
            }
            return keys
        }
        return findKey(meuns)?.reverse()
    }
    let selectMenuItem = ({ key }: { key: any }) => {
        nav(key)
    }
    let onOpenChange = (openKeys: string | any[]) => {
        setOpenKeys(findParantKey(items, openKeys[openKeys.length - 1])?.concat([openKeys[openKeys.length - 1]]))
    }
    let [openKeys, setOpenKeys] = useState(findParantKey(items, currentRouter.pathname) as any | undefined[])
    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[currentRouter.pathname]}
            onOpenChange={onOpenChange}
            onSelect={selectMenuItem}
            openKeys={openKeys}
            items={items}
        />
    )
}
export default MainMenu;