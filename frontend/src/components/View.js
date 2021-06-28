import React, { Component } from 'react';
import axios from 'axios'

class View extends Component {

    constructor(props){
        super(props);
        this.state = {
            pantry:[]
        }
        this.deletePantry = this.deletePantry.bind(this);
        this.editPantry = this.editPantry.bind(this);
       
    }

    editPantry(id){
        this.props.history.push('/updatePantry/'+id);
        console.log("at method"+id);
    }

    deletePantry(id){
        axios.delete('http://localhost:8070/pantry/deletePantry/'+id).then(()=>{
            console.log(id);
            alert("Deleted Successfully!");
            this.retriveData();
          
        })
    }

    componentDidMount(){
          this.retriveData();
      
    }

    retriveData(){
        axios.get("http://localhost:8070/pantry/").then((res)=>{
            this.setState({
                pantry:res.data

            });
       }).catch((err)=>{
           alert(err);
       });
    }
    render() {
        return (
            <div>
                <table class="ui celled table">
                    <thead>
                       
                            <th>Item name</th>
                            <th>Item size</th>
                            <th>Expire Date</th>
                            <th>Id</th>
                            <th>Action</th>
                       
                    </thead>
                    <tbody>
                       {
                           this.state.pantry.map(
                               pantry=>
                               <tr key={pantry.id}>

                                   <td>{pantry.itemName}</td>
                                   <td>{pantry.size}</td>
                                   <td>{pantry.expDate}</td>
                                   
                                   <td><button class="positive ui button" onClick={()=>this.editPantry(pantry._id)}>Update</button></td>
                                   {console.log(pantry._id)}
                                   <td><button class="negative ui button" onClick={()=>this.deletePantry(pantry._id)}>Delete</button></td>
                                  
                               </tr>
                           )
                       }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default View;