import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';
import './styles/App.css';
import Tab from './components/Tab';


const mbMapApiToken = import.meta.env.VITE_MB_MAP_API_TOKEN;

const INITIAL_CENTER = [
  -74.0242,
  40.6941
]
const INITIAL_ZOOM = 10.12

function App() {
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  const [center, setCenter] = useState(INITIAL_CENTER)
  const [zoom, setZoom] = useState(INITIAL_ZOOM)

  useEffect(() => {
    mapboxgl.accessToken = mbMapApiToken
    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        center: center,
        zoom: zoom,
        // init: false, // uncomment to prevent map from loading during dev
      });
    }
    if (!mapRef.current) return
    mapRef.current.on('move', () => {
      // get the current center coordinates and zoom level from the map
      const mapCenter = mapRef.current.getCenter() 
      const mapZoom = mapRef.current.getZoom()

      // update state
      setCenter([ mapCenter.lng, mapCenter.lat ])
      setZoom(mapZoom)
    })

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <>
    <Tab title='Surfcraft' />
      <div id='map-container' ref={mapContainerRef} />
    </>
  )
}

export default App