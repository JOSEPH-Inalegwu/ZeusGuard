import React from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <>
      <div className="container w-4/5 mx-auto dark:bg-base-200  mt-5 px-6 py-4 border border-black/10 rounded-sm shadow-2xs">
        <div className="space-y-3">
          <h2 className="text-2xl text-green-500 font-semibold">My Wallet</h2>

          <h1 className="text-3xl font-bold">$42,934</h1>
        </div>

        {/* Transaction Options */}
        <div className="mt-6 flex items-center justify-between mx-20">
          <Link to='/app/send' className="text-center space-y-1 cursor-pointer">
            <div className="bg-black/60 rounded-full p-3 hover:bg-black/80 hover:scale-105 transition-smooth duration-300">
              <img
                src="/src/assets/send.svg"
                alt="Send"
                className="w-10 transform rotate-180"
                width="40"
              />
            </div>
            <p>Send</p>
          </Link>

          <Link to='/app/receive' className="text-center space-y-1 cursor-pointer ">
            <div className="bg-black/60 rounded-full p-3 hover:bg-black/80 hover:scale-105 transition-smooth duration-300">
              <img
                src="/src/assets/send.svg"
                alt="Send"
                className="w-10 transform rotate-180"
                width="40"
              />
            </div>
            <p>Receive</p>
          </Link>

          <div className="text-center space-y-1 cursor-pointer">
            <div className="bg-black/60 rounded-full p-3 hover:bg-black/80 hover:scale-105 transition-smooth duration-300">
              <img
                src="/src/assets/wallet.svg"
                alt="Send"
                className="w-10 transform rotate-180"
                width="40"
              />
            </div>
            <p>Buy</p>
          </div>

          <div className="text-center space-y-1 cursor-pointer">
            <div className="bg-black/60 rounded-full p-3 hover:bg-black/80 hover:scale-105 transition-smooth duration-300">
              <img
                src="/src/assets/coin2.svg"
                alt="Send"
                className="w-10 transform rotate-180"
                width="40"
              />
            </div>
            <p>Earn</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account