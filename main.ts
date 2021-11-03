basic.showLeds(`
    . # # # .
    . # . . .
    . # # . .
    . # . . .
    . # # # .
    `)
let go = 0
radio.setGroup(1)
let Temps = 0
let acc = 0
basic.forever(function () {
    acc = input.acceleration(Dimension.Z) * 0.0098
    Temps = input.runningTime() / 1000
    radio.sendValue("acc", acc)
    radio.sendValue("T", Temps)
})
