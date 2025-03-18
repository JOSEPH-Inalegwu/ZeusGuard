import React, { useState } from "react";


const Withdrawal = () => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [balance, setBalance] = useState(42934); // Default balance
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pin, setPin] = useState("");
  const correctPin = "1234"; // Change this for real authentication

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      alert("Enter a valid withdrawal amount.");
      return;
    }

    if (amount > balance) {
      alert("Insufficient balance.");
      return;
    }

    setIsModalOpen(true); // Open PIN modal
  };

  const verifyPin = () => {
    if (pin === correctPin) {
      setBalance(balance - parseFloat(withdrawAmount));
      alert(`Successfully withdrawn $${parseFloat(withdrawAmount).toLocaleString()}`);
      setWithdrawAmount("");
      setPin("");
      setIsModalOpen(false);
    } else {
      alert("Incorrect PIN. Please try again.");
    }
  };

  return (
    <>
      <div>
      
        {/* Withdrawal Option */}
        <div className="p-6 rounded-lg shadow-md bg-base-200 mt-2">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-white">Withdraw Funds</h2>

          <p className="mb-2 text-gray-300">
            Available Balance: <span className="font-bold">${balance.toLocaleString()}</span>
          </p>

          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            className="w-full p-2 border border-gray-600 text-sm rounded-md dark:bg-gray-800 dark:text-white"
            placeholder="Enter amount"
          />

          <button
            onClick={handleWithdraw}
            className="mt-4 w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* PIN Verification Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-50 backdrop-blur-sm">
          <div className="bg-base-300 w-lg p-6 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold mb-3">Enter Your Private Key</h2>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              placeholder="Enter PIN"
            />
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-red-500 rounded-md cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={verifyPin}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 cursor-pointer"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Withdrawal;
