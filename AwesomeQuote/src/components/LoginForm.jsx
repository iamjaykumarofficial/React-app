import { useContext, useState } from "react";
import { Link ,useNavigate} from "react-router";
import { toast } from "react-toastify";
import {userSignIn} from "../services/users";
import { AuthContext } from "../App";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext);

    const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswdChange = (e) => setPasswd(e.target.value);

    const handleSignInClick = async (e) => {
        try {
            const user = await userSignIn(email,passwd);
            sessionStorage.setItem("user" , JSON.stringify(user));
            setUser(user);
            navigate("/user");
        }
        catch(err){
            toast.error("Invalid credentials.");

        }
    };

    return (
    <div className="container" style={{border:"1PX SOLID", width:"400px", height:"350px", textAlign:"center", marginTop:"150px", height:"360px"}}>
        <div className="mb-3 text-center">
            <h2>Login</h2>
        </div>
        <div className="mb-3 text-center ">
            <label className="form-label">Email:</label>
			<br />
            <input 
            className="form-control"
            name="email"
            type="test"
            onChange={handleEmailChange} 
            />
			<br />
        </div>
        <div className="mb-3 text-center">
            <label className="form-label">Password:</label>
            <input 
            className="form-control"
            name="passwd"
            type="password"
            onChange={handlePasswdChange} />
        </div>
		<br />
        <div className="row">
            <button className="mx-3 col btn btn-primary"
            onClick={handleSignInClick}>
                Sign In
            </button>
            <Link className="mx-3 col btn btn-secondary" to="/register">
            Sign Up
            </Link>
        </div>
    </div>
    );
};

export default LoginForm;