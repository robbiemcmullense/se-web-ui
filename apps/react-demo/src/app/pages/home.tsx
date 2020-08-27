import React, { Component } from 'react';
import Widget from '../components/widget';
import { SeContainer } from '@se/web-ui-react';

class Home extends Component {
  render() {
    const filters = [
      {
        name: 'react filter 1',
      },
      {
        name: 'reactFilet 2',
      },
      {
        name: 'Filter 3 from react',
      },
      {
        name: 'Last filter!',
      },
    ];
    return (
      <SeContainer>
        {filters.map((row, index) => (
          <Widget name={row.name} key={index} />
        ))}
      </SeContainer>
    );
  }
}

export default Home;
