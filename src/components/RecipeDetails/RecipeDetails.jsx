import React from "react";
import recipesList from "../../services";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./style.scss";

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RecipeDetail: [],
      error: [],
    };
  }

  async componentDidMount() {
    try {
      const id = this.props.history.location.pathname.slice("9");
      const response = await recipesList.getMealById(id);

      this.setState({ RecipeDetail: response.data.meals[0] });
    } catch (error) {
      this.setState({ error: "server error" });
    }
  }

  addFavoris = () => {
    let recipeToFavoris = {
      idMeal: this.state.RecipeDetail.idMeal,
      strMeal: this.state.RecipeDetail.strMeal,
      strMealThumb: this.state.RecipeDetail.strMealThumb,
    };

    if (localStorage.getItem("favoris")) {
      let favorisArray = JSON.parse(localStorage.getItem("favoris"));

      if (favorisArray.length > 0) {
        favorisArray.forEach((item) => {
          if (item.idMeal !== recipeToFavoris.idMeal) {
            favorisArray.push(recipeToFavoris);
          }
        });
      } else {
        favorisArray.push(recipeToFavoris);
      }

      localStorage.setItem("favoris", JSON.stringify(favorisArray));
    } else {
      let favorisArray1 = [];
      favorisArray1.push(recipeToFavoris);

      localStorage.setItem("favoris", JSON.stringify(favorisArray1));
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className='flex'>
            <Link to="/favoris" className="favorislink">
              favoris
            </Link>
            <Link to="/">Revenir à la page Home</Link>
          </div>
          <div className="ingredient">
            <img src={this.state.RecipeDetail.strMealThumb} />
            <div className="flex">
              <div className="Ingredient">
                <h3>les Ingredient</h3>
                <ul>
                  <li>{this.state.RecipeDetail.strIngredient1}</li>
                  <li>{this.state.RecipeDetail.strIngredient2}</li>
                  <li>{this.state.RecipeDetail.strIngredient3}</li>
                  <li>{this.state.RecipeDetail.strIngredient4}</li>
                  <li>{this.state.RecipeDetail.strIngredient5}</li>
                  <li>{this.state.RecipeDetail.strIngredient6}</li>
                  <li>{this.state.RecipeDetail.strIngredient7}</li>
                  <li>{this.state.RecipeDetail.strIngredient8}</li>
                  <li>{this.state.RecipeDetail.strIngredient9}</li>
                  <li>{this.state.RecipeDetail.strIngredient10}</li>
                  <li>{this.state.RecipeDetail.strIngredient11}</li>
                  <li>{this.state.RecipeDetail.strIngredient12}</li>
                  <li>{this.state.RecipeDetail.strIngredient13}</li>
                  <li>{this.state.RecipeDetail.strIngredient14}</li>
                  <li>{this.state.RecipeDetail.strIngredient15}</li>
                  <li>{this.state.RecipeDetail.strIngredient16}</li>
                  <li>{this.state.RecipeDetail.strIngredient17}</li>
                  <li>{this.state.RecipeDetail.strIngredient18}</li>
                  <li>{this.state.RecipeDetail.strIngredient19}</li>
                  <li>{this.state.RecipeDetail.strIngredient20}</li>
                </ul>
              </div>
              <div className="mesures">
                <h3>les mesures</h3>
                <ul>
                  <li>{this.state.RecipeDetail.strMeasure1}</li>
                  <li>{this.state.RecipeDetail.strMeasure2}</li>
                  <li>{this.state.RecipeDetail.strMeasure3}</li>
                  <li>{this.state.RecipeDetail.strMeasure4}</li>
                  <li>{this.state.RecipeDetail.strMeasure5}</li>
                  <li>{this.state.RecipeDetail.strMeasure6}</li>
                  <li>{this.state.RecipeDetail.strMeasure7}</li>
                  <li>{this.state.RecipeDetail.strMeasure8}</li>
                  <li>{this.state.RecipeDetail.strMeasure9}</li>
                  <li>{this.state.RecipeDetail.strMeasure10}</li>
                  <li>{this.state.RecipeDetail.strMeasure11}</li>
                  <li>{this.state.RecipeDetail.strMeasure12}</li>
                  <li>{this.state.RecipeDetail.strMeasure13}</li>
                  <li>{this.state.RecipeDetail.strMeasure14}</li>
                  <li>{this.state.RecipeDetail.strMeasure15}</li>
                  <li>{this.state.RecipeDetail.strMeasure16}</li>
                  <li>{this.state.RecipeDetail.strMeasure17}</li>
                  <li>{this.state.RecipeDetail.strMeasure18}</li>
                  <li>{this.state.RecipeDetail.strMeasure19}</li>
                  <li>{this.state.RecipeDetail.strMeasure20}</li>
                </ul>
              </div>

              <h3 className="Instructions">Instructions</h3>
              <p>{this.state.RecipeDetail.strInstructions}</p>
            </div>
            <button className='btnfavoris' onClick={this.addFavoris}>Ajouter dans favoris</button>

            <figure>
              <ReactPlayer url={this.state.RecipeDetail.strYoutube} />
            </figure>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeDetails;
