import React, {useContext, useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Navigation.css'
import { CartContext } from '../CartContext'
import * as FaIcons from 'react-icons/fi'

function Navigation( {history} ) {
    const [cart, setCart] = useContext(CartContext);
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className = "navbar">
                <h1>Luna Spice Co</h1>
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/cart" className = "menu-bars">
                    <FaIcons.FiShoppingCart onClick = {showSidebar} />
                </Link>
                <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className = 'nav-menu-items'>
                        <li className = 'navbar-toggle'>
                            <Link to = "#" className = 'menu-bars'>
                                <FaIcons.FiX />
                            </Link>
                        </li>
                    </ul>
                    <button onClick = {() => history.push('/checkout')}>Checkout</button>
                </nav>
            </div>
            
        </>
    )
}

export default withRouter(Navigation);