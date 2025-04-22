import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mbToken, mbStyle } from './constants/tokens';

const Map = (props: any) => (
  <ReactMapGL
    {...props}
    mapboxApiAccessToken={mbToken}
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