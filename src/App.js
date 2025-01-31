import React , {useState} from 'react'
import './App.css';

function App() {
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const [message, setMessage]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!username || !password){
      setMessage("Both fields are required");
      return;
    }
    if(username==="user" && password==="password"){
      setMessage("Welcome, user!");
    }else{      
      setMessage("Invalid username or password");
    }
  }
  return (
    <div className="App" style={{maxwidth: " 400px", textAlign: "center"}} >
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
      <div style={{alignItems: "left"}} >
      <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}>
        <label style={{flex: "1", marginRight: "10px", textAlign: "right" }}>Username</label>
        <input 
        type='text'
        name='username'
        value={username}
        id='username'
        onChange={(e)=>setUsername(e.target.value)}
        style={{width:'80%', padding:"8px",  marginRight:"30px" }}
        />
      </div>
      </div>
      <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}>
        <label style={{flex: "1", marginRight: "10px", textAlign: "right" }}>Password  </label>
        <input
        value={password}
        id='password'
        type='password'
        onChange={(e)=>setPassword(e.target.value)}
        style={{width:'80%', padding:"8px", paddingRight:"10px", marginRight:"30px" }}
        />
        </div>
        <button type="submit" style={{width:"30%", padding:"10px" , margin:"10px"}}>
          Submit
        </button>
      </form>
    {message && <p style={{marginTop:"15px", color: message === "Welcome User!"? "green": "red" }}>{message}</p> }
    </div>
  );
}

export default App;
