import React, { useState } from 'react'
import MenuOverlay from './MenuOverlay'

function Menu() {
    const [opener, setOpener] = useState(false)
    const [menu, setMenu] = useState(false)

    const openHandler = () => {
        if (opener === false) {
            setMenu(true)
            setOpener(true)
        } else {
            setMenu(false)
            setOpener(false)
        }
    }
    return (
        <>
            <div className="sm:hidden">
                <button type="button" className={`z-40 block hamburger md:hidden focus:outline-none ${opener ? `open` : ''}`} id='menu-btn' onClick={openHandler} >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
            <MenuOverlay menu={menu} />
        </>
    )
}

export default Menu