import './App.css';

import React, { useState, useEffect } from 'react';

const App = () => {
  const [userAddress, setUserAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ latitude: "43.793607699999995", longitude: "-79.3284823" });
  const [isAddressVisible, setAddressVisiblitly] = useState(false);

  useEffect(() => {
    console.log(coordinates.latitude + "" + coordinates.longitude)
    getUserAddress();
    getHospitalInfo();
  }, [coordinates])

  const getLocation = async () => {
  
    
    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition(getCoordinates, handelLocationError);

      await navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setAddressVisiblitly(true);
      });

    } else
      alert("Geolocation is not supported by this browser.");
  }

  const getUserAddress = async () => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=AIzaSyDu4BYAiI5YwgKcxGaoPxElCcbQZSy1OK8`);
    const data = await response.json();
    setUserAddress(data.results[0].formatted_address);
  }

  const getHospitalInfo = async () => {
    // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.793607699999995,-79.3284823&radius=10000&type=hospital&keyword=hospital&name=hospital&key=AIzaSyDu4BYAiI5YwgKcxGaoPxElCcbQZSy1OK8
    
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.793607699999995,-79.3284823&radius=10000&type=hospital&keyword=hospital&name=hospital&key=AIzaSyDu4BYAiI5YwgKcxGaoPxElCcbQZSy1OK8`);
    const data = await response.json();
    console.log(data);
    
    
    // function logResult(result) {
    //   console.log(result);
    // }
    
    // function logError(error) {
    //   console.log('Looks like there was a problem: \n', error);
    // }
    
    // function validateResponse(response) {
    //   if (!response.ok) {
    //     console.log('cookies');
    //     throw Error(response.statusText);
    //   }
    //   console.log('bookies');
    //   return response;
    // }
    
    // function readResponseAsJSON(response) {
    //   return response.json();
    // }
    
    // function fetchJSON(pathToResource) {
    //   var myHeaders = new Headers({
    //     'Content-Type': 'text/plain',
    //     'Access-Control-Allow-Origin': '*'
    //   });

    //   fetch(pathToResource, {
    //     // mode: 'no-cors',
    //     headers: myHeaders
    //   }) // 1
    //   .then(validateResponse) // 2
    //   .then(readResponseAsJSON) // 3
    //   .then(logResult) // 4
    //   .catch(logError);
    // }
    
    // fetchJSON('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.793607699999995,-79.3284823&radius=10000&type=hospital&keyword=hospital&name=hospital&key=AIzaSyDu4BYAiI5YwgKcxGaoPxElCcbQZSy1OK8');
  }

  const handelLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
      default:
        alert("An unknown error occured.")
    }
  }

  const [loc1, setLoc1] = useState({
    latitude: `${coordinates.latitude + 400}`,
    longitude: `${coordinates.latitude + 400}`
  });
  const [loc2, setLoc2] = useState({
    latitude: `${coordinates.latitude + 200}`,
    longitude: `${coordinates.latitude + 200}`
  });
  const [loc3, setLoc3] = useState({
    latitude: `${coordinates.latitude - 400}`,
    longitude: `${coordinates.latitude - 400}`
  });
  const [loc4, setLoc4] = useState({
    latitude: `${coordinates.latitude - 200}`,
    longitude: `${coordinates.latitude + 200}`
  });

  return (
    <div className="Map">
      <h2>
        Geolocation Test
      </h2>
      
      <button onClick={() => getLocation()}>Get coordinates</button>
      <h4>Coordinates</h4>
      <p>Latitude: {coordinates.latitude}</p>
      <p>Longitude: {coordinates.longitude}</p>
      <h4>Google Maps Geocoding</h4>
      <p>Address: {isAddressVisible ? userAddress : ""}</p>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?&zoom=11&size=512x512&maptype=roadmap\
      &markers=size:small%7Ccolor:blue%7C${coordinates.latitude-0.01},${coordinates.longitude-0.02}
      &markers=%7Ccolor:0xFFB0B1%7Clabel:3%7C${coordinates.latitude-0.06},${coordinates.longitude-0.1}
      &markers=color:0xE26F6F%7Clabel:1%7C${coordinates.latitude-0.01},${coordinates.longitude-0.05}
      &markers=color:0xFFB0B1%7Clabel:4%7C${coordinates.latitude-0.1},${coordinates.longitude}
      &markers=color:0xE26F6F%7Clabel:2%7C${coordinates.latitude},${coordinates.longitude-0.1}
      &key=AIzaSyDu4BYAiI5YwgKcxGaoPxElCcbQZSy1OK8`}
        alt="Your Location on Google Maps" />

    </div>
  );
}

export default App;