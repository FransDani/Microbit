def on_button_pressed_a():
    global position
    if position == 0:
        position = 1
    led.unplot(position, 4)
    position += -1
    led.plot(position, 4)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global position
    if position == 4:
        position = 3
    led.unplot(position, 4)
    position += 1
    led.plot(position, 4)
input.on_button_pressed(Button.B, on_button_pressed_b)

lineLights: List[number] = []
emptySlot = 0
position = 0
position = 0
linePosition = 5

def on_forever():
    global linePosition, emptySlot, lineLights
    if linePosition == 5:
        if emptySlot != position:
            basic.show_icon(IconNames.NO)
            basic.pause(2000)
        linePosition = 0
        emptySlot = randint(0, 4)
        lineLights = []
        for i in range(5):
            if emptySlot != i:
                lineLights.append(i)
    for j in range(4):
        led.plot(lineLights[j], linePosition)
    linePosition += 1
    led.plot(position, 4)
    basic.pause(1000)
    basic.clear_screen()
basic.forever(on_forever)
