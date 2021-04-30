import React from "react";

import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";

class Details extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <React.Fragment>
        <RecipeDetails history={this.props.history}/>
      </React.Fragment>
    );
  }
}

export default Details;
