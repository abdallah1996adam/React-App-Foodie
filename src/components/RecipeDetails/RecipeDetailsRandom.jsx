import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';

export default class RecipeDetailsRandom extends Component {
    

    render() {
        const data = this.props.data
        return (
            <div>
                <React.Fragment>
        <div className="container">
        <div className='flex'>
          <Link to="/favoris" className='randomlink' >favoris</Link>
          <Link to="/" >Revenir à la page Home</Link>
          </div>
          <div className="ingredient">
            <img src={data.strMealThumb} />
            <div className="flex">
              <div className="Ingredient">
                <h3>les Ingredient</h3>
                <ul>
                  <li>{data.strIngredient1}</li>
                  <li>{data.strIngredient2}</li>
                  <li>{data.strIngredient3}</li>
                  <li>{data.strIngredient4}</li>
                  <li>{data.strIngredient5}</li>
                  <li>{data.strIngredient6}</li>
                  <li>{data.strIngredient7}</li>
                  <li>{data.strIngredient8}</li>
                  <li>{data.strIngredient9}</li>
                  <li>{data.strIngredient10}</li>
                  <li>{data.strIngredient11}</li>
                  <li>{data.strIngredient12}</li>
                  <li>{data.strIngredient13}</li>
                  <li>{data.strIngredient14}</li>
                  <li>{data.strIngredient15}</li>
                  <li>{data.strIngredient16}</li>
                  <li>{data.strIngredient17}</li>
                  <li>{data.strIngredient18}</li>
                  <li>{data.strIngredient19}</li>
                  <li>{data.strIngredient20}</li>
                </ul>
              </div>
              <div className="mesures">
                <h3>les mesures</h3>
                <ul>
                  <li>{data.strMeasure1}</li>
                  <li>{data.strMeasure2}</li>
                  <li>{data.strMeasure3}</li>
                  <li>{data.strMeasure4}</li>
                  <li>{data.strMeasure5}</li>
                  <li>{data.strMeasure6}</li>
                  <li>{data.strMeasure7}</li>
                  <li>{data.strMeasure8}</li>
                  <li>{data.strMeasure9}</li>
                  <li>{data.strMeasure10}</li>
                  <li>{data.strMeasure11}</li>
                  <li>{data.strMeasure12}</li>
                  <li>{data.strMeasure13}</li>
                  <li>{data.strMeasure14}</li>
                  <li>{data.strMeasure15}</li>
                  <li>{data.strMeasure16}</li>
                  <li>{data.strMeasure17}</li>
                  <li>{data.strMeasure18}</li>
                  <li>{data.strMeasure19}</li>
                  <li>{data.strMeasure20}</li>
                </ul>
              </div>

              <h3 className="Instructions">Instructions</h3>
              <p className='text'>{data.strInstructions}</p>
            </div>
            <button className='btnfavoris' onClick={this.addFavoris}>Ajouter dans favoris</button>
            
            <figure>
              <ReactPlayer url={data.strYoutube} />
            </figure>
          </div>
        </div>
      </React.Fragment>
            </div>
        )
    }
}
