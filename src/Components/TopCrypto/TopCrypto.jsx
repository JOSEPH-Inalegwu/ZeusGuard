import React from 'react';
import TopCryptoProp from './TopCryptoProp';
import { BitcoinData, BinanceData, EthereumData, BitcoinOptions } from '../Data/Btc'; 

const TopCrypto = () => {
  return (
    <>
      <div className="container w-4/5 mx-auto bg-base-200 mt-2 px-6 py-4 border border-black/10 rounded-sm">
        <div className="flex justify-between items-center space-x-4">
        
          {/* Bitcoin */}
          <TopCryptoProp
            name="Bitcoin"
            symbol="BTC"
            image={'src/Assets/bitcoin.svg'}  
            price={30780}
            percentage="11.75%"
            style={'bg-gradient-to-r from-blue-500 to-purple-700'}
            iconColor={'bg-purple-500'}
            chartData={BitcoinData} 
            chartOptions={BitcoinOptions} 
          />

          {/* Binance */}
          <TopCryptoProp
            name="Binance"
            symbol="BNB"
            image={'src/assets/binance.svg'}
            price={270.10}
            percentage="21.59%"
            style={'bg-gradient-to-r from-green-400 to-green-700'}
            iconColor={'bg-green-600'}
            chartData={BinanceData}
            chartOptions={BitcoinOptions} 
          />

          {/* Ethereum */}
          <TopCryptoProp
            name="Ethereum"
            symbol="ETH"
            image={'src/assets/etherium.svg'}
            price={1478.10}
            percentage="4.75%"
            style={'bg-gradient-to-r from-blue-700 to-blue-500'}
            iconColor={'bg-blue-500'}
            chartData={EthereumData} 
            chartOptions={BitcoinOptions} 
          />
        </div>
      </div>
    </>
  );
}

export default TopCrypto;