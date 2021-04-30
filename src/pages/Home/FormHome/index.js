import React from "react";

import Formssearch from "../../../components/Forms";
import Header from "../../../components/Header/Header";
import Recipes from "../../../components/Recipes/Recipes";

class FormHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header history={this.props.history} />
        <section className="home">
          <div className="search">
            <Formssearch  history={this.props.history}/>
          </div>
        </section>
        <div className="row">
          <Recipes  history={this.props.history}/>
        </div>
      </React.Fragment>
    );
  }
}

export default FormHome;
