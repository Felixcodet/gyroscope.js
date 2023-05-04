# gyroscope.js
Get DeviceOrientation data from any mobile device including ios13+ devices to use in javascript.
To use as a library or as an example.

## Disclaimer
The gyroscope does not work on HTTP sites due to security reasons.
You have to develop and or host on HTTPS websites.

## How to use
1. Download the library and embed the file into html
2. Create a button in html that starts the gyroscope function
```
   <button id="startButton" style="height:50px;" onclick="requestDeviceOrientation()">
```
3. In your main javascipt file you can get the values by working with the objects rotateDisplay (responsible for rotation around Z-Axis) leftToRight (responsible for rotation around Y-Axis) and frontToBack (responsible for rotation around X-Axis).

```
  function updateGyroscope() {
  console.log(rotateDisplay);
  console.log(leftToRight);
  console.log(frontToBack);
}
```

You can get console data from ios by connecting your iphone to your mac by cable and go into safari on your mac into developer and then you can click on your phone. Chrome on ios supports a console on your phone nativly.
