//Creating a function first for the Robot movements before you use it to line tracking.
function car_back () {
  //car back function
  mecanumRobotV2.Motor(LR.Upper_Left, MD.Back, 25) // left front motor or wheel reverses
  mecanumRobotV2.Motor(LR.Lower_Left, MD.Back, 25) // left back motor or wheel reverses
  mecanumRobotV2.Motor(LR.Upper_Right, MD.Back, 25) // right front motor or wheel reverses
  mecanumRobotV2.Motor(LR.Lower_Right, MD. Back, 25) //right back motor or wheel reverses
}

//Using the coasting turn/calibration will help the robot navigate in what movements to use
function car_left () {
  mecanumRobotV2.Motor(LR.Upper_Left, MD.Back, 25) // left front motor or wheel reverses with 25 speed
  mecanumRobotV2.Motor(LR.Lower_Left, MD.Back, 25) // left back motor or wheel reverses with 25 speed
  mecanumRobotV2.Motor(LR.Upper_Right, MD.Forward, 50) // right front motor or wheel move forward with 50 speed
  mecanumRobotV2.Motor(LR.Lower_Right, MD.Forward, 50) // right back motor or wheel move forward with 50 speed
}

//Using the coasting turn/calibration will help the robot navigate in what movements to use
function car_right () {
  mecanumRobotV2.Motor(LR.Upper_Left, MD.Forward, 50) // left front motor or wheel move forward with 50 speed
  mecanumRobotV2.Motor(LR.Lower_Left, MD.Forward, 50) // left back motor or wheel move forward with 50 speed
  mecanumRobotV2.Motor(LR.Upper_Right, MD.Back, 25) // right front motor or wheel move backward with 25 speed
  mecanumRobotV2.Motor(LR.Lower_Right, MD.Back, 25) //right back motor or wheel move backward with 25 speed
}

function car_forward () {
  mecanumRobotV2.Motor(LR.Upper_Left, MD.Forward, 25) // left front motor or wheel move forward
  mecanumRobotV2.Motor(LR.Lower_Left, MD.Forward, 25) // left back motor or wheel move forward
  mecanumRobotV2.Motor(LR.Upper_Right, MD.Forward, 25) // right front motor or wheel move forward
  mecanumRobotV2.Motor(LR.Lower_Right, MD.Forward, 25) // left back motor or wheel move forward
}

led.enable(false)
let ll= 0
let rr= 0
let cc= 0

basic.forever(function() {
  ll= mecanumRobotV2.LineTracking(LT.Left)
  rr= mecanumRobotV2.LineTracking(LT.Right)
  cc= mecanumRobotV2.LineTracking(LT.Center)
  if (ll == 0 && (cc == 0 && rr == 0)) {
    mecanumRobotV2.state()
  } else if (ll == 0 && (cc == 0 && rr == 1 )) {
    car_right()
  } else if (ll == 0 && (cc == 1 && rr == 0)) {
    car_forward()
  } else if (ll == 1 && (cc == 0 && rr == 0)) {
    car_left()
  } else if (ll == 1 && (cc == 0 && rr == 1)) {
    car_forward()
  } else if (ll == 1 && (cc == 1 && rr == 0)) {
    car_left()
  } else if (ll == 1 && (cc == 1 && rr == 1)) {
    car_forward()
  }
})
