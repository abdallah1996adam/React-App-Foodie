import React from "react";
import "./style.scss";
import recipesList from "../../services";

class RecipeName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: [],
    };
  }

  getRecipeByName = async (e) => {
    e.preventDefault();
    
   try{
    const recipeName = e.target.elements.recipeName.value;
    const response = await recipesList.getByName(recipeName);
    const id = response.data.meals[0].idMeal
    this.props.history.push("/Details/" + id );
   }catch(e){
     this.setState({error: "server error !"})
   }
 
  };

  render() {
    return (
      <div className="box">
        <form onSubmit={this.getRecipeByName}>
          <div className="Name_form">
            <input className='input_form'  type="text" name="recipeName" placeholder="Search By Name" />
            <button className="Btn">Rechecher</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RecipeName;
