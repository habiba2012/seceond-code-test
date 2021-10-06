import React,{useState} from 'react';
import Tab from  './Tab';



const  Home= () => {
    const [open, setOpen] = useState(false)
 
    return (
        <div className="wrapper">
            <button className="btn-filter" 
            onClick={()=> setOpen(!open)}>
            <img src="assets/plus.svg" alt=""/> Add filter </button>
            {
                open &&
                <Tab />
            }
        </div>
    );
};

export default Home;