import { Link } from "react-router-dom"

function ProductCard(props) {
    let { id, img, name, price } = props

    var cartItems = JSON.parse(localStorage.getItem('cartItems'));

    const addItem = () => {
        cartItems = JSON.parse(localStorage.getItem('cartItems'));
        let newCartItems

        if (cartItems.find(item => item.id === id)) {
            newCartItems = cartItems.map(item => {
                if (item.id === id) {
                    item.amount += 1
                }
                return item
            })
        } else {
            newCartItems = [...cartItems, { id: id, name: name, img: img, price: price, amount: 1 }]
        }

        console.log(cartItems)
        console.log(newCartItems)
        if (cartItems === newCartItems) {
            alert('Something went wrong, please try again')
        } else {
            alert(name + ' added to cart')
        }

        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

    return (
        <li className='card'>
            <Link to={`/product/${id}`}>
                <img src={img} alt={name} />
                <p>
                    {name}
                </p>
                <p>
                    {price} kr
                </p>
            </Link>
            <button onClick={() => { document.getElementById('cart').style.display = 'none'; addItem() }}>Add to Cart</button>
        </li>
    )
}

export default ProductCard