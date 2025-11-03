

export default function Footer(){
    
    return(
        <section className="Content-Footer">
            <div className="footerInfo">
                <div className="productsFooter">
                    <h3 style={{ color: "#fff" }}>Products</h3>
                    <p>Men's</p>
                    <p>Women's</p>
                    <p>Electronics</p>
                    <p>Jewelery</p>
                </div>
                <div className="shoply">
                    <h3 style={{ color: "#fff" }}>Shoply</h3>
                    <p>About Us</p>
                    <p>Terms And Conditions</p>
                    <p>Frequently Asked Questions</p>
                </div>
                <div className="shoplyInfo">
                    <h3 style={{ color: "#fff" }}>Information</h3>
                    <p>Technical Service</p>
                    <p>Corporate</p>
                    <p>My Count</p>
                </div>
            </div>
            <div className="formAndSocial">
                <div className="footerForm">
                    <p>Be the first to know about our exclusive offers and products</p>
                    <div className="formContainer">
                        <form action="">
                            <input placeholder="ENTER YOUR EMAIL" className="inputSus" style={{ width: "100%", marginBottom: "10px" , marginTop: "10px"}} type="email" />
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <input placeholder="FULL NAME" className="inputSus"  style={{ width: "45%", marginBottom: "10px" , marginTop: "10px" }} name="Name" type="text" />
                                <input placeholder="CELLPHONE" className="inputSus"  style={{ width: "45%" , marginBottom: "10px" , marginTop: "10px" }} name="Phone" type="text" />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <input placeholder="IDENTIFICATION NUMBER" className="inputSus"  style={{ width: "45%", marginBottom: "10px" , marginTop: "10px" }} name="idetification Number" type="text" />
                                <select  className="inputSus"  style={{ width: "45%", marginBottom: "10px" , marginTop: "10px" }} name="" id="">
                                    <option value="">INTEREST</option>
                                    <option value="">Men's Clothes</option>
                                    <option value="">Women's Clothes</option>
                                    <option value="">Electronics</option>
                                    <option value="">Jewelery</option>
                                </select>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p style={{ width: "50%" }}><input type="checkbox" name="" id="" />   I accept the terms and conditions</p>
                                <button style={{ marginTop: "10px", width: "25%" }}>Suscribe</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div className="socialMedia">
                    <div>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-youtube"></i>
                        <i class="bi bi-tiktok"></i>
                    </div>
                    <p>© 2025, Shoply Panama. Powered by React.</p>
                </div>
            </div>
        </section>
    )
}