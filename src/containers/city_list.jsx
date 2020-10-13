import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { fetchMessages } from '../actions';

import City from './city';

class CityList extends Component {

  // componentWillMount() {

  // } 

  render () {
    return (
      <div>
        {
          this.props.cities.map((city) => {
            return <City key={city.name} city={city} />;
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchMessages }, dispatch);
// }

export default connect(mapStateToProps)(CityList);
