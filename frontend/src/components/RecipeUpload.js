import React,{useState} from 'react';
import axios from 'axios';
import upload from './images/upload.jpg';
import './Styles/Recipeupload.css';


function RecipeUpload() {

   const[title,setTitle] = useState("");
   const[ingredients,setIngredients] = useState("");
    const[time,setTime] = useState("");
    const[instructions,setInstructions] = useState("");
    const[image,setImage] = useState(""); 

    const change =(e)=>{
       setImage(e.target.files[0]);
        }

function savedata(e){
    e.preventDefault();



   const formData = new FormData();
   formData.append("title",title);
   formData.append("ingredients",ingredients);
   formData.append("time",time);
   formData.append("instructions",instructions);
   formData.append("image",image);

   
   console.log(title,ingredients,time,instructions,image);
   
   axios.post("http://localhost:8070/recipe/upload",formData).then(()=>{
       alert("upload success");
   }).catch((err)=>{
      
      alert(err);
   })

}

    return (
        <div>
            
           <div className="fullCon">
            <div className="imgCon">
               <img src={upload}></img>
           </div>   
           <h1>Upload Your Recipes</h1>
                <p>you jheen dhfjdf fhdjf fhdjf fhdj dfhjdf dfjdfdf dfkjkfjdk dfjhdf jdfdkf fdhfkdf dfkjkfjdkkn
                    jnfdfkd jfkdfjdkf fkjsks dkfjkdf dfkd djfkdf fdfkf fjdfkd fkfdj dkjfkdf dkjfkdf fkdfkjd 
                    dfkdf kfdjdkf kfkdf kfjdkf flf fkdjf kfjk kdfjdk kdf kdfkd dkfj  kjskf kfdk kfd kf kfkd kf kfjd dff

                  

                </p>
             <div className="container">
                 <form onSubmit={savedata} className="ui big form" encType="multipart/form-data" >
                     <div className="field">
                         <lable>Recipe name</lable>
                          <input type="text" placeholder="Enter name" name="title" onChange={(e)=>{
                              setTitle(e.target.value)
                          }}></input>
                     </div>
                     <div className="field">
                         <lable>Recipe Ingredients</lable>
                          <textarea type="text" placeholder="Enter ingredients"name="ingredients" onChange={(e)=>{
                              setIngredients(e.target.value)
                          }}></textarea>
                     </div>
                     <div className="field">
                         <lable>Cooking time</lable>
                          <input type="text" placeholder="Enter cooking time" name="time" onChange={(e)=>{
                              setTime(e.target.value)
                          }}></input>
                     </div>
                     <div className="field">
                         <lable>Instructions</lable>
                          <textarea type="text" placeholder="Enter instructions" name="instructions" onChange={(e)=>{
                              setInstructions(e.target.value)
                          }}></textarea>
                     </div>
                    <div class="field">
                        <input type="file" filename="image" onChange={change}></input>
                    </div>
                     <div className="field">
                     <button className="ui green button">Upload Recipe</button>
                     </div>

                   
                 </form>
             </div>
             </div>
        </div>
    )
}

export default RecipeUpload
