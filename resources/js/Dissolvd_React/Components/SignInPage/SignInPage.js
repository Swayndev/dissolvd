import axios from 'axios';
import React, {useState} from 'react'


const SignInPage = () => {

  // HOOKS ==========================
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });

  // FUNCTIONS AND LOGIC ===============

const handleSubmit = async(e) => {
    e.preventDefault();

    // THIS IS WHERE THE REAL MAGIC HAPPENS
    try {
        const response = await axios.post('/login', {
            email:signInData.email,
            password: signInData.password,
        });
        
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
    
    // ASK MIKOLAI WHAT THIS THING DOES 
    // send(signInData)
}

// This code make sure that the email value of signInData is not defaultly set to "" when the user type in the password
const handleChange = (e) => {
    setSignInData({...signInData,[e.target.name]: e.target.value});

}

console.log("this is signInData", signInData)

  
    return (
    <div>
        <form onSubmit={handleSubmit} >
            <br/>
            <label htmlFor="email">Email</label>
                <br/>
            <input
                type="email"
                name="email"
                id="email"
                value={signInData.email}
                onChange={handleChange}
            />
                <br/><br/>

            {/* WE NEED EITHER EMAIL OR USERNAME NOT BOTH
            <label htmlFor="username">Username</label>
            <br/>
            <input type="text" name="username" id="username"/>
            <br/><br/>
            */}

            <label htmlFor="password">Create password</label>
                <br/>
            <input
                type="password"
                name="password"
                id="password"
                value={signInData.password}
                onChange={handleChange}
            />
                <br/><br/>

            <button > Sign In </button>
        </form>
    </div>
  )
}

export default SignInPage