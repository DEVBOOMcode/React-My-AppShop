import { FaRegUserCircle, FaFacebook } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import Nav from "../component/Nav";

const Login = () => {
  return (
    <>
        <Nav />
        <div className="login">
            <div className="login-box">
                <p className="login-box-p">Login</p>
                <div className="login-input">
                    <p className="login-input-p">Username</p>
                    <div className="login-logo">
                        <FaRegUserCircle className="login-icon" />
                        <input type="text" placeholder="Username" />
                    </div> 
                </div>
                <div className="login-input">
                    <p className="login-input-p">Password</p>
                    <div className="login-logo">
                        <RiLockPasswordLine className="login-icon" />
                        <input type="text" placeholder="Password" />
                    </div>
                </div>
                <button className="login-but">Login</button>
                <NavLink to="/sign" className="login-but-2">sign in</NavLink>
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

export default Login