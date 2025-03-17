import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Function to determine if the Home link should be active
  const isHomeActive = () => {
    return location.pathname === '/app' || location.pathname === '/app/home';
  };

  return (
    <>
      <div className="w-full bg-base-200 mt-5 px-6 py-4 border border-b-0 border-x-0 border-t-gray-600 shadow-md rounded-sm bottom-0 sticky ">
        <div className="flex justify-between items-center w-2/3 mx-auto ">
          <NavLink
            to="/app" 
            className={`flex flex-col items-center cursor-pointer ${isHomeActive() ? 'text-green-500 font-bold' : 'text-gray-300'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
              <path fill="#E8EAF6" d="M42 39L6 39 6 23 24 6 42 23z"></path>
              <path fill="#C5CAE9" d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z"></path>
              <path fill="#B71C1C" d="M24 4.3L4 22.9 6 25.1 24 8.4 42 25.1 44 22.9z"></path>
              <path fill="#D84315" d="M18 28H30V44H18z"></path>
              <path fill="#01579B" d="M21 17H27V23H21z"></path>
              <path fill="#FF8A65" d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"></path>
            </svg>
            <p className="text-sm">Home</p>
          </NavLink>

          <NavLink
            to="" 
          >
            <img src="src/Images/icons8-exchange-96.png" alt="" className="w-6" />
            <p className="text-sm">Exchange</p>
          </NavLink>

          <NavLink
            to="" 
          >
            <img src="src/Images/icons8-cash-in-hand-96.png" alt="" className="w-6" />
            <p className="text-sm">Earn</p>
          </NavLink>

          <NavLink
            to="/app/wallet" 
            className={({ isActive }) => `flex flex-col items-center cursor-pointer ${isActive ? 'text-green-500 font-bold' : 'text-gray-300'}`}
          >
            <img src="src/Images/icons8-wallet-96.png" alt="" className="w-6" />
            <p className="text-sm">Wallet</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;