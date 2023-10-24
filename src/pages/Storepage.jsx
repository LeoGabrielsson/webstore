import { useEffect, useState } from "react";
import "./Storepage.css"
import ProductCard from "../components/ProductCard"

function Storepage() {
    const [products, setProducts] = useState([])

    async function fetchProducts() {
        await fetch(`http://localhost:3000/product`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setProducts(result.data)
            }).catch(err => {
                console.log(err)
            });
    }


    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='storeSite'>
            <div className="store">
                <ul>
                    {products.length > 0 ? (
                        <>
                            {products.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    img={item.image}
                                    name={item.name}
                                    price={item.price}
                                />
                            ))}
                        </>
                    ) :
                        <p>Problem loading products...</p>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Storepage