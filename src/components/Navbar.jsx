import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className='navMain'>
                <Link to="/">
                    <img className="logo" src="/imgs/BnB.png" alt="Bark & Bowtie Logo" />
                </Link>
            </div>

            <div className='searchComps'>
                <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" className="searchButton">Search</button>
            </div>

            <div className='navItem navBtns'>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/your-cart"> <img className='cartIcon' src="/src/imgs/cart.png" alt="Shopping Cart Button" /> </Link>
            </div>
        </nav>
    )
}

export default Navbar