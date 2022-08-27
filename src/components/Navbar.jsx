import React from 'react';
import { Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, BarChartOutlined } from '@ant-design/icons';

import icon from '../images/moneroxmrlogo.png'

const Navbar = () => {
    return (
        <div className='nav-container'>

            <div className='logo-container'>
                <Avatar src={icon} size="large" className='logoImgStyle'/>
                <Typography.Title level={2} className="logo">
                    <Link to="/" className='logoStyle'>cryptowebsite</Link>
                </Typography.Title>
            </div>

            <Menu theme="dark">

                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Item icon={<BarChartOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>

                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>

            </Menu>
        </div>
    );
}

export default Navbar