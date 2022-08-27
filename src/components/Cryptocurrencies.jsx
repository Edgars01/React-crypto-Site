import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import AllCoins from '../services/coins';

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 3 : 20;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.bestCoins);
    const [searchTerm, setSearchTerm] = useState('');

    if (isFetching) return 'Loading..';

    if (simplified)
    {
        return (
                <>
                    <Row gutter={[32, 32]} className="crypto-card-container latestCoinsContainer">
                        {cryptos?.map((currency) => (
                            <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
                                
                                <Card 
                                    title={`${currency.name}`}
                                    extra={<img className="crypto-image" src={currency.iconUrl}/>}
                                   
                                >
                                    <p>Symbol: {currency.symbol}</p>
                                    <p>Uuid: {currency.uuid}</p>

                                </Card>
                                
                            </Col>
                        ))}
                    </Row>
                </>
            )
    }
    else
    {
        return < AllCoins />
    }
}

export default Cryptocurrencies