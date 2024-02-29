import React from "react";
import Bennett from "../img/Moore_Aerial-51-jpg.webp";
import "../styles/AboutStore.css";

const AboutStore = () => {
  return (
    <div className="AboutStore">
      <h1 className="h1head">
        Welcome to Moore Lumber & Hardware & Ace Hardware Bennett
      </h1>
      <img src={Bennett} alt="Bennett Store" className="store" />
      <div className="text">
        <h2 className="h2text">About Moore Lumber Bennett</h2>
        <p className="ptext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          fermentum posuere urna nec tincidunt. Pretium vulputate sapien nec
          sagittis aliquam malesuada bibendum. Orci eu lobortis elementum nibh
          tellus molestie. Leo in vitae turpis massa sed elementum tempus. Est
          sit amet facilisis magna etiam tempor orci. Amet facilisis magna etiam
          tempor orci eu lobortis elementum. Sapien pellentesque habitant morbi
          tristique senectus et netus. Vestibulum lorem sed risus ultricies
          tristique. Mauris commodo quis imperdiet massa tincidunt. Sit amet
          aliquam id diam maecenas ultricies mi eget. Convallis posuere morbi
          leo urna molestie at elementum. Laoreet id donec ultrices tincidunt.
          Cum sociis natoque penatibus et. Odio eu feugiat pretium nibh ipsum
          consequat. Et netus et malesuada fames ac turpis egestas sed. Bibendum
          at varius vel pharetra vel turpis. Dignissim convallis aenean et
          tortor.
          <br />
          <br />
          <br />
          This text would be changed this is just a placeholder for the actual
          about Moore Lumber Bennett location.
        </p>
      </div>
    </div>
  );
};

export default AboutStore;
