
import React, { Component } from 'react';
import axios from 'axios';

class UpdatePantry extends Component {
    constructor(props){
        super(props);


       
        this.state={
            id:this.props.match.params.id,
            itemName:'',
            size:'',
            expDate:''
        };
        this.changeItemName = this.changeItemName.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.changeExpDate = this.changeExpDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
      
    }


    componentDidMount(){
        axios.get("http://localhost:8070/pantry/get/"+this.state.id).then((res)=>{
            console.log(this.props.match.params.id);            
            let pantry = res.data;
            this.setState=({
                 itemName:pantry.itemName,
                 size:pantry.size,
                 expDate:pantry.expDate
            })
        }).catch((err)=>{
            alert(err);
        })
    }

    changeItemName(e){
        this.setState({
            itemName:e.target.value
        });
    }

    changeSize(e){
        this.setState({
           size:e.target.value
        });
    }

    changeExpDate(e){
        this.setState({
            expDate:e.target.value
        });
    }

  onSubmit=(e)=>{
      e.preventDefault();

      let pantry ={itemName:this.state.itemName,size:this.state.size,expDate:this.state.expDate}

      console.log('pantry =>' +JSON.stringify(pantry));

      axios.put("http://localhost:8070/pantry/"+this.props.match.params.id).then((res)=>{
          if(res.data.success){
              this.setState({
                  itemName:'',
                  size:'',
                  expDate:''
              })
          }
      })
  }

    render() {
        return (
            <div>
                 <form onSubmit={this.onSubmit} class="ui form">
                <div class="field">
                    <div class="eight wide field">
                         <input type="text" name="itemName" placeholder="Enter item name" value={this.state.itemName} onChange={this.changeItemName}></input>
                    </div>       
                    <div class="eight wide field">
                          <input type="text" name="size" placeholder="Enter size"  value = {this.state.size} onChange={this.changeSize}>
                                </input>
                    </div>

                     <div class="eight wide field">
                          <input type="text" name="expDate" placeholder="expDate" value={this.state.expDate} onChange={this.changeExpDate}></input>
                     </div>     
                     <button type="submit" class="ui orange button">Update</button>
                </div>    
          </form>
            </div>
        );
    }
}

export default UpdatePantry;