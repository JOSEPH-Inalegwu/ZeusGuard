import React from 'react'
import MarketProp from './MarketProp'

const Market = () => {
  return (
    <>
      <div className="container mx-auto w-4/5 bg-base-200 shadow-sm mt-2 py-3 px-6">

<div className="border-b border-gray-600">
  <div className="space-y-4 mb-4">

    <div className="flex space-x-2">
      <img  src="src/assets/star.svg" 
        className="w-6"
      />

      <h2 className="text-xl font-semibold"
      >Cryptex Rating</h2>
    </div>

    <div className="flex font-semibold space-x-5">
    <p className="text-white">Favorites</p>
    <p className="text-gray-500">Top</p>
    <p className="text-gray-500">Popular</p>
    <p className="text-gray-500">Token Price</p>
    <p className="text-gray-500">New Token</p>
    </div>
  </div>
</div>

<div className="">
  <div className="flex items-center justify-between text-sm text-gray-400 my-3">
    <p>Name</p>
    <div className="flex space-x-14">
      <p>Last Price</p>
      <p>Change</p>
    </div>
  </div>

  <div className="space-y-5"> 
    <MarketProp 
      name="Ethereum"
      percentage="-1.91%"
      price="2,980.09"
      gradient="bg-blue-500"
      symbol="ETH"
      image="src/assets/etherium.svg" 
      percentageChange="bg-red-500"
    />  

    <MarketProp
      name="Binance Coin"
      percentage="+1.91%"
      price="380.09"
      gradient="bg-yellow-500"
      symbol="BNB"
      image="src/assets/binance.svg" 
      percentageChange="bg-green-500"
    />  

    <MarketProp
      name="Solana"
      percentage="+1.91%"
      price="380.09"
      gradient="bg-blue-900"
      symbol="SOL"
      image="src/assets/solana.svg" 
      percentageChange="bg-green-500"
    />  

    <MarketProp 
      name="Polkadot"
      percentage="-1.91%"
      price="2,980.09"
      gradient="bg-pink-400"
      symbol="DOT"
      image="src/assets/polkadot.svg" 
      percentageChange="bg-red-500"
    />  

    <MarketProp
      name="Shiba Inu"
      percentage="+1.91%"
      price="0.000038"
      gradient="bg-red-600"
      symbol="SHIB"
      image="src/assets/shiba.svg" 
      percentageChange="bg-green-500"
    />

    <MarketProp
      name="XRP"
      percentage="+1.91%"
      price="0.67"
      gradient="bg-slate-400"
      symbol="XRP"
      image="src/assets/xrp.svg" 
      percentageChange="bg-green-500"
    />

    <MarketProp
      name="Tether"
      percentage="+0.01%"
      price="1.00"
      gradient="bg-teal-700"
      symbol="USDT"
      image="src/assets/tether.svg" 
      percentageChange="bg-green-500"
    />

  </div>
</div>
</div>
    </>
  )
}

export default Market