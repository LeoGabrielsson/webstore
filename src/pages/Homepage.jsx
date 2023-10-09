import { Link } from 'react-router-dom'
import "./Homepage.css"

function Homepage() {
    return (
        <div className='mainSite'>
            <div className="CTA">
                <h3 className='CTAText'>Discover the clothes that Barks!</h3>
                <Link to="/products">
                    <button className='CTABtn'>Our Products</button>
                </Link>
            </div>

            <article className="bestSellers">
                <h3>Bestsellers</h3>

                <div className="bestProducts">
                    <section className="pCard">
                        <img className="pImage" src="src/imgs/phIMG.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description</p>
                            <p className="pPrice">$34.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>

                    <section className="pCard">
                        <img className="pImage" src="src/imgs/phIMG.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description</p>
                            <p className="pPrice">$34.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>

                    <section className="pCard">
                        <img className="pImage" src="src/imgs/phIMG.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description</p>
                            <p className="pPrice">$34.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>

                    <section className="pCard">
                        <img className="pImage" src="src/imgs/phIMG.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description</p>
                            <p className="pPrice">$34.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>

                    <section className="pCard">
                        <img className="pImage" src="src/imgs/phIMG.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description</p>
                            <p className="pPrice">$34.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>
                </div>

            </article>
        </div>
    )
}

export default Homepage