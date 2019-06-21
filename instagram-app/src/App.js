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
      data: [],
      search: ''
    };
  }


searchInputHandler = e => {
  console.log(e.target.name)
    this.setState=({
        search: e.target.value
    })
  } 

  componentDidMount(){
    this.setState({data:dummyData})
  }


  render() {
    console.log(this.state.searchBar)
    return (
      <>
      
        <SearchBar 
        searchHandler={this.searchInputHandler} 
        value={this.state.search}/>

        <PostContainer 
        dummy={this.state.data}/>
        <h1> test</h1>
      </>
    )
  }
}

export default App;

//search onclick doesnt work
