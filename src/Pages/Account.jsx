

export default function Account(){

    return(
        <section className="loginContent">
      <div className="loginContainer">
        <h1>Create account</h1>

        <form>
          <div className="inputGroup">
            <input placeholder=" " required type="text"  />
            <label>Name</label>
          </div>

          <div className="inputGroup">
            <input placeholder=" " type="text" required />
            <label>Last Name</label>
          </div>

          <div className="inputGroup">
            <input placeholder=" " type="password" required />
            <label>Email</label>
          </div>

          <div className="inputGroup">
            <input placeholder=" " type="password" required />
            <label>Password</label>
          </div>

        </form>

        <button className="btnLogin" type="submit">Create</button>
      </div>
      
    </section>
    )
    
}