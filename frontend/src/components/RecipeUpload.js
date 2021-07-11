import React,{useState} from 'react';
import axios from 'axios';
import upload from './images/upload.png';
import './Styles/Recipeupload.css';


function RecipeUpload() {

 const[title,setTitle] = useState("");
  const[ingredients,setIngredients] = useState("");
    const[time,setTime] = useState("");
    const[instructions,setInstructions] = useState("");
   const[image,setImage] = useState(""); 

function savedata(e){
    e.preventDefault();

   const recipeData= JSON.stringify({
       title,
       ingredients,
       time,
       instructions,
       image
   });
   
   console.log(title,ingredients,time,instructions,image);
   axios.post("http://localhost:8070/recipe/uploadRecipe",recipeData).then(()=>{
       alert("upload success");
   }).catch((err)=>{
       console.log(err);
      alert(err);
   })

}

    return (
        <div>
             <img src={upload} alt= ""></img>
             <div className="container">
                 <form onSubmit={savedata} className="ui big form" >
                     <div className="field">
                         <lable>Recipe name</lable>
                          <input type="text" placeholder="Enter name" onChange={(e)=>{
                              setTitle(e.target.value)
                          }}></input>
                     </div>
                     <div className="field">
                         <lable>Recipe Ingredients</lable>
                          <textarea type="text" placeholder="Enter ingredients" onChange={(e)=>{
                              setIngredients(e.target.value)
                          }}></textarea>
                     </div>
                     <div className="field">
                         <lable>Cooking time</lable>
                          <input type="text" placeholder="Enter cooking time" onChange={(e)=>{
                              setTime(e.target.value)
                          }}></input>
                     </div>
                     <div className="field">
                         <lable>Instructions</lable>
                          <textarea type="text" placeholder="Enter instructions"onChange={(e)=>{
                              setInstructions(e.target.value)
                          }}></textarea>
                     </div>
                     <div className="field">
                     <input type="file" id="image" name="myimage" onChange={(e)=>{
                         setImage(e.target.value)
                     }}></input>
                     </div>

                     <div className="field">
                     <button className="ui green button">Upload Recipe</button>
                     </div>

                   
                 </form>
             </div>
        </div>
    )
}

export default RecipeUpload
