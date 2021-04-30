import axios from "axios";
import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './style.scss'

export default class index extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: [],
    };
  }

  getFavoris = () => {
    if (localStorage.getItem("favoris")) {
      let favorisArray = JSON.parse(localStorage.getItem("favoris"));
      this.setState({ data: favorisArray });
    }
  };


  componentDidMount() {
    this.getFavoris();
  }


  deleteItem = (id) =>{
      let items = JSON.parse(localStorage.getItem("favoris"));
      let favorisArray =  items.filter(item => {
         return item.idMeal !== id 
      });
     localStorage.setItem('favoris', JSON.stringify(favorisArray))
     this.setState({data: favorisArray})
  }


  render() {
    return (
      <div>
      <Link to='/' className='favoritslink'>Home</Link>
        {this.state.data.length === 0
          ? (
              <p className='text5'>pas de favoris pour le moment</p>
          )
          : this.state.data.map((item, index) => {
              return (
                <>
                <figure key={index}>
                  <img className='favoris_img' src={item.strMealThumb} alt={item.strMeal} />
                  <a href={`/Details/` + item.idMeal} className='fovrishref'>{item.strMeal}</a>
                </figure>
                  <button className='deletebtn' onClick={()=> this.deleteItem(item.idMeal)}>supprimer</button>
                  </>
              );
            })}
      </div>
    );
  }
}
