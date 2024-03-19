/**
 * rr variable for right linetracking movement
 */
/**
 * ll variable for left linetracking movement
 */
// Creating a function first for the Robot movements before you use it to line tracking.
function car_back () {
    // car back function
    // left front motor or wheel reverses
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 25)
    // left back motor or wheel reverses
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 25)
    // right front motor or wheel reverses
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 25)
    // right back motor or wheel reverses
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 25)
}
// Using the coasting turn/calibration will help the robot navigate in what movements to use
function car_left () {
    // left front motor or wheel reverses with 25 speed
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 25)
    // left back motor or wheel reverses with 25 speed
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 25)
    // right front motor or wheel move forward with 50 speed
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 50)
    // right back motor or wheel move forward with 50 speed
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 50)
}
function car_forward () {
    // left front motor or wheel move forward
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 25)
    // left back motor or wheel move forward
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 25)
    // right front motor or wheel move forward
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 25)
    // left back motor or wheel move forward
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 25)
}
// Using the coasting turn/calibration will help the robot navigate in what movements to use
function car_right () {
    // left front motor or wheel move forward with 50 speed
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 50)
    // left back motor or wheel move forward with 50 speed
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 50)
    // right front motor or wheel move backward with 25 speed
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 25)
    // right back motor or wheel move backward with 25 speed
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 25)
}
let cc = 0
let rr = 0
let ll = 0
// Create a variable for the directions
led.enable(false)
// cc variable for center linetracking movement
// Create forever function for the movement of the robot
basic.forever(function () {
    // the set block in block based code with LineTracking function for the left movement
    ll = mecanumRobotV2.LineTracking(LT.Left)
    // the set block in block based code with LineTracking function for the right movement
    rr = mecanumRobotV2.LineTracking(LT.Right)
    // the set block in block based code with Linetracking function for the center movement
    cc = mecanumRobotV2.LineTracking(LT.Center)
    // Using if-else condition for the robot
    // Must remember
    // 1 value detect white color
    // 0 value detects black color
    if (ll == 0 && (cc == 0 && rr == 0)) {
        // using 0 and state function for no movement
        mecanumRobotV2.state()
    } else if (ll == 0 && (cc == 0 && rr == 1)) {
        // for car right function rr is set to 1 for line sensor in moving for right side
        car_right()
    } else if (ll == 0 && (cc == 1 && rr == 0)) {
        // for car center forward function cc is set to 1 for line sensor moving for center
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
