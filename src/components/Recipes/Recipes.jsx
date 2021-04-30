import React from "react";
import "./style.scss";
import recipesList from "../../services";
import {Link} from 'react-router-dom';

class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allRecipes: [],
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await recipesList.getAll();
      this.setState({ allRecipes: response.data.meals.slice(1, 22) });
    } catch (error) {
      this.setState({ error: "server is not working!" });
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.allRecipes.map((recipe, index) => {
          return (
            <div className="div3" key={recipe.idMeal}>
              <div className="gallery">
                <Link onClick={(e)=> this.props.history.push('/Details/' + recipe.idMeal)}
                  className="gallery-link"
                  tilte="show details"
                >
                <span>voir details</span>
                  <img src={recipe.strMealThumb} className="food-img" />
                  <h3 className="food-name">{recipe.strMeal}</h3>
                  <p className="food-desc">
                    {recipe.strTags === null
                      ? ""
                      : `${recipe.strTags.substring(0, 16)}...`}
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Recipes;
