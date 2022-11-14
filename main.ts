function Alarm () {
    if (alarm == 1) {
        radio.sendString("Robber")
    }
}
input.onGesture(Gesture.ThreeG, function () {
    alarm += 1
    counter += 1
})
let alarm = 0
alarm = 0
let counter = 0
radio.setGroup(42)
basic.forever(function () {
	
})
