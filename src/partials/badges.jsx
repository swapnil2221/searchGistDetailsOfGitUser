import React from 'react';

function Badges(props){ 
let  content=null;
let  badgesList=[];  
Object.keys(props.files).map((val) => {props.files[val].type;
badgesList.push(props.files[val].type);
})  
const uniqueBadgeList= [...new Set(badgesList)]; 
if(props.files)
{
    content=null;
    content=<div> 
        {
           
        uniqueBadgeList.map((val,index)=>{ 
           return <div key={index}>          
               <div className="cousel-item">
                <span>{val}</span>                
               </div>
           </div>
         })}                     
         
    </div>
}
        return (<div >                                 
                 <span>{content}</span>          
            </div>
        )
    
}
 
export default Badges;