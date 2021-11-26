import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import Card from '../Card/Card'
import {MenuItems} from './MenuItems'
import Logo from '../../images/logo.svg'
import Profile from '../../images/image-avatar.png'
import Backdrop from './Backdrop'
import './Navbar.css'
import ProductImg from '../../images/image-product-4-thumbnail.jpg'


const Navbar = () => {
    const [clicked, setClicked] = useState(false) 
    const [showCart, setShowCart] = useState(false)

    function handleClick() {
        setClicked(!clicked)
    }
    
    return (
        <nav className="NavbarItems">
            {clicked && <Backdrop/>}
            <div className="navbar-item-1">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars fa-lg'}></i>
                </div>
                <img src={Logo} alt="logo" className="navbar-logo"/>
            </div>
            
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}><Link className={item.cName} to={item.url}>{item.title}</Link></li>
                    )
                })}
            </ul>
            <div className="navbar-item-2">
                <i className="fas fa-shopping-cart" onClick={() => {
                    if(showCart){
                        setShowCart(false)
                    }
                    else{
                        setShowCart(true)
                    }
                }}></i>
                <Card 
                    showCart={showCart} 
                    productImage={ProductImg} 
                    description="Fall Limited Edition Sneakers $125.00 * $375.00"
                    message="checkout"
                    header = "Cart"
                />
                <img src={Profile} alt="profile" className="navbar-profile"/>
            </div>

        </nav>
    )
}

export default Navbar