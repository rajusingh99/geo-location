
import React, { useState, useEffect,useCallback } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import data, { google_maps_key } from '../constant';
import Marker from './Marker';
import PolyLineDraw from './PolyLine';

const MapWithPath = () => {
    const [markers, setMarkers] = useState(null);
    const [pathCoordinates, setPathCoordinates] = useState(null);
    console.log(pathCoordinates, 'markers');
  
    useEffect(() => {
      const coordinates = data.flatMap(item =>
        item.multi_geo
          ? item.multi_geo.map(geo => ({
              lat: geo.geocode.lat,
              lng: geo.geocode.lng
            }))
          : [{ lat: item.loc.coordinates[0], lng: item.loc.coordinates[1] }]
      ).slice(0,100);
  
      setMarkers(coordinates);  
      setPathCoordinates(coordinates);  
    }, []);


  const mapContainerStyle = {
    height: '620px',
    width: '100%'
  };

  const center = {
    lat: 15.528818,
    lng: 74.905773
  };

  const polylineOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  };

  return (
    <LoadScript googleMapsApiKey={google_maps_key}>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={center}>
        {markers!=null && markers?.map((coordinate, index) => (
          <Marker index={index} coordinate={coordinate} />
        ))}

          { markers !=null &&
            <PolyLineDraw pathCoordinates={pathCoordinates} polylineOptions={polylineOptions} />
            }
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithPath;
