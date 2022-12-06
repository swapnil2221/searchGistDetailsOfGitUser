import React, { useState,useEffect,Fragment  } from 'react';
import axios from 'axios';
import Badges from './partials/badges';
import Fork from './partials/fork';
 function UserDeatils(props){ 
    const [userGistDetails,setUserGistDetails]=useState([]);
    let content=null;
  useEffect(()=>{
     let unmounted = false;
      axios.get(`https://api.github.com/users/${props.name}/gists`)    
      .then(res=>{            
         if (!unmounted) {
            setUserGistDetails(res.data);           
        }
     })
      .catch(err=>{
        setUserGistDetails('');
         if (!unmounted) {
          content=<div><h2>
              something went wrong. 
              </h2></div>
         }
         })
         return () => { unmounted = true };
  },[props.name]);
if(userGistDetails.length>0)
{
    content=null;
    content=<div>
        <table>
        
  <tbody>
  <tr>
    <th>Index</th>
    <th>Gist URL</th>
    <th>File Badges</th>
    <th>Forks</th>
  </tr>
        {userGistDetails.map((data,index)=>{ 
           return (
            <Fragment key={index}>
           <tr >
            <td>{index+1}</td>
               <td>
                <a href={data.html_url} target="_blank">{data.html_url}</a> 
                </td>               
                <td>
                    <Badges files={data.files}></Badges>
                    </td>
             <td><Fork forkUrl={data.forks_url}></Fork></td>
               
           </tr>
           </Fragment>
           )
         })}  
         </tbody>
       </table>  
    </div>
}
else{
    content=<div><h2>
    No Data found
    </h2></div>
}
        return (<div >                                 
             <span>{content}</span>          
            </div>
        )
    
}
 
export default UserDeatils;