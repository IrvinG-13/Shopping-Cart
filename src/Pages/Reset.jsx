import { Link } from "react-router"
export default function Reset(){
    return(
        <section className="loginContent">
      <div className="loginContainer">
        <h1>Reset your password</h1>
        <p style={{ color: "white", marginBottom: "30px" }}>We will send you an email to reset your password.</p>

        <form>
          <div className="inputGroup">
            <input placeholder=" " required type="text"  />
            <label>Email</label>
          </div>

        </form>

        <button className="btnLogin" type="submit">Send</button>
        <Link to="/login">Cancel</Link>
      </div>
    </section>
    )
}