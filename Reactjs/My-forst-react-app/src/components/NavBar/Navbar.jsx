import React from 'react'

function Navbar() {
return (
    <div>
        <nav className="bg-blue-600 p-4 rounded-md shadow-md fixed top-0 left-0 w-full z-50">
            <ul className="flex space-x-8 justify-center">
                <li>
                    <a href="#" className="text-white font-semibold hover:text-blue-200 transition">Home</a>
                </li>
                <li>
                    <a href="#" className="text-white font-semibold hover:text-blue-200 transition">About</a>
                </li>
                <li>
                    <a href="#" className="text-white font-semibold hover:text-blue-200 transition">Contact Us</a>
                </li>
                <li>
                    <a href="#" className="text-white font-semibold hover:text-blue-200 transition">More</a>
                </li>
            </ul>
        </nav>
    </div>
)
}

export default Navbar