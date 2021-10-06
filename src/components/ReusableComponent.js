import React from 'react';
import '../App.css'


const ReusableComponent = (
   {name, 
   image,
   options,
   logo, 
   handleOption, 
   handleIntegration,
   selectedList 
  
   }) => {

   
    return (
        <div>
          {options && logo?
          <div className="user-option">
             <img src={logo} alt="" className="user-integration"/> 
             <li onClick={handleIntegration}>{options}</li>
          </div>
       
        :
        <div className="user-option">
           <img src={image} className="user-profile" alt=""/>
           <li onClick={handleOption}>{name}</li>
           
        </div>
           }
         </div>
    );
};

export default ReusableComponent;