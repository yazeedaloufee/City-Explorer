

import Weather from './Weather';
import React from 'react';
import axios from 'axios';
import Movies from './movies'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCity: '',
      showData: false,
      cityData: {},
      link: 'x',
      // apiLink:'x',
      movieData: [],
      testArray: []
    }
  }

  getLocation = async (event) => {
    event.preventDefault();

    await this.setState({
      searchCity: event.target.City.value
    })
    let locURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchCity}&format=json`;
    let resultData = await axios.get(locURL);

    await this.setState({
      cityData: resultData.data[0],
      showData: true,
    })

    await this.setState({
      link: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=18`
    })

    let apiLink = `${process.env.REACT_APP_SERVER_LINK}/weather?searchQuery=${this.state.searchCity}&lat=${this.state.cityData.lat}&lon${this.state.cityData.lon}`
    // console.log(apiLink);
    // console.log('axios', await axios.get(apiLink));

    let apiData = await axios.get(apiLink)
    // console.log('apiData', apiData.data);
   
    await this.setState({

      testArray: apiData.data
    })

    let movieLink=`${process.env.REACT_APP_SERVER_LINK}/movie?query=${this.state.searchCity}`
console.log(2);
    let moviepreparedata=await axios.get(movieLink);

    await this.setState({
      movieData: moviepreparedata.data
      
    })
    console.log(this.state.movieData.data)
    console.log(3);

  }

  render() {
    return (
      <div>
        <>
          <h2>City Explorer</h2>
          <form onSubmit={this.getLocation}>
            <input type='text' placeholder='Enter City' name='City' />
            <button >Explor!</button>
          </form>
          {
            this.state.showData &&

            <p>{this.state.searchCity} Lat:{this.state.cityData.lat} /Lon:{this.state.cityData.lon} </p>
          }
          {this.state.showData &&
            <img src={this.state.link} alt='map image' />}
          {/* <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='' /> */}

          <Weather resultDataAPI={this.state.testArray} />
          {this.state.showData &&
          <Movies moviesArray={this.state.movieData}/>
          }
        </>
      </div>
    )
  }
}

export default App;



