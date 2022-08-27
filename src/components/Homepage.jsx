import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies } from '../components';
import { News } from '../components';


const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(3);

    if (isFetching) return 'Loading...';

    return (
        <>
            <Title level={2} className="heading"> Global Crypto Stats </Title>
            <Row className='homepage-stats'>
                <Col span={12}><Statistic title="Total Coins" value={data?.data?.totalCoins}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={data?.data?.totalExchanges}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(data?.data?.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(data?.data?.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={data?.data?.totalMarkets}/></Col>
            </Row>

            <div className='home-heading-container top3CoinsContainer'>
                <Title level={2} className="home-title top3Coins"> Top 3 latest coins in 24 h </Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies" className="show-more">Show more</Link></Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className='home-heading-container newsContainer'>
                <Title level={2} className="home-title"> News </Title>
                <Title level={3} className="show-more"><Link to="/news" className="show-more">Show more</Link></Title>
            </div>
            <News  simplified />
        </>
    )
}

export default Homepage