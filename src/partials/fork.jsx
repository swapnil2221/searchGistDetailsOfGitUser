import React, { useState,useEffect} from 'react';
import axios from 'axios';
function Fork(props){ 
    let  content=null;
    const [forkDetails,setForkDetails]=useState([]);
    useEffect(()=>{
    let unmounted = false;
     axios.get(`${props.forkUrl}`)    
     .then(res=>{            
        if (!unmounted) {
          
           let responseData=res.data;
           if(responseData.length>3)
           {
            //as data we get from api is sorted in ascending order of created
            // fetching the last three user using slice
            let lastThreeUserArray=responseData.slice(responseData.length-3);
            setForkDetails(lastThreeUserArray);
        }
           else
           { setForkDetails(res.data);}         
       }
    })
     .catch(err=>{
        setForkDetails('');
        if (!unmounted) {
         content=<div><h2>
             something went wrong. 
             </h2></div>
        }
        })
        return () => { unmounted = true };
 },[props.forkUrl]); 
if(forkDetails.length>0)
{
    content="null";
    content=<div>          
                {forkDetails.map((item,index)=>{ 
           return <div key={index}>          
               <div className="cousel-item">
                <span>{item.owner.login}</span>
               <a href={item.html_url} target="_blank"> <img src={item.owner.avatar_url}  id={item.owner.login}></img>  
               </a> </div>
           </div>
         })} 
                      
    </div>
}
        return (<div >                             
            <span>{content}</span>          
            </div>
        )   
}
 
export default Fork;