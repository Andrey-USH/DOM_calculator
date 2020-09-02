class Tag {

    createTag(tag, style) {
        const cont = document.createElement(tag)
        cont.setAttribute("style", style)
        return cont
    }
}

class Button extends Tag {

    getButton(tag, el) {
        const button = super.createTag(tag, el)
        button.setAttribute("style", "width: 86px; height: 86px; font-size: 25px; margin: 3px")
        button.innerText = el
        return button
    }
}

const boardArea = new Tag()

const workArea = boardArea.createTag("div", "display: flex; justify-content: center")

const calculator = boardArea.createTag("div", "width: 368px; height: 624px; border: 1px solid black")

const boardForInput = boardArea.createTag("div", "height: 100px; padding-top: 37px; padding-bottom: 27px; padding-right: 29px; padding-left: 29px; text-align: right")
const form = boardArea.createTag("form")
const input = boardArea.createTag("input", "width: 100%; margin-top: 18px; border: none; outline: none; text-align: right; font-size: 30px")

form.appendChild(input)
boardForInput.appendChild(form)

const boardFofButton = boardArea.createTag("div", "height: 500px; display: table")

const btn = new Button()

const buttonDivisionOff = btn.getButton("button", "%")
const buttonDivision = btn.getButton("button", '/')
const buttonMultiplication = btn.getButton("button", '*')
const buttonClean = btn.getButton("button", 'C')
const buttonOne = btn.getButton("button", '1')
const buttonTwo = btn.getButton("button", '2')
const buttonThree = btn.getButton("button", '3')
const buttonCleanEl = btn.getButton("button", '<')
const buttonFour = btn.getButton("button", '4')
const buttonFive = btn.getButton("button", '5')
const buttonSix = btn.getButton("button", '6')
const buttonSubtraction = btn.getButton("button", '-')
const buttonSeven = btn.getButton("button", '7')
const buttonEight = btn.getButton("button", '8')
const buttonNine = btn.getButton("button", '9')
const buttonAddition = btn.getButton("button", '+')
const buttonFloat = btn.getButton("button", '.')
const buttonZero = btn.getButton("button", '0')
const buttonResult = btn.getButton("button", '=')

boardFofButton.append(buttonDivisionOff, buttonDivision, buttonMultiplication, buttonClean, buttonOne, buttonTwo, buttonThree, buttonCleanEl, buttonFour, buttonFive,
    buttonSix, buttonSubtraction, buttonSeven, buttonEight, buttonNine, buttonAddition, buttonFloat, buttonZero, buttonResult)

const memory = boardArea.createTag("div", "width: 368px; height: 624px; border: 1px solid black; margin-left: 10px")

function evil(fn) {
    return new Function('return ' + fn)();
}


window.addEventListener('load', function OnWindowLoaded() {

    function evil(fn) {
        return new Function('return ' + fn)();
    }
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.innerText === 'C') {
                input.value = '';
            } else if (e.target.innerText === '<') {
                input.value = input.value.substring(0, input.value.length - 1)
            } else if (e.target.innerText === '=') {

                if(!!evil(input.value)){
                    input.value = "0"
                }
                const mem = `${input.value} = ${evil(input.value)}`
                
                input.value = evil(input.value)
                                               
                const resultDiv = boardArea.createTag('div')
                const li = boardArea.createTag("li", "margin-top: 5px; margin-left: 10px; list-style-type: none")
                li.innerText = mem

                resultDiv.appendChild(li)
                memory.appendChild(resultDiv)
            } else {
                input.value += e.target.innerText
            }
        });
    });

})


calculator.appendChild(boardForInput)
calculator.appendChild(boardFofButton)

workArea.append(calculator, memory)
document.body.appendChild(workArea)