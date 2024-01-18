/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => {
  return (
    <div className="flex items-center w-[180px] text-black">
      {/* location inidcator  icon */}
      <Icon icon={locationIcon} className="text-[10rem]" />
      {/* location address text */}
      <p className="font-normal sm:font-semibold text-red-500 text-md sm:text-base">
        {text}
      </p>
    </div>
  );
};

export default LocationPin;
