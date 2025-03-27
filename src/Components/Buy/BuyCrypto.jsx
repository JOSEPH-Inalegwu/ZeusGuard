import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const BuyCryptoSection = () => {
  const [selectedBroker, setSelectedBroker] = useState("binance");
  const [buyMethod, setBuyMethod] = useState("bankTransfer");
  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [amount, setAmount] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pin, setPin] = useState("");
  const [isBuying, setIsBuying] = useState(false);
  const [buyHistory, setBuyHistory] = useState([]);

  // Load buy history from local storage on mount
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("buyHistory")) || [];
    setBuyHistory(storedHistory);
  }, []);

  const brokers = [
    { id: "binance", name: "Binance" },
    { id: "coinbase", name: "Coinbase" },
    { id: "kraken", name: "Kraken" },
  ];

  const coins = [
    { id: "BTC", name: "Bitcoin" },
    { id: "ETH", name: "Ethereum" },
    { id: "LTC", name: "Litecoin" },
  ];

  const handleBuyClick = () => {
    if (amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    setShowConfirmModal(true);
  };

  const handleConfirmPurchase = () => {
    if (pin !== "1234") {
      alert("Incorrect PIN. Try again.");
      return;
    }

    setShowConfirmModal(false);
    setIsBuying(true);

    setTimeout(() => {
      let currentBalance = parseFloat(localStorage.getItem("accountBalance")) || 45934;

      if (currentBalance >= 200) {
        currentBalance -= 300;
        localStorage.setItem("accountBalance", currentBalance.toString());
      } else {
        alert("Insufficient funds!");
        setIsBuying(false);
        return;
      }

      const newPurchase = {
        broker: selectedBroker,
        method: buyMethod,
        coin: selectedCoin,
        amount,
        timestamp: Date.now(),
      };

      const updatedHistory = [newPurchase, ...buyHistory];
      setBuyHistory(updatedHistory);
      localStorage.setItem("buyHistory", JSON.stringify(updatedHistory));

      setIsBuying(false);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });

      alert(`Successfully bought ${amount} ${selectedCoin}. New balance: $${currentBalance}`);

      setAmount("");
      setPin("");
    }, 2000);
  };

  return (
    <section className="mt-6">
      <div className="flex items-center space-x-10">
        <div>
          <label className="block text-gray-400 font-semibold mb-2">Broker:</label>
          <select
            value={selectedBroker}
            onChange={(e) => setSelectedBroker(e.target.value)}
            className="border border-purple-500 rounded p-2 bg-purple-400 bg-gradient-to-r from-purple-500 to-blue-500 cursor-pointer"
          >
            {brokers.map((broker) => (
              <option key={broker.id} value={broker.id}>
                {broker.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-400 font-semibold mb-2">Method:</label>
          <select
            value={buyMethod}
            onChange={(e) => setBuyMethod(e.target.value)}
            className="border border-green-500 rounded p-2 bg-green-300 bg-gradient-to-r from-green-500 to-green-700 cursor-pointer"
          >
            <option value="bankTransfer">Bank Transfer</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-400 font-semibold mb-2">Coin:</label>
          <select
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
            className="border border-blue-500 rounded p-2 bg-blue-300 bg-gradient-to-r from-blue-500 to-blue-600 cursor-pointer"
          >
            {coins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-gray-600 font-semibold mb-2">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-600 rounded p-2 w-full"
          placeholder="Enter amount"
        />
      </div>

      <button
        onClick={handleBuyClick}
        className="mt-4 bg-blue-500 text-white p-3 cursor-pointer hover:bg-blue-600 rounded"
      >
        Buy Cryptocurrency
      </button>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="p-6 rounded shadow-md w-96 bg-transparent border border-gray-600">
            <h2 className="text-lg font-semibold text-white">Enter Private Key</h2>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="border border-gray-600 rounded p-2 w-full mt-2 text-white text-sm"
              placeholder="Enter PIN"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="mr-2 p-2 bg-red-500 rounded text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPurchase}
                className="p-2 bg-green-500 text-white rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Simulation */}
      {isBuying && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="p-6 rounded shadow-md w-96 bg-transparent border border-gray-600 text-white flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
            <p className="text-lg font-semibold text-center mt-4">Processing your purchase...</p>
          </div>
        </div>
      )}

      {/* Buy History */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold">Purchase History</h3>
        <ul className="mt-2 rounded text-sm">
          {buyHistory.length === 0 ? (
            <p>No purchase history yet.</p>
          ) : (
            buyHistory.map((entry, index) => (
              <li key={index} className="border-b border-gray-600 py-5">
                <span className="font-semibold mr-2 text-blue-400">
                  {new Date(entry.timestamp).toLocaleString()}:
                </span>
                Bought {entry.amount} {entry.coin} via {entry.broker} ({entry.method})
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default BuyCryptoSection;
