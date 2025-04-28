import { useState } from "react"
import axios from "axios"

function SignUpForm({token, setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword]= useState("");
    const [error, setError]= useState(null);
    
    async function handleSubmit(event) {
        event.preventDefault();
       try { 
        setToken (result.token)
        const signUp = await axios.post("https://fsa-jwt-practice.herokuapp.com/signup", {username,password})
        console.log(signUp)
        window.localStorage.setItem("token", signUp.token)
       } 
       catch (error) {
        setError(error.message);
    }
}

    return( 
        <>
        <h2>Hello!</h2>
        {error && <p>{error}</p>}

        <form onSubmit = {handleSubmit}>
            <label> 
                Username: 
                <input type = "text" value={username} onChange={(u) => setUsername (u.target.value)}/> 
            </label>
            <label>
                Password: 
                <input type="password" value={password}  onChange={(u) => setPassword (u.target.value)}/> 
            </label>
            <button>login</button>
        </form>
        </>
    );
}
export default SignUpForm