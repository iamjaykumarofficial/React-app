import { Link } from "react-router";

const Home = () => {
	return (
			<div className="container" style={{border:"3px solid", width:"400px", height:"350px", textAlign:"center", marginTop:"150px" , }}>
			<h1 style={{margin:"40px"}}>Hey welcome To AswesomeQuote</h1>
			<p>
            “You must be the change you wish to see in the world.”
			</p>
			<Link className="btn btn-primary" to="/login">
				Login Here
			</Link>
		</div>
	);
};

export default Home;
