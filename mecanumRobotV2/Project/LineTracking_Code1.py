"""

rr variable for right linetracking movement

"""
"""

ll variable for left linetracking movement

"""
# Creating a function first for the Robot movements before you use it to line tracking.
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
    # right front motor or wheel move forward with 50 speed
    mecanumRobotV2.motor(LR.UPPER_RIGHT, MD.FORWARD, 50)
    # right back motor or wheel move forward with 50 speed
    mecanumRobotV2.motor(LR.LOWER_RIGHT, MD.FORWARD, 50)
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
    # left front motor or wheel move forward with 50 speed
    mecanumRobotV2.motor(LR.UPPER_LEFT, MD.FORWARD, 50)
    # left back motor or wheel move forward with 50 speed
    mecanumRobotV2.motor(LR.LOWER_LEFT, MD.FORWARD, 50)
    # right front motor or wheel move backward with 25 speed
    mecanumRobotV2.motor(LR.UPPER_RIGHT, MD.BACK, 25)
    # right back motor or wheel move backward with 25 speed
    mecanumRobotV2.motor(LR.LOWER_RIGHT, MD.BACK, 25)
cc = 0
rr = 0
ll = 0
# Create a variable for the directions
led.enable(False)
# cc variable for center linetracking movement
# Create forever function for the movement of the robot

def on_forever():
    global ll, rr, cc
    # the set block in block based code with LineTracking function for the left movement
    ll = mecanumRobotV2.line_tracking(LT.LEFT)
    # the set block in block based code with LineTracking function for the right movement
    rr = mecanumRobotV2.line_tracking(LT.RIGHT)
    # the set block in block based code with Linetracking function for the center movement
    cc = mecanumRobotV2.line_tracking(LT.CENTER)
    # Using if-else condition for the robot
    # Must remember
    # 1 value detect white color
    # 0 value detects black color
    if ll == 0 and (cc == 0 and rr == 0):
        # using 0 and state function for no movement
        mecanumRobotV2.state()
    elif ll == 0 and (cc == 0 and rr == 1):
        # for car right function rr is set to 1 for line sensor in moving for right side
        car_right()
    elif ll == 0 and (cc == 1 and rr == 0):
        # for car center forward function cc is set to 1 for line sensor moving for center
        car_forward()
    elif ll == 1 and (cc == 0 and rr == 0):
        car_left()
    elif ll == 1 and (cc == 0 and rr == 1):
        car_forward()
    elif ll == 1 and (cc == 1 and rr == 0):
        car_left()
    elif ll == 1 and (cc == 1 and rr == 1):
        car_forward()
basic.forever(on_forever)
