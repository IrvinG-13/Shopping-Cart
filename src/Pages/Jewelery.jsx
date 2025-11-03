import { Link, useOutletContext } from "react-router-dom";
import { getProducts } from "../Services/ProductService";
import {useState, useEffect} from "react";

export default function Jewelery(){

    const [products, setProducts] = useState([])
    const {addCart} = useOutletContext() 

    useEffect(()=>{
        getProducts().then(data =>{
            const jewelery = data.filter(item =>
                item.category === "jewelery"
            )
            setProducts(jewelery)
        })
    },[])

    return(
        <div className="Content-Jewelery">
            <div className="headerJewelery">
                <Link to="/shop"><i className="bi bi-arrow-return-left"></i></Link>
                <h1>Jewelery</h1>
            </div>

            <div className="products">
                    {products.map(p =>(
                        <div key={p.id} className="product-card">
                            <img src={p.image} alt={p.title} className="product-img" />
                            <p>{p.title}</p>
                            <p>Price: ${p.price}</p>
                            <p>Rate: {p.rating.rate}</p>
                            <button onClick={()=> addCart(p)} className="btnAdd">Add to Cart</button>
                        </div>                    
                    ))}
            </div>
            
        </div>
    )
}