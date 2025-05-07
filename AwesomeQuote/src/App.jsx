import { createContext,useState } from 'react'
import {Routes, Route} from "react-router"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./components/Home";
// import LoginForm from "./components/LoginForm";
import './App.css'

export const AuthContext = createContext();

function getUserFromSessionStorage() {
	const userJson = sessionStorage.getItem("user");
	const user = JSON.parse(userJson);
	return user;
}

function App() {
  const [count, setUser] = useState(getUserFromSessionStorage)

  return (
				<Routes>
					<Route index="true" element={<Home />} />
				</Routes>
  )
}

export default App
