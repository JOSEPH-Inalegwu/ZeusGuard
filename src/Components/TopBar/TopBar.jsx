const TopBar = () => {
  return (
    <>
      <div className="navbar w-4/5 mx-auto bg-base-200 shadow-sm px-6 border border-gray-800 flex justify-between items-center top-0 sticky z-50">
        {/* User Profile */}
        <div className="">
          <div className="dropdown dropdown-start">
            <div tabIndex={1} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Profile Image"
                  src="/profile.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>

        {/* Search Bar */}
        <div className="border border-gray-500 rounded-full px-4 py-2 flex items-center w-2/3">
          <input
            type="text"
            placeholder="Looking for Crypto"
            className="text-sm w-full outline-none"
          />
          <img
            src="/src/assets/searchIcon.svg"
            alt="Search Icon"
            className="w-5 h-5 ml-2"
          />
        </div>

        {/* Notification and Gift Icons */}
        <div className="flex items-center justify-center border border-gray-500 bg-base-100 space-x-4 px-4 rounded-full">
          <div className="dropdown dropdown-end">
            {/* Notification Icon */}
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <img
                  src="/src/assets/bell.svg"
                  alt=""
                  className="w-6"
                />
                <span className="px-2 rounded-full indicator-item bg-red-500">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          {/* Gift Icon */}
          <div>
            <img src="/src/assets/gift.svg"
              alt=""
              className="w-7"
            />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '0px' }} /> 
    </>
  )
}

export default TopBar;