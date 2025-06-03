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
                <button href="#" className="about-box-div"><br />Box 1 </button>
                <button href="#" className="about-box-div"><br />Box 2</button>
                <button href="#" className="about-box-div"><br />Box 3</button>
            </div>
            <button href="#" className="about-a">Additional<GoArrowRight className="about-a-icon" /></button>
            <div className="shop-list"></div>
          </section>
          
          <section id="shop-2">
          <div className="about-script"></div>
            <h2 className="about-text">Shop 2</h2>
             <div className="about-box">
                <button href="#" className="about-box-div"><br />Box 1 </button>
                <button href="#" className="about-box-div"><br />Box 2</button>
                <button href="#" className="about-box-div"><br />Box 3</button>
             </div> 
             <button href="#" className="about-a">Additional<GoArrowRight className="about-a-icon" /></button>
             <div className="shop-list"></div>
          </section>
          
          <section id="shop-3">
          <div className="about-script"></div>
            <h2 className="about-text">Shop 3</h2>
            <div className="about-box">
                <button href="#" className="about-box-div"><br />Box 1 </button>
                <button href="#" className="about-box-div"><br />Box 2</button>
                <button href="#" className="about-box-div"><br />Box 3</button>
            </div>
            <button href="#" className="about-a">Additional<GoArrowRight className="about-a-icon" /></button>
            <div className="shop-list"></div>
          </section>

          <section id="shop-4">
          <div className="about-script"></div>
            <h2 className="about-text">Shop 4</h2>
            <div className="about-box">
                <button href="#" className="about-box-div"><br />Box 1 </button>
                <button href="#" className="about-box-div"><br />Box 2</button>
                <button href="#" className="about-box-div"><br />Box 3</button>
            </div>
            <button href="#" className="about-a">Additional<GoArrowRight className="about-a-icon" /></button>
          </section>

      </div>
      <Footer />
    </>
  )
}

export default Shop