import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Homepage, News, Cryptocurrencies, Navbar } from './components';
import './css/App.css';

const App = () => {
    return (

        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Switch>

                            <Route exact path="/">
                                <Homepage />
                            </Route>

                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>

                            <Route exact path="/news">
                                <News />
                            </Route>

                        </Switch>
                    </div>
                </Layout>
           
                <div className='footer'> 
                    
                    <Typography.Title level={5} style={{ color:'white', textAlign: 'center' }}> Cryptowebsite </Typography.Title>

                    <Space>
                        <Link to="/" className='footer-links'>Home</Link>
                        <Link to="/cryptocurrencies" className='footer-links'>Cryptocurrencies</Link>
                        <Link to="/news" className='footer-links'>News</Link>
                    </Space>
                    
                </div>

            </div>
        </div>

    );
}

export default App