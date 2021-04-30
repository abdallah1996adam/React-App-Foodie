import React from "react";
import recipesList from "../../services";

class RecipeIngerdient extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      error: [],
    }
  }

  getByIngredient = async (e) => {
    e.preventDefault();

    
    try{
      const Ingerdient = e.target.elements.recipeIngredient.value;
      const response = await recipesList.getByIngredient(Ingerdient);
      const recipeIngerdient = response.data.meals.map((ingredient)=> JSON.stringify(ingredient) + "list")
  
      localStorage.setItem('allData',recipeIngerdient )
      this.props.history.push("/result");
      
    }catch(e){
      this.setState({error: "server error!"})
    }
   
    
  };

  render() {
    return (
      <div className="box">
        <form onSubmit={this.getByIngredient}>
          <div className="Ingredient_form">
            <input className="inputI"
              type="text"
              name="recipeIngredient"
              placeholder="Search By Ingredient"
            />
            <button className="BtnI">Rechecher</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RecipeIngerdient;
