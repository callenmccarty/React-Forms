import { useState } from "react"
import axios from "axios"

function SignUpForm({token, setToken ,setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword]= useState("");
    const [error, setError]= useState(null);
    
    async function handleSubmit(event) {
        event.preventDefault();
        const user ={
            username,
            password
        }
       try { 
        if (username === "" || password === "") {
            throw Error("please enter a username and valid password");
        }
        const signUp = await axios.post('https://fsa-jwt-practice.herokuapp.com/signup', user, {
            headers : {"Content-Type" :`application/json`}
        })
        window.localStorage.setItem("token", signUp.data.token)
        token = setToken(signUp.data.token)
        console.log(username)
        setUser({username})
       } 
       catch (error) {
        setError(error.message);
    }
}

    return( 
        <>
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