import { Link } from 'react-router-dom'
import "./Homepage.css"

function Homepage() {
    return (
        <div className='mainSite'>
            <div className="CTA">
                <h3 className='CTAText'>Discover the clothes that Bark!</h3>
                <Link to="/products">
                    <button className='CTABtn'>Our Products</button>
                </Link>
            </div>

            <article className="bestSellers">
                <h3>Bestsellers</h3>

                <div className="bestProducts">
                    <section className="pCard">
                        <img className="pImage" src="/src/imgs/phIMG.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description</p>
                            <p className="pPrice">$34.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>

                    <section className="pCard">
                        <img className="pImage" src="/src/imgs/phIMG.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description</p>
                            <p className="pPrice">$34.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>

                    <section className="pCard">
                        <img className="pImage" src="/src/imgs/phIMG.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description</p>
                            <p className="pPrice">$34.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>

                    <section className="pCard">
                        <img className="pImage" src="/src/imgs/phIMG.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description</p>
                            <p className="pPrice">$34.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>

                    <section className="pCard">
                        <img className="pImage" src="/src/imgs/phIMG.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description</p>
                            <p className="pPrice">$34.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>
                </div>

            </article>
            <article className='infoText'>
                <h3>Giving pet clothes the bite that matches their bark</h3>
                <p>Since 1990, lorem ipsum dolor sit amet consectetur adipisicing elit. Optio explicabo iste ipsam a laudantium saepe aliquid maiores nostrum quibusdam, molestiae numquam labore fuga deserunt, ut corporis tenetur, maxime similique ipsa?</p>
            </article>
        </div>
    )
}

export default Homepage