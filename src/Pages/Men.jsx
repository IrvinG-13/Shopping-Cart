import { Link, useOutletContext } from "react-router-dom"
import { useState, useEffect } from "react";
import { getProducts } from "../Services/ProductService";


export default function Men(){
    const [products, setProducts] = useState([])
    const {addCart} = useOutletContext()
    

    useEffect(()=>{
        getProducts().then(data =>{
            const men = data.filter(item =>
                item.category === "men's clothing"
            )
            setProducts(men)
        }) 
    },[])

    return(
        <div className="Content-Men">
            <div className="headerMen">
                <Link to="/shop"><i className="bi bi-arrow-return-left"></i></Link>
                <h1>Men's</h1>                   
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