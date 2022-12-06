import React, {useState} from 'react';
import UserDeatils from './userDetails';
function SearchUser() {
  const [user, setUser] = useState('');
  const handleChange = (event) => {
    setUser(event.target.value);
  };

let callChild=null;
if(user.length>0){
    callChild=<div> <UserDeatils name={user}></UserDeatils></div>
}
  return (   
      <div className="card">
        Enter User Name <input type="text" id="user"
        name="user"
        onChange={handleChange}
        value={user}>
        </input>  
            
         <div>{callChild}</div>
       
    </div>
  )
}

export default SearchUser;
