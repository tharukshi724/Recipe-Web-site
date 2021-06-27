import React,{useState} from 'react';

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

         axios.post("http://localhost:8070/pantry/add",newPantry).then(()=>{
               
              alert("item added to pantry");
         }).catch((err)=>{
             alert(err);
         })

     }

    return (
        <div>
            <form onSubmit={savePantryData} class="ui huge form">
                <div class="field">
                    <div class="field">
                         <input type="text" name="itemName" placeholder="Enter item name" onChange={(e)=>{
                            setItemName(e.target.value);
                           }}></input>
                    </div>       
                    <div class="field">
                          <input type="text" name="size" placeholder="Enter size" onChange={(e)=>{
                            setSize(e.target.value);
                          }}>
                                </input>
                    </div>

                     <div class="field">
                          <input type="text" name="expDate" placeholder="expDate" onChange={(e)=>{
                            setExpDate(e.target.value);
                          }}></input>
                     </div>     
                     <button type="submit" class="ui purple button">Insert to pantry</button>
                </div>    
          </form>
        </div>
    );
}

export default Addpantry;
