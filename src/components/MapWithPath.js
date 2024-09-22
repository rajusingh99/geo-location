import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import data, { google_maps_key } from "../constant";
import Marker from "./Marker";
import PolyLineDraw from "./PolyLine";
import { useNavigate } from "react-router-dom";

const MapWithPath = () => {
  const [markers, setMarkers] = useState([]);
  const [pathCoordinates, setPathCoordinates] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const coordinates = data
      .flatMap((item) =>
        item.multi_geo
          ? item.multi_geo.map((geo) => ({
              lat: geo.geocode.lat,
              lng: geo.geocode.lng,
            }))
          : [{ lat: item.loc.coordinates[0], lng: item.loc.coordinates[1] }]
      )
      .slice(0, 30);

    setMarkers(coordinates);
    setPathCoordinates(coordinates);
  }, []);

  const mapContainerStyle = {
    height: "600px",
    width: "100%",
  };

  const center = {
    lat: 15.528818,
    lng: 74.905773,
  };

  const polylineOptions = {
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  };

  const handleBlog =()=>{
    navigate('/list')
  }

  const styles = {
    display:"flex",
    alignSelf:'center',
    justifyContent:"center",
    cursor:"pointer",
    marginLeft:'50%',
    marginTop:'10px',
  
  }
  return (
    <LoadScript googleMapsApiKey={google_maps_key}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        {markers?.map((coordinate, index) => (
          <Marker index={index} coordinate={coordinate} />
        ))}
        <PolyLineDraw
          pathCoordinates={pathCoordinates}
          polylineOptions={polylineOptions}
        />
      </GoogleMap>

      <button onClick={handleBlog} style={styles}>Blogs</button>
    </LoadScript>
  );
};

export default MapWithPath;
