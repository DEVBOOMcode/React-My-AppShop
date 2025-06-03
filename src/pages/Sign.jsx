import { FaRegUserCircle, FaFacebook } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Nav from "../component/Nav";

const Sign = () => {
  return (
    <>
        <Nav />
        <div className="login">
            <div className="sign-box">

                <p className="login-box-p">Sign in</p>
                <div className="login-input">
                    <p className="login-input-p">Username</p>
                    <div className="login-logo">
                        <FaRegUserCircle className="login-icon" />
                        <input type="text" placeholder="Username" />
                    </div> 
                </div>

                <div className="login-input">
                    <p className="login-input-p">Email</p>
                    <div className="login-logo">
                        <MdAlternateEmail className="login-icon" />
                        <input type="email" placeholder="Email" />
                    </div> 
                </div>

                <div className="login-input">
                    <p className="login-input-p">Password</p>
                    <div className="login-logo">
                        <RiLockPasswordLine className="login-icon" />
                        <input type="text" placeholder="Password" />
                    </div>
                </div>

                <div className="login-input">
                    <p className="login-input-p">Confirm Password</p>
                    <div className="login-logo">
                        <RiLockPasswordLine className="login-icon" />
                        <input type="text" placeholder="Confirm Password" />
                    </div>
                </div>

                <button className="login-but">Sign in</button>
                <NavLink to="/login" className="sign-but-2">Login</NavLink>

                <div className="login-sign">
                    <button className="login-icon-sign">
                        <FcGoogle />
                        <p>Google</p>
                    </button>
                    <button className="login-icon-sign">
                        <FaFacebook className="login-fb" />
                        <p>Facebook</p>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sign