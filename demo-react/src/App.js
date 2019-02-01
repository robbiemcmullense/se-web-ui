import React, { Component } from 'react';
import Widget from './widget';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1,
    };
  }

  componentDidMount() {
    this.ngElement = this.refs.header;
    this.ngElement.appTitle = "Test Advisor";
    // we need to bind the event listener this way, since we can't get the custom event past react's synthetic event system
    // more on this at: https://github.com/facebook/react/issues/7901
    // this.ngElement.addEventListener('ratingChange', data => {
    //   this.setState({ rating: data.detail });
    // });
  }

  setMaxRating = () => {
    this.setState({ rating: 2 });
  };

  render() {
    const filters = [
      {
          'name': 'react filter 1'
      },
      {
          'name': 'reactFilet 2',
      },
      {
          'name': 'Filter 3 from react',
      },
      {
          'name': 'Last filter!'
      },
      {
          'name': 'Last filter!'
      }
    ];
    const rows = filters.map((row, index) => {
        return (
           <Widget name={row.name}/>
        );
    });
    return (
      <se-app>
        <se-header ref="header" appTitle="title"></se-header>
        <se-navbar color="primary">
          <nav slot="start">
            Tenant: <a class="dropdown"> test </a>
          </nav>
          <nav>
            <a class="active">Home</a> <a>Components</a> <a>Icons</a>
          </nav>
        </se-navbar>

        <se-widget-container>
          {rows}
        </se-widget-container>
      </se-app>
    );
  }
}

export default App;
