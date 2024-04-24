def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P0, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P0, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

# It must be noted that 0 is off while 1 is on
# Digital Pins are indicated in the documentation of this project.
