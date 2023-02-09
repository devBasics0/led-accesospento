input.onButtonPressed(Button.A, function () {
    led.setBrightness(255)
    luce = !(luce)
    if (luce) {
        start = input.runningTime()
    }
})
function dimmer () {
    for (let indice = 0; indice <= 255; indice++) {
        livello = 255 - indice
        led.setBrightness(livello)
        basic.pause(10)
        if (luce == false) {
            break;
        }
    }
    luce = false
}
let livello = 0
let start = 0
let luce = false
luce = false
basic.forever(function () {
    if (luce) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        if (input.runningTime() > start + 3000) {
            dimmer()
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
