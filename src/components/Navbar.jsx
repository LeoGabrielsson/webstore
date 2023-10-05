import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className='navMain'>
                <Link to="/">
                    <img className="navItem logo" src="/src/imgs/B).png" alt="Bark & Bowtie Logo" />
                </Link>
                <h2 className='navItem title'>Bark & Bowtie</h2>
            </div>

            <div className='searchComps'>
                <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" className="searchButton">Search</button>
            </div>

            <div className='navItem navBtns'>
                <Link to="/">Home</Link>
                <Link to="/products">Our Products</Link>
                <Link to="/your-cart"> <img className='cart' src="/src/imgs/B).png" alt="Bark & Bowtie Logo" /> </Link>
            </div>
        </nav>
    )
}

export default Navbar