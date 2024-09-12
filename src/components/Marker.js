import React from 'react'
import {  Marker } from '@react-google-maps/api';

const MarkerLine = ({index,coordinate}) => {
  return (
    <>
       <Marker key={index} position={coordinate} />
    </>
  )
}

export default MarkerLine
