import "./Cartpage.css"

function Cartpage() {
    return (
        <div className='mainSite'>
        <div className="cart">
            <section className="pInCart">
                <img className="pImage" src="bb.png" alt="Product Name" />
                <div className="pDetails">
                    <h4 className="pTitle">Product Name</h4>
                    <p className="pDescription">Product description goes here.</p>
                    <p className="pPrice">$99.99</p>
                    <button className="siteButton">Remove Item</button>
                </div>
            </section>
            
            <button className="checkoutBtn">Checkout</button>
        </div>
    </div>
    )
}

export default Cartpage