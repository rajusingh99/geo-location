import { Polyline } from '@react-google-maps/api'
import React from 'react'

const PolyLineDraw = ({pathCoordinates,polylineOptions}) => {
  return (
    <div>
          <Polyline path={pathCoordinates} options={polylineOptions} />
    </div>
  )
}

export default PolyLineDraw
