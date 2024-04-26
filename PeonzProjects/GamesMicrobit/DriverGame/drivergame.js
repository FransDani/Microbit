input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (position == 0) {
        position = 1
    }
    
    led.unplot(position, 4)
    position += -1
    led.plot(position, 4)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (position == 4) {
        position = 3
    }
    
    led.unplot(position, 4)
    position += 1
    led.plot(position, 4)
})
let lineLights : number[] = []
let emptySlot = 0
let position = 0
position = 0
let linePosition = 5
basic.forever(function on_forever() {
    
    if (linePosition == 5) {
        if (emptySlot != position) {
            basic.showIcon(IconNames.No)
            basic.pause(2000)
        }
        
        linePosition = 0
        emptySlot = randint(0, 4)
        lineLights = []
        for (let i = 0; i < 5; i++) {
            if (emptySlot != i) {
                lineLights.push(i)
            }
            
        }
    }
    
    for (let j = 0; j < 4; j++) {
        led.plot(lineLights[j], linePosition)
    }
    linePosition += 1
    led.plot(position, 4)
    basic.pause(1000)
    basic.clearScreen()
})
