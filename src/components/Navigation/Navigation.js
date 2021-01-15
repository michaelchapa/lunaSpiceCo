import React, {useContext, useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Navigation.css'
import { IconContext } from 'react-icons'
import { CartContext } from '../CartContext'
import * as FaIcons from 'react-icons/fi'

function Navigation( {history} ) {
    const [cart, setCart] = useContext(CartContext);
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    function toCheckout(){
        history.push('/checkout');
        showSidebar();
    }

    return (
        <>
            <IconContext.Provider value = {{ color: '#ff29d1' }}>
                <div className = "navbar">
                    <Link to = "/">Home</Link>
                    <Link to = "/about">About</Link>
                    <Link to = "#" className = "menu-bars">
                        <FaIcons.FiShoppingCart onClick = {showSidebar} />
                    </Link>
                    <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className = 'nav-menu-items'>
                            <li className = 'navbar-toggle'>
                                <Link to = "#" className = 'menu-bars'>
                                    <FaIcons.FiX onClick = {showSidebar} />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default withRouter(Navigation);