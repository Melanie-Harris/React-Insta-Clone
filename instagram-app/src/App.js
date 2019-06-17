import React from 'react';
import './App.css';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dumbData: DummyData
    };
  }

  render() {
    return (
      <PostContainer dataProp={this.state.dumbData} />
    )
  }
}

export default App;
