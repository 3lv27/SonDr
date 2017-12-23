import React, { Component } from 'react';
import HomeLayaout from '../components/home-layout';
import Categories from '../../categories/components/categories';

class Home extends Component {
  render() {
    return (
      <HomeLayaout>
        <Categories categories={this.props.data.categories}/>
      </HomeLayaout>
    );
  }
}

export default Home;
