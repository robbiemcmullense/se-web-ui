import React, { Component } from 'react';
import Widget from '../components/widget';

class Home extends Component {

  render() {
    const filters = [
      {
          name: 'react filter 1'
      },
      {
          name: 'reactFilet 2'
      },
      {
          name: 'Filter 3 from react'
      },
      {
          name: 'Last filter!'
      },
      {
          name: 'Last filter!'
      }
    ];
    const rows = filters.map((row, index) => {
        return (
           <Widget name={row.name} key={index}/>
        );
    });
    return (
      <se-container>
        {rows}
      </se-container>
    );
  }
}

export default Home;
