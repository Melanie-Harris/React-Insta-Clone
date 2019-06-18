import React from 'react';
import './App.css';
// import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
// import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <>
        <SearchBar />
        < PostContainer dummy={this.state.data}/>
        <h1> test</h1>
      </>
    )
  }
}

export default App;
