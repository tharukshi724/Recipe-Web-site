import React,{useState} from 'react';

import axios from 'axios';
import './Styles/Addpantry.css';

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

         axios.post("http://localhost:8070/pantry/add",newPantry).then(()=>{
               
              alert("item added to pantry");
         }).catch((err)=>{
             alert(err);
         })

     }

    return (
        <div>
            <form onSubmit={savePantryData} class="ui form">
                <div class="box">
                 <div class="field">
                    <div class="field">
                        <label>Item Name</label>
                         <input type="text" name="itemName" placeholder="Enter item name" onChange={(e)=>{
                            setItemName(e.target.value);
                           }}></input>
                    </div>       
                    <div class="field">
                        <label>Item Size</label>
                          <input type="text" name="size" placeholder="Enter size" onChange={(e)=>{
                            setSize(e.target.value);
                          }}>
                                </input>
                    </div>

                     <div class="field">
                         <label>Item Expire Date</label>
                          <input type="date" name="expDate" placeholder="expDate" onChange={(e)=>{
                            setExpDate(e.target.value);
                          }}></input>
                     </div>     
                     <button type="submit" class="ui orange button" >Insert to pantry</button>
                </div>  
            </div>    
          </form>
        </div>
    );
}

export default Addpantry;
