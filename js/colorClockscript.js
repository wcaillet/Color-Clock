// Here is the clock: 

var startClock = function() {
    var today = new Date()
    var h = today.getHours()
    // Converts current hours into hex value, base 16
    var hours = h.toString(16)
    var m = today.getMinutes()
    // Converts current minutes into hex value, base 16
    var minutes = m.toString(16)
    var s = today.getSeconds()
    // Converts current seconds into hex value, base 16
    var seconds = s.toString(16)
    // Runs helper function checkTime to add 0 to hours if needed
    m = checkTime(m)
    s = checkTime(s)
    // Creates time string from current hours, minutes and seconds
    document.querySelector("#clock").innerHTML = h + ":" + m + ":" + s
    setTimeout(startClock, 500)

    //Select overlay
    var overlayEl = document.querySelector("#overlay")
    // Stores current converted values as hexcode string
    var backgroundHex = '#' + hours + minutes + seconds
    // Inserts the hex value as overlay's background color
	overlayEl.style.background = backgroundHex
	// inserts the hex string into the span
	var hexContainer = document.querySelector("#hex-value")
	hexContainer.innerHTML = backgroundHex
}

// add zero in front of numbers < 10
var checkTime = function(i) {
    if (i < 10) {
    i = "0" + i
    }  
    return i
}

// line grow
var line = document.querySelector("#line")
    width = 0


// increase width of line 10px
var timer = setInterval(function() {
  line.style.width = ( width += 10 ) + "px"
  // at 350px, line shrinks back to 0
  if ( width === 350 ) {
    width = 0
    // clearInterval( timer )
  }
}, 350)


  