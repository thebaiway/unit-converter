let myUnit = []
let title = document.getElementById("title")
let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let lengthHeader = document.getElementById("length-h6")
let volumeHeader = document.getElementById("volume-h6")
let massHeader = document.getElementById("mass-h6")
let length = document.getElementById("length-p")
let volume = document.getElementById("volume-p")
let mass = document.getElementById("mass-p")


title.textContent = "Metric/Imperial Unit Conversion"
convertBtn.textContent = "Convert"
lengthHeader.textContent = "Length (Meter/Feet)"
volumeHeader.textContent = "Volume (Liters/Gallons)"
massHeader.textContent = "Mass (Kilograms/Pounds)"


convertBtn.addEventListener("click", function () {
    let myUnit = []
    myUnit.push(inputEl.value)

    let feet = myUnit * 3.281
    let meters = myUnit / 3.281
    let gallons = myUnit * 0.264
    let liters = myUnit / 0.264
    let lbs = myUnit * 2.204
    let kilos = myUnit / 2.204


    length.innerHTML = `${myUnit} meters = ${feet.toFixed(3)} feet | ${myUnit} feet = ${meters.toFixed(3)} meters`

    volume.innerHTML = `${myUnit} liters = ${gallons.toFixed(3)} gallons | ${myUnit} gallons = ${liters.toFixed(3)} liters`

    mass.innerHTML = `${myUnit} kilos = ${lbs.toFixed(3)} pounds | ${myUnit} pounds = ${kilos.toFixed(3)} kilos`

})

convertBtn.addEventListener("dblclick", function () {
    inputEl.value = " "
    myUnit.push(inputEl.value)

    length.innerHTML = " "
    volume.innerHTML = " "
    mass.innerHTML = " "
 

})
