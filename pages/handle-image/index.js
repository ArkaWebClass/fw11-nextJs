/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import DeviceImage from "public/assets/device.png";
import LogoArrow from "public/assets/arrow-up.svg";

const imageDevice = {
  width: "50px",
  backgroundColor: "red",
};

export default function HandleImage() {
  return (
    <div className="container text-center">
      <h1>Handle Image</h1>
      {/* with img element HTML */}
      {/* <img src="../assets/device.png" alt="device" /> */}
      {/* with next/image */}
      <div style={imageDevice}>
        <Image src={DeviceImage} alt="Picture of the author" />
      </div>
      {/* or */}
      <div className="device-image">
        {/* di dalam css */}
        {/* .device-image {
          width: 50px;
          background-color: blue;
        } */}
        <Image src={DeviceImage} alt="Picture of the author" />
      </div>
      <hr />
      <h1>Handle SVG</h1>
      {/* with img element HTML */}
      <img src="../assets/arrow-up.svg" alt="icon arrow" />
      {/* with next/image */}
      <Image src={LogoArrow} alt="icon arrow" />
    </div>
  );
}
