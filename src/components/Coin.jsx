import React from 'react';
import '../css/allCoins.css';

const Coin = ({
    name,
    price,  
    symbol,
    marketcap,
    volume,
    image,
    priceChange
}) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>

                <div className='coin'>

                    <img src={image} alt='crypto' className='coin-img'/>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>

                </div>

                <div className='coin-data'>

                    <p className='coin-price'>Price: $ {price}</p>
                    <p className='coin-volume'>$ {volume.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className='coin-percent negative'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent positive'>{priceChange.toFixed(2)}%</p>
                    )}

                    <p className='coin-marketcap'> market Cap: ${marketcap.toLocaleString()} </p>
                </div>
                
            </div>
        </div>
    );
};

export default Coin;