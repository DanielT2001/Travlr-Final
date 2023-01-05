import React from 'react'

function MenuOverlay({ menu }) {
    return (
        <div id="menu" className={`absolute top-0 bottom-0 left-0 right-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase z-10 opacity-90 bg-gradient-to-t from-sky-500 to-white ${menu ? '' : 'hidden'} `}>
            <a href="//" className="hover:text-rose-400">Packages</a>
            <a href="//" className="hover:text-rose-400">Destinations</a>
            <a href="//" className="hover:text-rose-400">Contact Us</a>
            <a href="//" className="hover:text-rose-400">About Us</a>
        </div>
    )
}

export default MenuOverlay