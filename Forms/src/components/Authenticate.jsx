import { useState } from "react"
import axios from "axios"

function Authenticate({token, user}){
    const[error,setError] = useState (null);
    const[success,setSuccess] = useState (null);


    async function handleClick() {
        try {
          const data = await axios.get("https://fsa-jwt-practice.herokuapp.com/authenticate", { 
            headers: {
                "Content-Type": "application/json",
                 "Authorization" : `Bearer ${token}`
            }
          } 
         );
         setSuccess(data.data.message)
        }
      catch (error) {
        setError(error.message);
        }
        
    }
   return <div> 
    <h2>Authenticate</h2>
    {user && <p>Logged in as: <strong>{user.username}</strong></p>}
   {error && <p>{error}</p>}
   {success && <p>{success}</p>}
 
     <button onClick={handleClick}>"Authenticate Token"</button>
     
     </div>
}

export default Authenticate