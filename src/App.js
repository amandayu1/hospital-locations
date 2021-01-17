import '../App.css';

import React, { useState, useEffect } from 'react';

export const App = () => {
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
      &markers=size:small%7Ccolor:blue%7C${coordinates.latitude},${coordinates.longitude}
      &markers=%7Ccolor:0xFFB0B1%7Clabel:1%7C${coordinates.latitude-0.05},${coordinates.longitude-0.07}
      &markers=color:0xFFB0B1%7Clabel:2%7C${coordinates.latitude-0.1},${coordinates.longitude-0.05}
      &markers=color:0xE26F6F%7Clabel:3%7C${coordinates.latitude-0.01},${coordinates.longitude-0.03}
      &key=AIzaSyDu4BYAiI5YwgKcxGaoPxElCcbQZSy1OK8`}
        alt="Your Location on Google Maps" />

    </div>
  );
}
