import React from 'react';
import Chart1 from '../Charts/Chart1';

const TopCryptoProp = ({ name, symbol, price, percentage, image, style, iconColor, chartData, chartOptions }) => {
  return (
    <div className={`w-full px-3 py-4 rounded-2xl ${style}`}>
      <div className="flex items-center space-x-1.5">
        <img
          src={image}
          alt={name}
          className={`w-7 p-1 ${iconColor} rounded-full`}
        />
        <div>
          <p className="text-sm text-gray-200">{name}</p>
          <p className="text-sm font-semibold">{symbol}</p>
        </div>
      </div>

      <div className="w-full h-30">
        <Chart1 data={chartData} options={chartOptions} />
      </div>

      <div className="flex justify-between mt-10 text-sm">
        <p>${price}</p>
        <p className='text-green-500 font-semibold'>{percentage}</p>
      </div>
    </div>
  );
}

export default TopCryptoProp;