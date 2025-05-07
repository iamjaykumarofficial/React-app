import {Routes, Route} from "react-router"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import { createContext,useState } from 'react';
import RegistrationForm from "./components/RegistrationForm";

export const AuthContext = createContext();

function getUserFromSessionStorage() {
	const userJson = sessionStorage.getItem("user");
	const user = JSON.parse(userJson);
	return user;
}

function App() {
  const [user, setUser] = useState(getUserFromSessionStorage());

  return (

	<div className="container ">
			    <AuthContext.Provider value={{ user, setUser }}>
				   <Routes>
					<Route index="true" element={<Home />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/register" element={<RegistrationForm />} />
				</Routes>
			</AuthContext.Provider>
		</div>

  )
}

export default App;
