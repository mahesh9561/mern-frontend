import React from 'react'
import { useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    return (
        <div className=" bg-gradient-to-tr from-blue-300 to-blue-700 h-[33vh]">
            <nav className=' flex justify-center text-white items-center' >
                {
                    location.pathname === '/login' ? (
                        'Please Login'
                    ) : location.pathname === '/' ? (
                        'Please Register'
                    ) : (
                        <div></div>
                    )
                }
            </nav>
        </div>
    )
}

export default Navbar