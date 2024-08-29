import React, { useContext } from 'react';
import { MyContext } from '../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';


const Logout = () => {
  const [authUser, setAuthUser] = useContext(MyContext);

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        users: null,
      });
      localStorage.removeItem("users");
      toast.success("Logout successfully", );
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    
    } catch (error) {
      toast.error(error);

    }
  };

  return (
    <div>
       <Toaster/>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
