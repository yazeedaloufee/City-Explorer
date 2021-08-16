

import React from 'react';
import axios from 'axios';
    


class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      searchCity:'',
      showData:false,
      cityData:{},
      link:'x'
    }
  }

  getLocation= async (event)=>{
    event.preventDefault();
    
    await this.setState({
      searchCity:event.target.City.value

    })
    
    let locURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchCity}&format=json`;
   
    
    let resultData = await axios.get(locURL);
    console.log('img uuuuuuuurrrrrrrrrl',this.state.link);
    await this.setState({
      cityData: resultData.data[0],
      showData: true,
    })
    await this.setState({
      link:`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=18` 

    })
      
    
    console.log(this.state.cityData.lat);
    console.log(process.env.REACT_APP_LOCATIONIQ_KEY);
console.log('img uuuuuuuurrrrrrrrrl',this.state.link);
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
          {this.state.showData &&
          <img src={this.state.link} alt='map image' />}
          {/* <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='' /> */}
      </>
      </div>
    )
  }
}

export default App;



