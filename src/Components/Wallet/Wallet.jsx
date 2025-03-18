import React from 'react'
import WalletCoinsProp from './WalletCoinsProp'
import Withdrawal from './Withdrawal'

const Wallet = () => {
  return (
    <>
      <div className="container w-4/5 mx-auto dark:bg-base-200  mt-5 px-6 py-4 border border-black/10 rounded-sm shadow-2xs">
        <div className="space-y-3">
          <h2 className="text-xl text-slate-300 font-semibold">Latest recipient</h2>
        </div>

        <div className="mt-6 flex items-center justify-between mx-20">
          <div>
            <img src="/src/Images/avt7.jpg" alt="" 
            className='rounded-full w-15 h-15' />
            <p className='text-sm font-semibold my-2'>John Doe</p>
          </div>
          <div>
            <img src="/src/Images/avt6.jpg" alt="" 
            className='rounded-full w-15 h-15' />
            <p className='text-sm font-semibold my-2'>Mari Currie</p>
          </div>
          <div>
            <img src="/src/Images/download (1).jfif" alt="" 
            className='rounded-full w-15 h-15' />
            <p className='text-sm font-semibold my-2'>Charlotte Ji</p>
          </div>
          <div>
            <img src="/src/Images/images.jfif" alt="" 
            className='rounded-full w-15 h-15' />
            <p className='text-sm font-semibold my-2'>Gracy Jones</p>
          </div>
          <div>
            <img src="/src/Images/avt4.jpg" alt="" 
            className='rounded-full w-15 h-15' />
            <p className='text-sm font-semibold my-2'>Frank Tim</p>
          </div>
          <div>
            <img src="/src/Images/avt3.jpg" alt="" 
            className='rounded-full w-15 h-15' />
            <p className='text-sm font-semibold my-2'>Smith Stone</p>
          </div>
        </div>
      </div>

      <div className='container w-4/5 mx-auto flex mt-2 space-x-12'>
        {/* Coins Received */}
        <div className='w-2/3 dark:bg-base-200 mt-2 px-2 py-4 space-y-3 border border-black/10 rounded-sm shadow-2xs'>
          <WalletCoinsProp 
            name='BTC'
            image='/src/assets/bitcoin.svg'
            color={'bg-yellow-600'}
            time='06:30 AM'
            increase='+ BTC 0.0089'
            decrease='-0.0003'
          />

          <WalletCoinsProp 
            name='ETH'
            image='/src/assets/etherium.svg'
            color={'bg-blue-500'}
            time='12:00 AM'
            increase='+ ETH 1,498'
            decrease='-0.0005'
          />

          <WalletCoinsProp 
            name='SHB'
            image='/src/assets/shiba.svg'
            color={'bg-red-500'}
            time='11:22 PM'
            increase='+ SHB 2,018'
            decrease='-0.0008'
          />

          <WalletCoinsProp 
            name='ATOM'
            image='/src/assets/cosmos.svg'
            color={'bg-slate-800'}
            time='14:51 PM'
            increase='+ ATOM 3,900'
            decrease='-0.00031'
          />
        </div>

        {/* Withdrawal Option */}
        <div className='w-2/3'>
          <Withdrawal />
        </div>
      </div>
    </>
  )
}

export default Wallet