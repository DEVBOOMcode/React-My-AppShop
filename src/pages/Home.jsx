import { NavLink } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

const Home = () => {

  return (
    <>
      <Nav />
        <header className="home-text">
          <div className="home-img"></div>
          <h2>Code Shop</h2>
          <p>แหล่งร่วมโค้ดมากมายหลายประเภทไว้ในที่เดียว<br />สามารถเลือกซื้อโค้ดที่คุณต้องการได้ที่นี้</p>
        
          <div className="home-button">
              <a href="#text-1" className="home-but1">Next</a>
              <NavLink to="/shop" className="home-but2">Shop</NavLink>
          </div>
          <div className="shop-list"></div>
        </header>

        
        <section id="text-1">
          <div className="home-section"></div>
          <p className="hone-rm">Recommend</p>
          <div className="home">
              <div className="home-box"></div>
              <div className="home-box"></div>
              <div className="home-box"></div>
          </div>

          <div className="home">
              <div className="home-box"></div>
              <div className="home-box"></div>
              <div className="home-box"></div>
          </div>
        </section>
        <Footer />
    </>
  )
}

export default Home