import React, { useState } from 'react';

const Receive = () => {
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const exampleAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'; 
  const qrCodeImageUrl = '/src/Images/qr-code.png'; 

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(exampleAddress);
    setModalOpen(true);
  };

  const handleCopyQRCode = () => {
    navigator.clipboard.writeText(qrCodeImageUrl);
    setModalOpen(true);
  };

  const handleDownloadQRCode = () => {
    const link = document.createElement('a');
    link.href = qrCodeImageUrl;
    link.download = 'qrcode.png'; // Specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <>
      <section className="w-4/5 mt-3 mx-auto bg-base-200 p-6 rounded-md shadow-md dark:bg-base-200 flex flex-col md:flex-row">
        <div className="flex flex-col w-full">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Receive Cryptocurrency</h2>

          <div className="mt-4">
            <label className="text-gray-700 dark:text-gray-200" htmlFor="receive-address">Your Address</label>
            <div className="flex items-center mt-2">
              <input
                id="receive-address"
                type="text"
                value={exampleAddress}
                readOnly
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none"
              />
              <button onClick={handleCopyAddress} className="ml-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500">Copy</button>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center '>
            <div
              className="flex justify-center items-center"
              style={{
                backgroundImage: `url('/src/Images/qr-border-removebg-preview.png')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '370px',
                width: '370px' 
              }}
            >
              <img src={qrCodeImageUrl} alt="QR Code" className="w-48 h-48 relative z-0" /> 
            </div>

            <div className="space-x-5">
              <button onClick={handleCopyQRCode} className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500">Copy QR Code URL</button>
              <button onClick={handleDownloadQRCode} className="px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-500">Download QR Code</button>
            </div>
          </div>

          {/* Receive History Section */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Receive History</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between p-4 bg-gray-100 rounded-md dark:bg-gray-800">
                <div>
                  <p className="text-gray-800 dark:text-gray-300">{exampleAddress}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">01/01/2023</p>
                </div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">0.05 BTC</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modal */}
      <dialog id="receive_modal" className="modal" open={modalOpen}>
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
          </form>
          <h3 className="font-bold text-lg">Action Completed!</h3>
          <p className="py-4">The information has been copied to your clipboard.</p>
        </div>
      </dialog>
    </>
  );
}

export default Receive;