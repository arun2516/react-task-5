import React from "react";
import './App.css';
import ResponsiveAppBar from "./Navbar";
import axios from "axios";
import Home from "./Home";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const api_url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      posts:[],
      id:"",
      name:"",
      price:"",
      image_link:"",
      description:"",
      rating:"",
      show:false,
      
    }
  }

createpost = async()=>{
    try{
      const { id,name,price,image_link,description,rating }= this.state;
      const { data } = await axios.post(api_url, {id,name,price,image_link,description,rating});
      const posts = [...this.state.posts];
      posts.push(data);
      this.setState({posts, id:"", name:"", price:"", image_link:"", description:""});
    }catch(err){
       console.error(err);
    }
  };


getposts = async()=>{
    try{
      const {data} = await axios.get(api_url);
      this.setState({posts:data});
      console.log(data);

    }catch(err){
          console.error(err);
    }
  };

componentDidMount(){
    this.getposts();
};

handlesubmit = (e) =>{
  e.preventDefault();
  this.createpost();
};

handlechange=({target:{name,value}})=>{
this.setState({[name]:value});
};


  render(){
     
    return (
      <div className="App">
       <ResponsiveAppBar/>
       <div>
                <Button style={{marginLeft:"30%",marginTop:"30px",marginBottom:"30px"}} variant="contained" color="success" onClick={()=>{this.setState({show:true})}} >Click Here To Add Your Products</Button>
        </div>
        {this.state.show?
          <div>
             <form >
                 <div style={{marginTop:"10px", marginLeft:"30%"}}>
                   <TextField  label="ID" variant="outlined" type="number" name="id" value={this.state.id} onChange={this.handlechange} />  
                 </div>
                 <div style={{marginTop:"10px", marginLeft:"30%"}}>
                   <TextField  label="NAME" variant="outlined" type="text" name="name" value={this.state.name} onChange={this.handlechange} />
                 </div>
                 <div style={{marginTop:"10px", marginLeft:"30%"}}>
                   <TextField label="PRICE" variant="outlined" type="number" name="price" value={this.state.price} onChange={this.handlechange} />
                 </div>
                 <div style={{marginTop:"10px", marginLeft:"30%"}}>
                   <TextField  label="IMAGE_URL" variant="outlined" type="text" name="image_link" value={this.state.image_link} onChange={this.handlechange} />
                 </div>
                 <div style={{marginTop:"10px", marginLeft:"30%"}}>
                   <TextField  label="DESCRIPTION" variant="outlined" type="text" name="description" value={this.state.description} onChange={this.handlechange} />
                 </div>
                 <div style={{marginTop:"10px", marginLeft:"30%"}}>
                   <TextField  label="RATING" variant="outlined" type="number" name="rating" value={this.state.rating} onChange={this.handlechange} />
                 </div>
                 <Button type="submit"  style={{ marginLeft:"30%"}} variant="contained" color="success"  onClick={this.handlesubmit} >Add To List</Button>
             </form>
        </div>:"" }
       <Home posts={this.state.posts} />
       
      </div>
    );

  }
 
}

export default App;
