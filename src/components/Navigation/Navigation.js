import React, {useContext, useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Navigation.css'
import { CartContext } from '../CartContext'
import * as FaIcons from 'react-icons/fi'
import Cart from '../Cart'

function Navigation( {history} ) {
    const [cart, setCart, sidebar, setSidebar, showSidebar] = useContext(CartContext);

    return (
        <>  
            <div className = "navbar">
                <Link to = "/" className = "nav-link">Home</Link>
                <Link to = "/about" className = "nav-link">About</Link>
                <Link to = "#" className = "cart-icon">
                    <FaIcons.FiShoppingCart onClick = {showSidebar} />
                </Link>
                <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className = 'nav-menu-items'>
                        <li className = 'navbar-toggle'>
                            <Link to = "#" className = 'close-icon'>
                                <FaIcons.FiX onClick = {showSidebar} />
                            </Link>
                        </li>
                    </ul>
                    
                </nav>
            </div>
        </>
    )
}

export default withRouter(Navigation);