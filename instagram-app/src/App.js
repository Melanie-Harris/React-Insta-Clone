import React from 'react';
import './App.css';
import '/Users/melanieharris/Desktop/LS/week7/React-Insta-Clone/instagram-app/src/components/CommentSection/CommentSection.css';
import '/Users/melanieharris/Desktop/LS/week7/React-Insta-Clone/instagram-app/src/components/PostContainer/PostContainer.css';
import '/Users/melanieharris/Desktop/LS/week7/React-Insta-Clone/instagram-app/src/components/SearchBar/SearchBar.css'
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData
    };
  }

  componentDidMount(){
    this.setState({dumbData:dummyData})
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
