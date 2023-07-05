const dayInput = document.querySelector(".dayinput")
const monthInput = document.querySelector(".monthinput")
const yearInput = document.querySelector(".yearinput")
const yearOutput = document.querySelector(".yearoutput")
const monthOutput = document.querySelector(".monthoutput")
const dayOutput = document.querySelector(".dayoutput")
const dayError = document.querySelector(".dayerror")
const monthError = document.querySelector(".montherror")
const yearError = document.querySelector(".yearerror")
const dayTitle = document.querySelector(".daytitle")
const monthTitle = document.querySelector(".monthtitle")
const yearTitle = document.querySelector(".yeartitle")

document.addEventListener('DOMContentLoaded', function() {
    dayInput.onkeyup = () => {
        if (dayInput.value.length > 0) {
            dayOutput.innerHTML = `<p class="yearoutput"><span>${dayInput.value}</span> days</p>`
        } else {
            dayInput.style.border = "1px solid red"
            dayTitle.style.color = "red"
            dayError.innerHTML = `<p style="color: red;font-style: italic;text-transform: initial;">This field is required</p>`
            dayOutput.innerHTML = "<span>- -</span> days"

        }

        if (dayInput.value > 31 ) {
            dayError.innerHTML = `<p style="color: red;font-style: italic;text-transform: initial;">Must be a valid day</p>`

        }
        

       
    }

    monthInput.onkeyup = () => {
        if (monthInput.value.length > 0) {
            monthOutput.innerHTML = `<p class="yearoutput"><span>${monthInput.value}</span> months</p>`
        } else {
            monthInput.style.border = "1px solid red"
            monthTitle.style.color = "red"
            monthError.innerHTML = `<p style="color: red;font-style: italic;text-transform: initial;">This field is required</p>`
            monthOutput.innerHTML = "<span>- -</span> months"
        }

        if (monthInput.value > 12 ) {
            monthError.innerHTML = `<p style="color: red;font-style: italic;text-transform: initial;">Must be a valid month</p>`

        }

       
    }

    yearInput.onkeyup = () => {
        if (yearInput.value.length > 0) {
            yearOutput.innerHTML = `<p class="yearoutput"><span>${yearInput.value}</span> years</p>`
        } else {
            yearInput.style.border = "1px solid red"
            yearTitle.style.color = "red"
            yearError.innerHTML = `<p style="color: red;font-style: italic;text-transform: initial;">This field is required</p>`
            yearOutput.innerHTML = "<span>- -</span> years"
        }

        if (yearInput.value > 2023 ) {
            yearError.innerHTML = `<p style="color: red;font-style: italic;text-transform: initial;">Must be in the past</p>`

        }

       
    }


    if (dayInput.value.length > 0 && monthInput.value.length > 0 && yearInput.value.length > 0) {
        if (dayInput.value === 31 && monthInput.value === 4 && yearInput.value < 2024) {
            dayInput.style.border = "1px solid red"
            dayTitle.style.color = "red"
            monthInput.style.border = "1px solid red"
            monthTitle.style.color = "red"
            yearInput.style.border = "1px solid red"
            yearTitle.style.color = "red"
            dayError.innerHTML = `<p style="color: red;font-style: italic;text-transform: initial;">Must be a valid date</p>`


        }
    }

})

