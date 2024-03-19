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

//Create a variable for the directions
led.enable(false)
let ll= 0 // ll variable for left linetracking movement
let rr= 0 // rr variable for right linetracking movement
let cc= 0 // cc variable for center linetracking movement

// Create forever function for the movement of the robot
basic.forever(function() {
  ll= mecanumRobotV2.LineTracking(LT.Left) // the set block in block based code with LineTracking function for the left movement
  rr= mecanumRobotV2.LineTracking(LT.Right) // the set block in block based code with LineTracking function for the right movement
  cc= mecanumRobotV2.LineTracking(LT.Center) // the set block in block based code with Linetracking function for the center movement

  //Using if-else condition for the robot
  /* Must remember
  1 value detect white color
  0 value detects black color
  */
  
  if (ll == 0 && (cc == 0 && rr == 0)) {
    mecanumRobotV2.state() // using 0 and state function for no movement
    
  } else if (ll == 0 && (cc == 0 && rr == 1 )) {
    car_right() // for car right function rr is set to 1 for line sensor in moving for right side
    
  } else if (ll == 0 && (cc == 1 && rr == 0)) {
    car_forward() // for car center forward function cc is set to 1 for line sensor moving for center
    
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
