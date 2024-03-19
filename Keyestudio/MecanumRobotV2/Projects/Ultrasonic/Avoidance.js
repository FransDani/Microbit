let distance = 0
let distance_l = 0
let distance_r = 0
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
    // right front motor or wheel move forward with 25 speed
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 25)
    // right back motor or wheel move forward with 25 speed
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 25)
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
    // left front motor or wheel move forward with 25 speed
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 25)
    // left back motor or wheel move forward with 25 speed
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 25)
    // right front motor or wheel move backward with 25 speed
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 25)
    // right back motor or wheel move backward with 25 speed
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 25)
}
basic.forever(function () {
    distance = mecanumRobotV2.ultra()
    if (distance < 20) {
        car_back()
        mecanumRobotV2.state()
        basic.pause(500)
        mecanumRobotV2.setServo(180)
        basic.pause(500)
        distance_l = mecanumRobotV2.ultra()
        basic.pause(500)
        mecanumRobotV2.setServo(0)
        basic.pause(500)
        distance_r = mecanumRobotV2.ultra()
        basic.pause(500)
        if (distance_l > distance_r) {
            car_left()
            mecanumRobotV2.setServo(90)
            basic.pause(300)
        } else {
            car_right()
            mecanumRobotV2.setServo(90)
            basic.pause(300)
        }
    } else {
        car_forward()
    }
})
