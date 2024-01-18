/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

const Map = ({ location, zoomLevel }) => {
  const api_key = import.meta.env.VITE_GMAP_API; //api key from environmental variabl

  return (
    <>
      <div className="flex flex-col items-center w-full px-4 rounded-xl">
        {/* defining mpa nd the attributes from props */}
        <div className="w-full h-[60vh]">
          <GoogleMapReact
            bootstrapURLKeys={{ key: `${api_key}` }} // inidcate the google api key
            defaultCenter={location} //  render centeralizee my location
            defaultZoom={zoomLevel} // specifies the zoom lelvel passed in as props
          >
            {/* redner a children component for the longitude & latitude and address */}
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
};

export default Map;
