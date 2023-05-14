# gyroscope.js
Get DeviceOrientation data from any mobile device including ios13+ devices to use in javascript.
Download the javascript file and use it like a library.

## Disclaimer
The gyroscope does not work on HTTP sites due to security reasons.
You have to develop and or host on HTTPS websites.

## How to use
1. Download the library and embed the file into HTML.
2. After creating a button in HTML get the button in your main javascript file and trigger the function gyroscope.requestDeviceOrientation().
```
   let button = document.querySelector(".startButton");
   button.onclick = function(){gyroscope.requestDeviceOrientation()};
```
3. You can get the data by working with the objects 'rotateDisplay' (responsible for rotation around Z-Axis) 'leftToRight' (responsible for rotation around Y-Axis) and 'frontToBack' (responsible for rotation around X-Axis). If you want to get gyroscope data continuously you can do it like in the example.

```
  function update() {
   console.log(gyroscope);
   requestAnimationFrame(update)
}
update();
```

You can get console data from ios by connecting your iphone to your mac by cable and go into safari on your mac into developer and then you can click on your phone. Chrome on ios supports a console on your phone nativly.
