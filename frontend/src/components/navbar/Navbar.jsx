import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        // <nav className='navbar'>
        //     <span>SaaShubz</span>
        //     <ul>
        //         <li>Solutions</li>
        //         <li>SaaS Marketplace</li>
        //         <li>Services Marketplace</li>
        //         <li>Pricing</li>
        //         <li>Mastermind</li>
        //         <li>About</li>
        //     </ul>
        // </nav>
        <nav className="nav-wrapper">
            <div className="nav-content">
                {/* <Link className="nav-link" to="/"> */}
                <span id='logo'>SaaShubz</span>
                {/* </Link> */}
                <ul>
                    <li id="nav-ele">Solutions</li>
                    <li>SaaS Marketplace</li>
                    <li>Services Marketplace</li>
                    <li>Pricing</li>
                    <li>Mastermind</li>
                    <li>About</li>
                    {/* <Link className="nav-link" to="/register"> */}

                    {/* </Link> */}

                    {/* <button id="btn-login">Login</button> */}
                </ul>
                <button id="btn-start">Get Started</button>
                {/* <button>Start Free Trial</button>
          <button>Login</button> */}
            </div>
        </nav >
    )
}

export default Navbar
