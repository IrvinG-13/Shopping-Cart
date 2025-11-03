import { Link, useOutletContext } from "react-router-dom";

export default function Cart(){
    const {cart, incQty, decQty, removeItem} = useOutletContext()
    return(
        <div className="contentCart">
            <div className="headerCart">                
                <Link to="/"><i className="bi bi-arrow-return-left"></i></Link>
                <h1>Your Cart</h1>
                {cart.length === 0 && <p>No items Yet</p>}
            </div>
            <div className="titles">
                <p>Product</p>
                <p>Amount</p>
                <p>Total</p>
            </div>
            <hr style={{width:"100%"}} className="divisor"/>

            <div className="productsAsPayCart">
                {cart.map((item, i)=>(
                    <div key={i} className="productAsPay">
                        <div className="productAsPayCart">
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                        <div className="amount">
                            <button onClick={()=> decQty(item.id)}>-</button>
                            <p>{item.qty ?? 1}</p>
                            <button onClick={()=> incQty(item.id)}>+</button>
                            <i onClick={()=> removeItem(item.id)} className="bi bi-trash"></i>
                        </div>
                        <div className="total">
                            <p>$ {(item.price * (item.qty ?? 1)).toFixed(2)} USD</p>
                        </div>
                    </div>
                ))}
                
            </div>            
        </div>
    )
}