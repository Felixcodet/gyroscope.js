let updateRate = 1 / 60; //sensor refresh rate
let rotateDisplay = 0;
let leftToRight = 0;
let frontToBack = 0;
let movementTowardsToAway = 0;
let movementLeftToRight = 0;
let movementUpToDown = 0;

//
// DeviceOrientationEvent
//

function requestDeviceOrientation() {
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    DeviceOrientationEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          //what to do with gyroscope: >IOS13
          getOrientationData();
        }
      })
      .catch(console.error);
  } else {
    //what to do with gyroscope: other devices
    getOrientationData();
  }
}


//
// DeviceMotionEvent
//

function requestDeviceMotion() {
  if (
    typeof DeviceMotionEvent !== "undefined" &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === "granted") {
          //what to do with gyroscope: >IOS13
          getMotionData();
        }
      })
      .catch(console.error);
  } else {
    //what to do with gyroscope: other devices
    getMotionData();
  }
}



function getOrientationData() {
  window.addEventListener("deviceorientation", (event) => {
    rotateDisplay = event.alpha;
    frontToBack = event.beta;
    leftToRight = event.gamma;
    updateGyroscope();
  });
}

function getMotionData() {
  window.addEventListener("devicemotion", (event) => {
    movementTowardsToAway = event.acceleration.z;
    movementLeftToRight = event.acceleration.x;
    movementUpToDown = event.acceleration.y;
    updateGyroscope();
  });
}
