function Alarm () {
    if (alarm >= 1) {
        radio.sendString("Robber")
    }
}
input.onGesture(Gesture.ThreeG, function () {
    alarm += 1
    counter += 1
    basic.showNumber(counter)
    Alarm()
})
let counter = 0
let alarm = 0
basic.showIcon(IconNames.Yes)
alarm = 0
counter = 0
radio.setGroup(42)
basic.forever(function () {
	
})
