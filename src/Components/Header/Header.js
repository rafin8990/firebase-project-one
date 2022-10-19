import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {

    const {user, logOut}=useContext(AuthContext);

    const handleSignOut=()=>{
        logOut()
        .then(()=>{})
        .error(error=>console.error(error));
    };
    return (
        <div className='flex justify-around'>
            <div className="navbar bg-primary text-primary-content">
                <Link  to='/' className="btn btn-ghost normal-case text-xl">Authentication</Link>
                <Link className='ml-4 btn btn-ghost normal-case text-xl' to='/'>Home</Link>
                <Link className='ml-4 btn btn-ghost normal-case text-xl' to='/orders'>Orders</Link>
                <Link className='ml-4 btn btn-ghost normal-case text-xl' to='/login'>Log In</Link>
                <Link className='ml-4 btn btn-ghost normal-case text-xl' to='/register'>Register</Link>
                

                {
                    user?.email && <p>{user.email} </p>
                }
                <button onClick={handleSignOut} className="btn btn-sm">Sign Out</button>
            </div>
        </div>
    );
};
export default Header;