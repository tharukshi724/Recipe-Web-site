import React,{useState} from 'react';
import React from 'react';
import axios from 'axios';

function Addpantry() {

    const [itemName,setItemName] =useState("");
    const [size,setSize] = useState("");
    const[expDate,setExpDate] = useState("");


     function savePantryData(e){
          e.preventDefault();

         const newPantry={
             itemName,
             size,
             expDate
         }

         

     }

    return (
        <div>
            <form onSubmit={savePantryData}>
                <input type="text" name="itemName" placeholder="Enter item name" onChange={(e)=>{
                     setItemName(e.target.value);
                }}></input>
                
                <input type="text" name="size" placeholder="Enter size" onChange={(e)=>{
                    setSize(e.target.value);
                }}>
                    
                </input>
                <input type="text" name="expDate" placeholder="expDate" onChange={(e)=>{
                    setExpDate(e.target.value);
                }}></input>
                <button type="submit">Insert to pantry</button>
            </form>
        </div>
    );
}

export default Addpantry;
