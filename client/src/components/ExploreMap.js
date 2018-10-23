import React, { Component } from "react";
import axios from "axios";
import geolocalize from "./maps/geolocalize";
import Map from './maps/Map';



export class ExploreMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
        this.service = axios.create({
          baseURL: `${process.env.REACT_APP_API_URL}/api`
        });
      }

      componentWillMount(){
        geolocalize().then(center => {
            console.log(center);
            this.setState({location: center});
          });
        this.getMarkers();
      }

      getMarkers =()=>{
          this.service.get("/spaces")
          .then(spaces=>{
            this.setState({spaces: spaces.data});
          })
      }

    render(){
        console.log(this.state.spaces);
        return(
            <Map id="myMap" options={{center: this.state.location, zoom: 12}} 
          onMapLoad={map => {
            
            let marker = new window.google.maps.Marker({
            position: this.state.location, map: map,
            title: 'Hello Istanbul!'
            });
          }} 
        />
        )
    }


}