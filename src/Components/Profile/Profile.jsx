import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import ProfilePictureUpload from './ProfilePictureUpload';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    accountNumber: '',
    bankName: '',
    paymentMethod: '',
    cryptoNetwork: ''
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('profileData'));
    if (savedData) {
      setFormData(savedData);
      setIsSaved(true);
    }
  }, []);

  useEffect(() => {
    if (showConfetti) {
      launchConfetti();
    }
  }, [showConfetti]); 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem('profileData', JSON.stringify(formData));
      setIsSaving(false);
      setIsSaved(true);
      setIsEditing(false);
      setShowModal(true);
      setShowConfetti(true);

      setTimeout(() => setShowModal(false), 2000);
      setTimeout(() => setShowConfetti(false), 3000);
    }, 1000);
  };

  const launchConfetti = () => {
    var duration = 2 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 7,
        spread: 100,
        origin: { y: 0.6 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className='relative w-4/5 mx-auto mt-2 bg-base-200 shadow-sm px-6 py-6 border border-gray-800'>

      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-3'>
          <label className='cursor-pointer'>
            <ProfilePictureUpload />
          </label>
          <div className="w-60">
            <h3 
              className="text-2xl font-bold w-full overflow-hidden text-ellipsis whitespace-nowrap"
              title={formData.fullName} 
            >
              {formData.fullName || ''}
            </h3>
            <p className="text-sm">{formData.email || ''}</p>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(true)}
          disabled={isEditing}
          className={`px-8 py-3 rounded-full transition ease-in-out ${
            isEditing ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
          }`}
        >
          {isEditing ? "Editing..." : "Edit"}
        </button>
      </div>

      <div className='mt-10'>
        <form className='flex space-x-10'>
          <div className='space-y-8 w-2/3'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='fullName' className='text-gray-300'>Full Name</label>
              <input type='text' name='fullName' value={formData.fullName} onChange={handleInputChange} disabled={!isEditing} className='border border-gray-600 rounded-xl px-3 py-2' />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='email' className='text-gray-300'>Email</label>
              <input type='email' name='email' value={formData.email} onChange={handleInputChange} disabled={!isEditing} className='border border-gray-600 rounded-xl px-3 py-2' />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='phoneNumber' className='text-gray-300'>Phone Number</label>
              <input type='number' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} disabled={!isEditing} className='border border-gray-600 rounded-xl px-3 py-2' />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='gender' className='text-gray-300'>Gender</label>
              <select name='gender' value={formData.gender} onChange={handleInputChange} disabled={!isEditing} className='bg-base-200 border border-gray-600 rounded-xl px-3 py-2'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
          </div>

          <div className='w-2/3 space-y-8'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='accountNumber' className='text-gray-300'>Account Number</label>
              <input type='number' name='accountNumber' value={formData.accountNumber} onChange={handleInputChange} disabled={!isEditing} className='border border-gray-600 rounded-xl px-3 py-2' />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='bankName' className='text-gray-300'>Bank Name</label>
              <input type='text' name='bankName' value={formData.bankName} onChange={handleInputChange} disabled={!isEditing} className='border border-gray-600 rounded-xl px-3 py-2' />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='paymentMethod' className='text-gray-300'>Preferred Payment Method</label>
              <select name='paymentMethod' value={formData.paymentMethod} onChange={handleInputChange} disabled={!isEditing} className='bg-base-200 border border-gray-600 rounded-xl px-3 py-2'>
                <option value='bank'>Bank Transfer</option>
                <option value='paypal'>PayPal</option>
                <option value='crypto'>Crypto</option>
              </select>
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor='cryptoNetwork' className='text-gray-300'>Crypto Network</label>
              <select name='cryptoNetwork' value={formData.cryptoNetwork} onChange={handleInputChange} disabled={!isEditing} className='bg-base-200 border border-gray-600 rounded-xl px-3 py-2'>
                <option value='erc20'>ERC-20</option>
                <option value='bep20'>BEP-20</option>
                <option value='trc20'>TRC-20</option>
              </select>
            </div>
          </div>
        </form>

        <div className="space-y-2 mt-10">
          <button
            onClick={handleSave}
            disabled={!isEditing}
            className={`bg-green-500 px-15 py-3 rounded-2xl transition ease-in-out flex items-center justify-center ${
              !isEditing ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
            }`}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-50 backdrop-blur-sm">
          <div className="text-black px-6 py-4 rounded-lg shadow-lg bg-white">
            <p className="text-sm font-bold">🎉 Profile Updated! 🎉</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
