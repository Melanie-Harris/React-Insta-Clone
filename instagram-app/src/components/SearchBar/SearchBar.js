import React from 'react';
// import { FiInstagram } from 'react-icons/fa';


const SearchBar = props => {
    console.log(props)
    return (
        <div className="searchBar">


            <img className="cameraLogo" src="https://img.icons8.com/metro/26/000000/instagram-new.png"></img>
            <span className="font">| Instagram</span>
            {/* <FiInstagram/> */}
            <input
                type="text"
                name="search"
                placeholder="search"
                value={props.value}
                onChange={props.searchHandler}

            />
            <img src="https://img.icons8.com/ios/64/000000/compass.png</img>"></img>
            <img className="heart" src="https://img.icons8.com/ios/50/000000/like.png"></img>
            <img src="https://img.icons8.com/pastel-glyph/64/000000/gender-neutral-user.png"></img>
        </div>
    )

}



export default SearchBar;