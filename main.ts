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
    for (let index = 0; index <= 99; index++) {
        données[index] = input.acceleration(Dimension.Y) * 0.0098
    }
    for (let i = 0; i <= 99; i++) {
        somme = somme + données[i]
    }
    moyenne = somme / 100
    somme = 0
    Temps = input.runningTime() / 1000
    acc = moyenne
    radio.sendValue("acc", acc)
    radio.sendValue("T", Temps)
})
