import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { fetchMessages } from '../actions';

const City = (props) => {

    return (
      <div>
        <p>{props.name}</p>
      </div>
    );
}

// function mapStateToProps(state) {
//   return {
//     cities: state.cities
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchMessages }, dispatch);
// }

// export default connect(mapStateToProps)(City);
export default City;




