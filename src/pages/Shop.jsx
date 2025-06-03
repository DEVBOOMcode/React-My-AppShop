import { GoArrowRight } from "react-icons/go";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

const Shop = () => {

  return (
    <>
      <Nav />
      <div className="about">
        <div className="about-nav">
          <ul>
            <li className="about-nav-box">
              <a href="#shop-1">Shop 1</a>
            </li>
            <li className="about-nav-box">
              <a href="#shop-2">Shop 2</a>
            </li>
            <li className="about-nav-box">
              <a href="#shop-3">Shop 3</a>
            </li>
            <li className="about-nav-box">
              <a href="#shop-4">Shop 4</a>
            </li>
          </ul>
        </div>

          <section id="shop-1">
            <div className="about-script"></div>
            <h2 className="about-text">Shop 1</h2>
            <div className="about-box">
                <a href="#" className="about-box-div"><br />Box 1 </a>
                <a href="#" className="about-box-div"><br />Box 2</a>
                <a href="#" className="about-box-div"><br />Box 3</a>
            </div>
            <a href="#" className="about-a">Additional<GoArrowRight className="about-a-icon" /></a>
            <div className="shop-list"></div>
          </section>
          
          <section id="shop-2">
          <div className="about-script"></div>
            <h2 className="about-text">Shop 2</h2>
             <div className="about-box">
                <a href="#" className="about-box-div"><br />Box 1 </a>
                <a href="#" className="about-box-div"><br />Box 2</a>
                <a href="#" className="about-box-div"><br />Box 3</a>
             </div> 
             <a href="#" className="about-a">Additional<GoArrowRight className="about-a-icon" /></a>
             <div className="shop-list"></div>
          </section>
          
          <section id="shop-3">
          <div className="about-script"></div>
            <h2 className="about-text">Shop 3</h2>
            <div className="about-box">
                <a href="#" className="about-box-div"><br />Box 1 </a>
                <a href="#" className="about-box-div"><br />Box 2</a>
                <a href="#" className="about-box-div"><br />Box 3</a>
            </div>
            <a href="#" className="about-a">Additional<GoArrowRight className="about-a-icon" /></a>
            <div className="shop-list"></div>
          </section>

          <section id="shop-4">
          <div className="about-script"></div>
            <h2 className="about-text">Shop 4</h2>
            <div className="about-box">
                <a href="#" className="about-box-div"><br />Box 1 </a>
                <a href="#" className="about-box-div"><br />Box 2</a>
                <a href="#" className="about-box-div"><br />Box 3</a>
            </div>
            <a href="#" className="about-a">Additional<GoArrowRight className="about-a-icon" /></a>
          </section>

      </div>
      <Footer />
    </>
  )
}

export default Shop
