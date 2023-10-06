import "./Homepage.css"

function Homepage() {
    return (
        <div className='mainSite'>
            <div className="CTA">
                <button>Hej</button>
            </div>

            <article className="bestSellers">
                <h3>Bestsellers</h3>

                <div className="bestProducts">
                    <section className="pCard">
                        <img className="pImage" src="imgs/shirt.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description goes here.</p>
                            <p className="pPrice">$99.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>

                    <section className="pCard">
                        <img className="pImage" src="imgs/shirt.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description goes here.</p>
                            <p className="pPrice">$99.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>

                    <section className="pCard">
                        <img className="pImage" src="imgs/shirt.jpg" alt="Product Name" />
                        <div className="pDetails">
                            <h4 className="pTitle">Product Name</h4>
                            <p className="pDescription">Product description goes here.</p>
                            <p className="pPrice">$99.99</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </section>
                </div>

            </article>
        </div>
    )
}

export default Homepage