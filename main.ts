radio.onReceivedValue(function (name, value) {
    if (name.compare("mgy") == 0) {
        backward = value
    }
    if (name.compare("mgx") == 0) {
        right = value
    }
    right_motor = -1 * (backward - right)
    left_motor = -1 * (backward - right)
})
function Mover (Mot1: number, Mot2: number, Mot3: number, Mot4: number) {
    pins.digitalWritePin(DigitalPin.P1, Mot1)
    pins.digitalWritePin(DigitalPin.P2, Mot2)
    pins.digitalWritePin(DigitalPin.P8, Mot3)
    pins.digitalWritePin(DigitalPin.P12, Mot4)
}
let left_motor = 0
let right_motor = 0
let right = 0
let backward = 0
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.pause(1000)
Mover(0, 0, 0, 0)
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
    if (backward < -400) {
        Mover(1, 0, 1, 0)
        basic.showArrow(ArrowNames.North)
    } else if (backward > 400) {
        Mover(0, 1, 0, 1)
        basic.showArrow(ArrowNames.South)
    } else {
        Mover(0, 0, 0, 0)
    }
    if (right < -400) {
        Mover(1, 0, 0, 0)
        basic.showArrow(ArrowNames.West)
    } else if (right > 400) {
        Mover(0, 0, 1, 0)
        basic.showArrow(ArrowNames.East)
    } else {
        Mover(0, 0, 0, 0)
    }
})
