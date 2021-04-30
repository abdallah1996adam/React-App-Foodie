import React from "react";

import SearchResult from "../../components/SearchResult/SearchResult";

class Country extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="global">
        
          <SearchResult history={this.props.history} />
        </div>
      </React.Fragment>
    );
  }
}

export default Country;
