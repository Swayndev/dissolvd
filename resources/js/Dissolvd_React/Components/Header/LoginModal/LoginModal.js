import axios from 'axios';
import {useState, useContext } from 'react'
import { UserContext } from '../../../../context/context';
import { Link, useNavigate } from "react-router-dom";
import "./LoginModal.css";


const LoginModal = () => {

    // CONTEXT
    const { setUser } = useContext(UserContext);

    // HOOKS ==========================
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate()
    
  // FUNCTIONS AND LOGIC ===============

const handleSubmit = async(e) => {
    e.preventDefault();

    // THIS IS WHERE THE REAL MAGIC HAPPENS
    try {
        const response = await axios.post('/login', {
            email:signInData.email,
            password: signInData.password,
        });

        console.log('This is response.data it contains user data',response.data)

        setUser('THIS IS RESPONSE.DATA',response.data)

        navigate('/');
        
    } catch(error) {
        if (error.response.status == 500) {
                alert('Internal error');
            } else if (error.response.status == 404) {
                alert('Wrong URL, please check your script.');
            } else if (error.response.status == 422) {
                alert('Validation error.');
            } else if (error.response) {
                console.log('This are the errors from the sign-in form', error.response)
            }
    }

}



// This code make sure that the email value of signInData is not defaultly set to "" when the user type in the password
const handleChange = (e) => {
    setSignInData({...signInData,[e.target.name]: e.target.value});

}

console.log("this is signInData", signInData)



    return (
        <form
            className="signin-form"
            onSubmit={handleSubmit} >
            <br/>
            <label htmlFor="email"></label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={signInData.email}
                onChange={handleChange}
                />

            <label htmlFor="password"></label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={signInData.password}
                onChange={handleChange}
            />

            <button
                className="signin-form-btn"
                type="submit"
                value="submit">
                Login
            </button>

            {/*     */}
            <p>
                Don't have an account?{" "}
                <Link to="/register">Register</Link>
            </p>
        </form>
    );
};

export default LoginModal