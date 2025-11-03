import { Link, Outlet,useLocation } from "react-router"

export default function Login (){

    const location = useLocation()
    const isResetPass = location.pathname.includes("reset")
    const isAccount = location.pathname.includes("account")

    if(isResetPass || isAccount){
        return <Outlet/>
    }

  return(
    <section className="loginContent">
      <div className="loginContainer">
        <h1>Login</h1>

        <form>
          <div className="inputGroup">
            <input placeholder=" " required type="text"  />
            <label>Email</label>
          </div>

          <div className="inputGroup">
            <input placeholder=" " type="password" required />
            <label>Password</label>
          </div>

          <Link style={{ color: "#5dc6ea" }} to="reset">Forgot Your Password</Link>
        </form>

        <button className="btnLogin" type="submit">Login</button>
        <Link style={{ color: "#5dc6ea" }} to="account">Create Account</Link>
      </div>

      <section>
        <Outlet/>
      </section>
      
    </section>
  )
}