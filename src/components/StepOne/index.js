import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleComponent } from 'react-google-location' 
import Button from '../Styles/Button'

import './StepOne.css'

const API_KEY = "AIzaSyDvWu69XjuxqaUQnd8ZWDl7QEtEQUwNRFY"

export class StepOne extends Component {
  state = {
    place: null,
    lat: 34.0522,
    lng: -118.2437,
    address: ''
  }

  currentLat = () => {
    let searchlat = this.state.place.coordinates.lat
    let searchlng = this.state.place.coordinates.lng
    this.setState({
      lat: searchlat,
      lng: searchlng
    })
  }

  
 render() {

  return (
    <>
<<<<<<< HEAD
 <h1>This is Step One</h1>
         <GoogleComponent
         
          apiKey={API_KEY}
          language={'en'}
          country={'country:us'}
          coordinates={true}
          // locationBoxStyle={'custom-style'}
          // locationListStyle={'custom-style-list'}
          onChange={(e) => { this.setState({ lat: e.coordinates.lat, lng: e.coordinates.lng, address: e.place}) }} 
          onClick={this.currentLat}/>
 
     {/* <Map google={this.props.google} zoom={12} initialCenter={{ lat: 34.0522, lng: -118.2437}} center= {{lat: this.state.lat, lng:this.state.lng}} style={{ height: '40%', width: '60%'}}> */}
     {/* center={{ lat: this.state.place.coordinates.lat, lng: this.state.place.coordinates.lng */}
      {/* <Marker onClick={this.onMarkerClick} name={'Current location'} lat={this.state.lat} lng={this.state.lng}/>
     </Map> */}
     <br />
     <form>
        <textarea type="text" placeholder="location" name="location" onChange={this.props.changeHandler} value={this.props.location}/>
        <Button onClick={this.props.changeProgress}>Next Step</Button>
    </form>
     </>
   );
=======
      <form>

        <div className="stepOneContainer">
          <div className="locatorContainer">
            <GoogleComponent
                apiKey={API_KEY}
                language={'en'}
                country={'country:us'}
                coordinates={true}
                onChange={(e) => { this.setState({ lat: e.coordinates.lat, lng: e.coordinates.lng, address: e.place}) }} 
                onClick={this.currentLat}
                />
          </div>
            <div className="mapContainer">
              <Map google={this.props.google} zoom={12} initialCenter={{ lat: 34.0522, lng: -118.2437}} center= {{lat: this.state.lat, lng:this.state.lng}} style={{ height: '40%', width: '60%'}}>
                <Marker onClick={this.onMarkerClick} name={'Current location'} lat={this.state.lat} lng={this.state.lng}/>
              </Map>
            </div>
            <div className="locationContainer">
              Description of Location
              <br/>
              <textarea type="text" placeholder="location" name="location" onChange={this.props.changeHandler} value={this.props.location}/>
            </div>
              <Button className="continueButton" onClick={this.props.changeProgress}>Continue</Button>
        </div>
      
      </form>
    </>
  );
>>>>>>> master
 }
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')})(StepOne)