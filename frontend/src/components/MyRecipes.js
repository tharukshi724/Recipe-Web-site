import React, { Component } from 'react';
import axios from 'axios';

class MyRecipes extends Component {

    
    constructor(props){
        super(props);

        this.state = {
             recipe:[]
        }
    }

    componentDidMount(){
        this.retriveData();
      

    }


    retriveData(){
        axios.get("http://localhost:8070/recipe/viewRecipes").then((res)=>{

            this.setState({
                recipe:res.data
               

            });
        }).catch((err)=>{
            alert(err);
        })
    }

    render() {
        return (
            <div>
               <div className="container">
                <div className="ui fixed table">

                   <table>
                       <thead>
                           <th>Recipe Title</th>
                           <th>Recipe Ingredients</th>
                           <th>Recipe Time</th>
                           <th>Action</th>
                       </thead>
                       <tbody>

                           {
                              this.state.recipe.map(
                                   recipe=>

                                   <tr key={recipe.id}>

                                       <td>{recipe.title}</td>
                                       <td>{recipe.ingredients}</td>
                                       <td>{recipe.time}</td>
                                       <td><button className="small ui orange button" onClick={()=>this.viReci(recipe._id)}><i class="eye icon"></i>View</button>
                                      <button className="small ui red button" onClick={()=>this.deleteRecipe(recipe._id)}><i class="trash icon"></i>Delete</button>
                                      <button className="small ui green button" onClick={()=>this.deleteRecipe(recipe._id)}><i class="edit icon"></i>Update</button>
                                      </td>

                                   </tr>

                               )
                           }

                       </tbody>
                   </table>
               </div> 
            </div> 
            </div>
        );
    }
}

export default MyRecipes;
