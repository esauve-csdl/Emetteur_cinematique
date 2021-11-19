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
let somme = 0
let moyenne = 0
basic.forever(function () {
    let données: number[] = []
    for (let index = 0; index <= 199; index++) {
        données[index] = input.acceleration(Dimension.Y) * 0.0098
    }
    for (let i = 0; i <= 199; i++) {
        somme = somme + données[i]
    }
    moyenne = somme / 200
    somme = 0
    Temps = control.eventTimestamp() / 1000000
    acc = moyenne
    radio.sendValue("acc", acc)
    radio.sendValue("T", Temps)
})
