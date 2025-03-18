import BuyCryptoSection from './BuyCrypto';


const Buy = () => {
  return (
    <>
      <section className="w-4/5 mt-3 mx-auto bg-base-200 p-6 rounded-md shadow-md dark:bg-base-200">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Buy Cryptocurrency</h2>
        
        <BuyCryptoSection />
        
      </section>
    </>
  );    
}

export default Buy;