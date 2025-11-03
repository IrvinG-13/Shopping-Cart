import { Link,Outlet,useOutletContext, useLocation } from "react-router-dom"

export default function Shop(){
    const parentCtx = useOutletContext();
    const location = useLocation()
    const isMenPage = location.pathname.includes("men")
    const isWomenPage = location.pathname.includes("women")
    const isElectronicsPage = location.pathname.includes("electronics")
    const isJeweleryPage = location.pathname.includes("jewelery")

    if (isMenPage || isWomenPage || isElectronicsPage || isJeweleryPage) {
        return <Outlet context={parentCtx} /> 
    }

    return(
        <div className="Content-Shop">
            <div className="header-Shop">
                <Link to="/"><i className="bi bi-arrow-return-left"></i></Link>
                <h1>Shop Page</h1> 
                               
            </div>
            <div className="gridCategories">
                    <Link to="men"><i className="fi fi-sr-employee-man-alt"></i></Link>
                    <Link to="women"><i className="fi fi-sr-user-vneck-hair-long"></i></Link>
                    <Link to="electronics"><i className="fi fi-sr-laptop"></i></Link>
                    <Link to="jewelery"><i className="fi fi-sr-diamond"></i></Link>
                </div>
            <section>
                <Outlet context={parentCtx}/>
            </section>
            
        </div>
    )
}