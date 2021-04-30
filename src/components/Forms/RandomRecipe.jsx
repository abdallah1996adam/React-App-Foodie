import React from "react";
import recipesList from "../../services";

class randomButton extends React.Component {


  handleClick = async (e) => {
    e.preventDefault();

      window.location.replace('/random')
    
  };

  render() {
    return (
      <div className="box">
        <button className='RandomBtn' onClick={this.handleClick }>
          Trouver une recette au hasard
        </button>
      </div>
    );
  }
}

export default randomButton;
