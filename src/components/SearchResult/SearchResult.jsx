import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: [],
    };
  }
  async componentDidMount() {
    let allRecipes = localStorage.getItem("allData");
    allRecipes = allRecipes.split(/list,?/g);
    allRecipes.pop();
    allRecipes = allRecipes.map((element) => JSON.parse(element));
    await this.setState({ allRecipes });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.allRecipes.map((element, index) => {
          return (
            <>
              <div className="gallery">
                <figure className="gallery_figure" index={element.idMeal}>
                  <Link
                    onClick={(e) =>
                      this.props.history.push("/Details/" + element.idMeal)
                    }
                  >
                    <img src={element.strMealThumb} className="gallery_img" />
                    <figcaption className="gallery_name">
                      {element.strMeal}
                    </figcaption>
                  </Link>
                </figure>
              </div>
            </>
          );
        })}
      </React.Fragment>
    );
  }
}
export default SearchResult;
