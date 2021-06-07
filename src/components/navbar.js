import React from 'react'
import '../style/style.css'
import stockLogo from '../images/stockLogo.png'

const Navbar = () => {

    return (
        <React.Fragment>
            <header className="container head-wrap mt-3">
            <div className="logo">
                {/* <h3>Logo</h3> */}
              <img src={stockLogo} />
            </div>
            <nav>
                <ul className="nav navbar">
                    <li className="nav-link"><a href="/">Home</a></li>
                    <li className="nav-link"><a href="/store">Store</a></li>
                    <li className="nav-link"><a href="/login">Login</a></li>
                    {/* <li className="nav-link"><a href="/stock">Stock</a></li>
                    <li className="nav-link"><a href="/cashier">Cashier</a></li> */}
                    
                </ul>
            </nav>
            </header>
        </React.Fragment>
    )
}

export default Navbar
