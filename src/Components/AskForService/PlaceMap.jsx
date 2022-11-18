import  react, { useMemo,useState,useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF, Autocomplete } from '@react-google-maps/api';
import "./Map.css"
import useGeolocation from "./useGeolocation";
export default function PlaceMap() {
  
  console.log(process.env.REACT_APP_MAPS_API);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API,
libraries:['places']
  });
  if (!isLoaded) return <div>Loading,Please Check your connection</div>;
  return (
    <div>
      <Map />
    </div>
  )
}

function Map() {
  useEffect(() => {
  

  },[PlaceMap]);
  const location = useGeolocation();
  const [stateMap, setstateMap] = useState(/** @type google.maps.MAp */(null));
  console.log(location);
 const center={ lat: location.coordinates.lat, lng: location.coordinates.lng 
  }

  
return (
  <>
  <GoogleMap zoom={10}
    center={{ lat: location.coordinates.lat, lng: location.coordinates.lng 
    }}
    mapContainerClassName="map"
    options={{
      zoom: false,
      StreetViewPanorama: false,
      mapTypeControl: false,
      fullscreenControl: false
    
    }}
    onLoad={map => setstateMap(map)}
  >
    <MarkerF position={center}
    />


  </GoogleMap>
  <button onClick={() => stateMap.panTo(center)} className=" bg-alert">
    hsdajkjfdklhak
  </button>
  <div>
    {JSON.stringify(location)}
  </div>
</>
);
}


