import React from 'react'

const WalletCoinsProp = ({name, image, time, color, increase, decrease}) => {
  return (
    <>
      <div className="flex justify-between items-center bg-black/20 p-3 rounded-md">
        <div className='flex items-center space-x-3'>
          <img
            src={image}
            alt='Binance'
            className={`w-12 p-1 ${color} rounded-full`}
          />
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-semibold">
              {name}
            </p>
            <p className="text-sm text-gray-500">
              {time}
            </p>
          </div>
        </div>
        <div className='flex flex-col space-y-1 justify-center items-end'>
          <p className='text-green-500 font-semibold text-sm'
          >{increase}</p>

          <p className='text-sm text-red-500'
          >{decrease}</p>
        </div>
      </div>
    </>
  )
}

export default WalletCoinsProp