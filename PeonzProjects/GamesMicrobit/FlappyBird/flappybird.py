def on_button_pressed_a():
    bird.change(LedSpriteProperty.Y, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    game.pause()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    bird.change(LedSpriteProperty.Y, -1)
input.on_button_pressed(Button.B, on_button_pressed_b)

empty_obstacle = 0
ticks = 0
bird: game.LedSprite = None
bird = game.create_sprite(0, 2)
bird.set(LedSpriteProperty.BLINK, 300)
obstacles: List[game.LedSprite] = []
index = 0

def on_forever():
    global empty_obstacle, ticks
    while len(obstacles) > 0 and obstacles[0].get(LedSpriteProperty.X) == 0:
        obstacles.remove_at(0).delete()
    for obstacle in obstacles:
        obstacle.change(LedSpriteProperty.X, -1)
    if ticks % 3 == 0:
        empty_obstacle = randint(0, 4)
        for index2 in range(5):
            if index2 != empty_obstacle:
                obstacles.append(game.create_sprite(4, index2))
    for obstacle2 in obstacles:
        if obstacle2.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) and obstacle2.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y):
            game.game_over()
    ticks += 1
    basic.pause(1000)
basic.forever(on_forever)
