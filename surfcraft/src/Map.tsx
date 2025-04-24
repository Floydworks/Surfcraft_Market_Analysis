import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mbMapApiToken = import.meta.env.VITE_MB_MAP_API_TOKEN;
const mbStyle = import.meta.env.VITE_MB_STYLE;

const Map = (props: any) => (
  <ReactMapGL
    {...props}
    mapboxApiAccessToken={mbMapApiToken}
  />
);

function SurfMap() {
  return (
    <Map
      mapStyle={mbStyle}
      center={[0, 0]}
      zoom={1}
    >
    </Map>
  );
}

export default SurfMap;