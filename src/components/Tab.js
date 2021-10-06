/* eslint-disable no-use-before-define */
import { useEffect, useState } from "react";
import "../App.css";
import user from '../utils/data.json'
import ReusableComponent from "./ReusableComponent";


const Tabs = () =>{
  const [toggleState, setToggleState] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [selectIntegration, setSelectIntegration] = useState("");
  /* const [selectedItem, setSelectedItem] = useState("");

  const selectedList = (index) => {

    selectedItem[index] = !selectedItem[index]
    setSelectedItem(selectedItem)
  
  } */
  
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handleOption =  (e) => {
    e.stopPropagation();
    setSelectOption(e.target.innerText);
   
}
const handleIntegration =  (e) => {
  e.stopPropagation();
  setSelectIntegration(e.target.innerText);

}
//get data from localStorage
useEffect(() => {
  const nameData = localStorage.getItem('user-option');
  const integrationData = localStorage.getItem('user-integration');
  if(nameData || integrationData ){
    setSelectOption(JSON.parse(nameData));
    setSelectIntegration(JSON.parse(integrationData));
  }
  },[]);

    // save to storage
useEffect(() => {
localStorage.setItem('user-name', JSON.stringify(selectOption));
localStorage.setItem('user-integration', JSON.stringify(selectIntegration)); 
},[selectIntegration, selectOption]);

const removeName = () =>{
  setSelectOption("")
localStorage.removeItem("user-option")
}

const removeIntegration = () =>{
  setSelectIntegration("")
localStorage.removeItem("user-option")
}



  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Users
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Integrations
        </button>
       
      </div>
        <div >
         <div className="search-container" style={{display:"flex"}}>
         <img src="/assets/search.svg" className="searchIcon" alt="search"  />
            <input type="text" className="searchBox" placeholder="Search option" 
            onChange={e => setSearchTerm(e.target.value)}/>
         </div>
                {
                  // eslint-disable-next-line 
        user.filter((val) => {
            if(searchTerm === ""){
                return val;
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                console.log(val)
                return val;
            };
        }).map((users, i) => {
            return (
            <div key={i}>
              <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         
         <ReusableComponent name={users.name}  image={users.image} 
         handleOption={handleOption }
         />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <ReusableComponent options={users.option} logo={users.logo} 
          handleIntegration={handleIntegration}/>
        </div>
      </div>
    
      </div>)
                     
        })
      
      }

        </div>
        <div className="btn-remove" >
        {selectOption && 
        <div >
         <p className="option_select option-name" >User:{selectOption}</p>
         <i onClick={removeName} className="icon-remove-circle" id="btn-name"></i>
        </div>
        }
        {selectIntegration &&
          <div >
          <p className="option_select option-integration">Integration:{selectIntegration}</p>
         <i  onClick={removeIntegration} className="icon-remove-circle" id="btn-integration" ></i>
        </div> 
        }
      
        </div>
      </div>
  );
}

export default Tabs;
