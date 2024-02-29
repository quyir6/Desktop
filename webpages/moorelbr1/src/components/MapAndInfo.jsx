import React from "react";
import "../styles/MapAndInfo.css";

const MapAndInfo = () => {
  return (
    <div className="MapAndInfo">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391797.8472173006!2d-105.23545574948132!3d39.898408129053145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c57d0ff622aef%3A0xdeb48124b86696cb!2sMoore%20Lumber%20%26%20Ace%20Hardware%20Bennett!5e0!3m2!1sen!2sus!4v1708918443126!5m2!1sen!2sus"
        className="Map"
      />
    </div>
  );
};

export default MapAndInfo;
