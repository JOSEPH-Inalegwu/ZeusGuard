import React from 'react'

const MarketProp = ({name, percentage, price, gradient, symbol, image, percentageChange}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={image}
            alt='Binance'
            className={`w-8 p-1 ${gradient} rounded-full`}
          />
          <div>
            <p className="text-sm font-semibold">
              {symbol}
            </p>
            <p className="text-sm text-gray-500">
              {name}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <p>${price}</p>
          <button className={`${percentageChange} text-white py-1 px-3 rounded-xl`}>
            {percentage}
          </button>
        </div>
      </div>
    </>
  )
}

export default MarketProp