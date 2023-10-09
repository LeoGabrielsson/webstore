import "./Cartpage.css"

function Cartpage() {
    return (
        <div className='cartSite'>
            <div className="cart">
                <section className="pInCart">
                    <img className="pImage" src="src/imgs/phIMG.jpg" alt="Product Name" />
                    <div className="pDetails">
                        <h4 className="pTitle">Product Name</h4>
                        <p className="pDescription">Product description</p>
                        <p className="pPrice">$34.99</p>
                        <button className="siteButton">Remove Item</button>
                    </div>
                </section>

                <button className="checkoutBtn">Checkout</button>
            </div>
        </div>
    )
}

export default Cartpage