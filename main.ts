input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    go = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    Temps = 0
    go = 0
})
let Temps = 0
let go = 0
basic.showIcon(IconNames.No)
go = 0
radio.setGroup(1)
Temps = 0
let acc = 0
basic.forever(function () {
    if (go == 1) {
        basic.pause(10)
        Temps = Temps + 10
    }
})
basic.forever(function () {
    acc = input.acceleration(Dimension.Z)
    radio.sendValue("acc", acc)
    radio.sendValue("T", Temps)
})
