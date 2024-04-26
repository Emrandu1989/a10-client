import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo/f968c78672567853f8bf8907e903a91d.jpg';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const NavBar = () => {
  const { users, logOut } = useContext(AuthContext);

  // Ensure users and logOut are defined and behave as expected
  console.log(users);
  console.log(logOut);

  const navLinks = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addCraft'>Add Craft Item</NavLink></li>
      <li><NavLink to='/allArtAndCraft'>All Art & Craft Items</NavLink></li>
      <li><NavLink to='/myArt&CraftList'>My Art & Craft List</NavLink></li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="navbar h-[150px] bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl -mt-6 text-orange-500">J&W Store
          <img className="w-[150px] h-[100px]" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end space-x-5">
        {users ?
          <>
            <button onClick={handleLogOut} className="btn btn-outline">LogOut</button>
          </> :
          <>
            <Link to='/login'><button className="btn btn-outline">Login</button></Link>
          </>
        }
        <Link to='/register'><button className="btn btn-outline">Register</button></Link>
      </div>
    </div>
  );
};

export default NavBar;
