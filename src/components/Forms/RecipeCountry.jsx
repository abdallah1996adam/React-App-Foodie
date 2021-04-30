import { computeHeadingLevel } from "@testing-library/dom";
import Recat from "react";
import recipesList from "../../services";
import RecipeCateg from "./RecipeCategory";

class RecipeCountry extends Recat.Component {
  constructor(props) {
    super(props);
    this.state ={
      error: [],
    }
  }

  getByCountry = async (e) => {
    e.preventDefault();

    try {
      const pays = e.target.elements.Country.value;
      const response = await recipesList.getByCountry(pays);
      const listContries = response.data.meals.map(
        (country) => JSON.stringify(country) + "list"
      );
      localStorage.setItem("allData", listContries);
      console.log(localStorage.getItem("allData"));
      this.props.history.push("/result");
    } catch (e) {
      this.setState({ error: "server error!" });
    }
  };

  render() {
    return (
      <div className="box">
        <form onSubmit={this.getByCountry}>
          <div className="Country_form">
            <input
              className="input_form"
              type="text"
              name="Country"
              placeholder="Search By Country"
            />
            <input type="submit" value="Rechecher" className="Btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default RecipeCountry;
