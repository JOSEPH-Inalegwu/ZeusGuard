import React, { useState } from 'react';

const Send = () => {
  const [sendHistory, setSendHistory] = useState([]);
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BTC'); // State to hold selected currency
  const [selectedPriority, setSelectedPriority] = useState(''); // State to hold selected priority
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const [loading, setLoading] = useState(false); // State to handle loading status

  const handleSend = async (e) => {
    e.preventDefault();
    if (address && amount) {
      setLoading(true); // Start loading

      // Simulate a transaction processing delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Add transaction to send history
      const newTransaction = {
        id: Date.now(),
        address,
        amount,
        currency,
        priority: selectedPriority, // Include priority in the transaction
        date: new Date().toLocaleDateString(),
      };
      setSendHistory([...sendHistory, newTransaction]);

      // Reset inputs
      setAddress('');
      setAmount('');
      setCurrency('BTC'); // Reset to default currency
      setSelectedPriority(''); // Reset selected priority

      // Open modal
      setModalOpen(true); // Show the modal
      setLoading(false); // Stop loading
    }
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  const handlePriorityChange = (priority) => {
    setSelectedPriority(priority); // Set selected priority
  };

  return (
    <>
      <section className="w-4/5 mt-3 mx-auto bg-base-200 p-6 rounded-md shadow-md dark:bg-base-200">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Send Cryptocurrency</h2>

        <form onSubmit={handleSend}>
          <div className='flex items-center justify-between space-x-20'>
            <div className="flex flex-col w-xl mt-4 space-y-4">
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Address</label>
                <input
                  id="username"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="amount">Amount</label>
                <div className="flex mt-2 items-center border border-gray-200 rounded-md dark:border-gray-600 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40">
                  <input
                    id="amount"
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-4 py-2 text-gray-700 bg-white rounded-l-md dark:bg-gray-800 dark:text-gray-300 focus:outline-none"
                  />
                  <select 
                    value={currency} 
                    onChange={(e) => setCurrency(e.target.value)} 
                    className="px-4 py-2 bg-gray-100 border-l border-gray-200 rounded-r-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
                  >
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>USDT</option>
                    <option>BNB</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='w-xl space-y-4'>
              <div className='flex items-center justify-between font-semibold mb-6'>
                <p>Priority</p>
                <p>Fee</p>
                <p>Arrival Time</p>
              </div>

              {/* Priority Options */}
              <div className='flex items-center justify-between text-sm'>
                <div className='flex items-center space-x-1'>
                  <input 
                    type="radio" 
                    name="priority" 
                    value="high" 
                    checked={selectedPriority === 'high'} 
                    onChange={() => handlePriorityChange('high')} 
                  />
                  <p>High</p>
                </div>
                <p>B 0.00000300</p>
                <p>10 - 20 mins</p>
              </div>

              <div className='flex items-center justify-between text-sm'>
                <div className='flex items-center space-x-1'>
                  <input 
                    type="radio" 
                    name="priority" 
                    value="medium" 
                    checked={selectedPriority === 'medium'} 
                    onChange={() => handlePriorityChange('medium')} 
                  />
                  <p>Medium</p>
                </div>
                <p>B 0.00000200</p>
                <p>20 - 60 mins</p>
              </div>

              <div className='flex items-center justify-between text-sm'>
                <div className='flex items-center space-x-1'>
                  <input 
                    type="radio" 
                    name="priority" 
                    value="low" 
                    checked={selectedPriority === 'low'} 
                    onChange={() => handlePriorityChange('low')} 
                  />
                  <p>Low</p>
                </div>
                <p>B 0.00000100</p>
                <p>1 - 2 Hours</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start mt-6">
            <button type="submit" className={`px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
              {loading ? 'Processing...' : 'Send'}
            </button>
          </div>
        </form>

        {/* Send History Section */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Send History</h3>
          <ul className="mt-4 space-y-2">
            {sendHistory.map((transaction) => (
              <li key={transaction.id} className="flex justify-between p-4 bg-gray-100 rounded-md dark:bg-gray-800">
                <div>
                  <p className="text-gray-800 dark:text-gray-300">{transaction.address}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{transaction.date}</p>
                </div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">{transaction.amount} {transaction.currency} - {transaction.priority}</p> {/* Display priority in history */}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal" open={modalOpen}>
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
          </form>
          <h3 className="font-bold text-lg">Transaction Sent!</h3>
          <p className="py-4">Your transaction was successful. ✅✅</p>
        </div>
      </dialog>
    </>
  );
}

export default Send;