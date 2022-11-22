import  react, { useMemo,useState,useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF, Autocomplete } from '@react-google-maps/api';
import "./Map.css"
import useGeolocation from "./useGeolocation";
import { useAuth } from "../../CurrentUserContext";



export default function PlaceMap() {

  console.log(process.env.REACT_APP_MAPS_API);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API,
libraries:['places']
  });
  if (!isLoaded) return <div>Loading,Please Check your connection</div>;
  return (
    <div >
      <Map />

    </div>
  )
}

function Map() {
  const { directions } = useAuth();
  useEffect(() => {
    sessionStorage.setItem("location", JSON.stringify({lat: location.coordinates.lat, lng: location.coordinates.lng }))
  },[]);
  const location = useGeolocation();
  const [stateMap, setstateMap] = useState(/** @type google.maps.Map */(null));

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
        draggable={true}
    />


  </GoogleMap>
  <button onClick={() => stateMap.panTo(center)} className=" btn btn-danger">
    Click To Detect your location
  </button>
  <div>
    {JSON.stringify(location)}
  </div>
</>
);
}


