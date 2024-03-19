# Line-Tracking Smart Car with MicroBit and Keyestudio

**Description:**

This repository provides guidance on creating a line-tracking smart car by integrating a line tracking sensor with a motor using the BBC micro:bit and Keyestudio components. The project aims to demonstrate the functionality of line tracking in robotics by analyzing signals from the sensor and controlling the movement of the smart car accordingly.

**Working Principle:**

The smart car's movements are determined by the values received from the 3-channel line tracking sensor. The following table illustrates the sensor values and corresponding actions for the micro:bit 4WD Mecanum Robot Car V2.0:

| Left | Middle | Right | Binary Values | Decimal Value | Action           |
|------|--------|-------|---------------|---------------|------------------|
| LOW  | LOW    | LOW   | 000           | 0             | Stop             |
| LOW  | LOW    | HIGH  | 001           | 1             | Turn Right       |
| LOW  | HIGH   | LOW   | 010           | 2             | Go Forward       |
| LOW  | HIGH   | HIGH  | 011           | 3             | Turn Right       |
| HIGH | LOW    | LOW   | 100           | 4             | Turn Left        |
| HIGH | LOW    | HIGH  | 101           | 5             | Go Forward       |
| HIGH | HIGH   | LOW   | 110           | 6             | Turn Left        |
| HIGH | HIGH   | HIGH  | 111           | 7             | Stop             |

**Preparation:**

1. Insert the micro:bit board into the slot of the Keyestudio 4WD Mecanum Robot Car V2.0.
2. Place batteries into the battery holder.
3. Dial the power switch to the ON position.
4. Connect the micro:bit to your computer via a USB cable.
5. Open the Web version of Makecode.
6. Import the Hex profile or add blocks step by step, including the MecanumRobot extension library.
7. Ensure the environment is free from infrared interference, such as strong sunlight, to avoid affecting the accuracy of the 3-way tracking sensor.

**Note:** It's crucial to avoid environments with strong sunlight as sunlight contains infrared light that can interfere with the 3-way tracking sensor's functionality.

For further instructions on importing the Hex profile or adding the MecanumRobot extension library, please refer to the provided documentation or resources.

**Warning:** The 3-way tracking sensor should be utilized in environments without infrared interference, such as sunlight, to ensure proper functionality.

Let's explore the exciting world of line tracking and robotics with MicroBit and Keyestudio! Happy building!
