

import React from 'react';
import axios from 'axios';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      searchCity:'',
      showData:false,
      cityData:{}
    }
  }

  getLocation= async (event)=>{
    event.preventDefault();
    
    await this.setState({
      searchCity:event.target.City.value

    })
    
    let locURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchCity}&format=json`;
    
    let resultData = await axios.get(locURL);
    
    this.setState({
      cityData: resultData.data[0],
      showData: true
    })
  }

  render(){
    return(
      <div>
      <>
      <h2>City Explorer</h2>
      <form onSubmit={this.getLocation}>
        <input type='text' placeholder='Enter City' name='City'/>
      <button >Explor!</button>
      </form>
      {
      this.state.showData &&

            <p>{this.state.searchCity} Lat:{this.state.cityData.lat} /Lon:{this.state.cityData.lon} </p>
          }
      </>
      </div>
    )
  }
}

export default App;



