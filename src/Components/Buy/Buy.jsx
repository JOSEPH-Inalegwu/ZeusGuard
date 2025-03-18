import React, { useState } from 'react';

const brokers = [
  { id: 'binance', name: 'Binance' },
  { id: 'coinbase', name: 'Coinbase' },
  { id: 'kraken', name: 'Kraken' },
];

const Buy = () => {
  const [buyMethod, setBuyMethod] = useState('bankTransfer');
  const [selectedBroker, setSelectedBroker] = useState(brokers[0].id);
  const [amount, setAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [amountInputFocused, setAmountInputFocused] = useState(false);
  const [withdrawInputFocused, setWithdrawInputFocused] = useState(false);

  const handleBuy = () => {
    console.log(`Buying ${amount} using ${buyMethod} from ${selectedBroker}`);
    setAmount('');
  };

  const handleWithdraw = () => {
    console.log(`Withdrawing ${withdrawAmount}`);
    setWithdrawAmount('');
  };

  return (
    <>
      <section className="w-4/5 mt-3 mx-auto bg-base-200 p-6 rounded-md shadow-md dark:bg-base-200">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Buy Cryptocurrency</h2>
        
        <div className='flex items-center space-x-20'>
          <div className="mt-4">
            <label className="block mb-2 text-gray-400  font-semibold">Select Broker:</label>
            <select
              value={selectedBroker}
              onChange={(e) => setSelectedBroker(e.target.value)}
              className="border rounded p-2"
            >
              {brokers.map((broker) => (
                <option key={broker.id} value={broker.id}>{broker.name}</option>
              ))}
            </select>
          </div>
          
          <div className="mt-4">
            <label className="block mb-2 text-gray-400 font-semibold">Select Method:</label>
            <select
              value={buyMethod}
              onChange={(e) => setBuyMethod(e.target.value)}
              className="border rounded p-2"
            >
              <option value="bankTransfer">Bank Transfer</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4">
          <label className="block mb-2 text-gray-600 dark:text-gray-300">Amount to Buy:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onFocus={() => setAmountInputFocused(true)}
            onBlur={() => setAmountInputFocused(false)}
            className={`border rounded p-2 w-full 
                        ${amountInputFocused ? 'border-gray-600 focus:ring-green-400 focus:ring-opacity-50 focus:ring-offset-0 focus:ring-offset-blue-400' : 'border-gray-600'}`}
            placeholder="Enter amount"
          />
        </div>
        
        <button
          onClick={handleBuy}
          className="mt-6 bg-blue-500 text-white p-2 rounded"
        >
          Buy Cryptocurrency
        </button>
      </section>

      <section className="w-4/5 mt-6 mx-auto bg-base-200 p-6 rounded-md shadow-md dark:bg-base-200">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Withdraw Cryptocurrency</h2>
        
        <div className="mt-4">
          <label className="block mb-2 text-gray-600 dark:text-gray-300">Amount to Withdraw:</label>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            onFocus={() => setWithdrawInputFocused(true)}
            onBlur={() => setWithdrawInputFocused(false)}
            className={`border rounded p-2 w-full 
                        ${withdrawInputFocused ? 'border-gradient focus:outline-none focus:ring-0' : 'border-gray-600'}`}
            placeholder="Enter amount"
          />
        </div>
        
        <button
          onClick={handleWithdraw}
          className="mt-4 bg-red-500 text-white p-2 rounded"
        >
          Withdraw Cryptocurrency
        </button>
      </section>
    </>
  );    
}

export default Buy;