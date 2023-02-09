def on_button_pressed_a():
    global luce, start
    luce = not (luce)
    if luce:
        start = input.running_time()
input.on_button_pressed(Button.A, on_button_pressed_a)

def dimmer():
    for indice in range(256):
        pass
start = 0
luce = False
luce = False

def on_forever():
    global luce
    if luce:
        led.set_brightness(255)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        if input.running_time() > start + 3000:
            luce = False
    else:
        basic.show_leds("""
            . . . . .
                        . . . # .
                        # . # . .
                        . # . . .
                        . . . . .
        """)
basic.forever(on_forever)
