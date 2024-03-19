distance = 0
distance_l = 0
distance_r = 0
def car_back():
    # car back function
    # left front motor or wheel reverses
    mecanumRobotV2.motor(LR.UPPER_LEFT, MD.BACK, 25)
    # left back motor or wheel reverses
    mecanumRobotV2.motor(LR.LOWER_LEFT, MD.BACK, 25)
    # right front motor or wheel reverses
    mecanumRobotV2.motor(LR.UPPER_RIGHT, MD.BACK, 25)
    # right back motor or wheel reverses
    mecanumRobotV2.motor(LR.LOWER_RIGHT, MD.BACK, 25)
# Using the coasting turn/calibration will help the robot navigate in what movements to use
def car_left():
    # left front motor or wheel reverses with 25 speed
    mecanumRobotV2.motor(LR.UPPER_LEFT, MD.BACK, 25)
    # left back motor or wheel reverses with 25 speed
    mecanumRobotV2.motor(LR.LOWER_LEFT, MD.BACK, 25)
    # right front motor or wheel move forward with 25 speed
    mecanumRobotV2.motor(LR.UPPER_RIGHT, MD.FORWARD, 25)
    # right back motor or wheel move forward with 25 speed
    mecanumRobotV2.motor(LR.LOWER_RIGHT, MD.FORWARD, 25)
def car_forward():
    # left front motor or wheel move forward
    mecanumRobotV2.motor(LR.UPPER_LEFT, MD.FORWARD, 25)
    # left back motor or wheel move forward
    mecanumRobotV2.motor(LR.LOWER_LEFT, MD.FORWARD, 25)
    # right front motor or wheel move forward
    mecanumRobotV2.motor(LR.UPPER_RIGHT, MD.FORWARD, 25)
    # left back motor or wheel move forward
    mecanumRobotV2.motor(LR.LOWER_RIGHT, MD.FORWARD, 25)
# Using the coasting turn/calibration will help the robot navigate in what movements to use
def car_right():
    # left front motor or wheel move forward with 25 speed
    mecanumRobotV2.motor(LR.UPPER_LEFT, MD.FORWARD, 25)
    # left back motor or wheel move forward with 25 speed
    mecanumRobotV2.motor(LR.LOWER_LEFT, MD.FORWARD, 25)
    # right front motor or wheel move backward with 25 speed
    mecanumRobotV2.motor(LR.UPPER_RIGHT, MD.BACK, 25)
    # right back motor or wheel move backward with 25 speed
    mecanumRobotV2.motor(LR.LOWER_RIGHT, MD.BACK, 25)

def on_forever():
    global distance, distance_l, distance_r
    distance = mecanumRobotV2.ultra()
    if distance < 20:
        car_back()
        mecanumRobotV2.state()
        basic.pause(500)
        mecanumRobotV2.set_servo(180)
        basic.pause(500)
        distance_l = mecanumRobotV2.ultra()
        basic.pause(500)
        mecanumRobotV2.set_servo(0)
        basic.pause(500)
        distance_r = mecanumRobotV2.ultra()
        basic.pause(500)
        if distance_l > distance_r:
            car_left()
            mecanumRobotV2.set_servo(90)
            basic.pause(300)
        else:
            car_right()
            mecanumRobotV2.set_servo(90)
            basic.pause(300)
    else:
        car_forward()
basic.forever(on_forever)
