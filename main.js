const doc = document.querySelector('body')
let mainElement = document.createElement('main')
let buttonElement = document.createElement('button')
let imgElement = document.createElement('img')
let anchorElement = document.createElement('a')
let newElement = document.createElement('input')
let newButton = document.createElement('click')


document.body.append(mainElement)
document.body.appendChild(buttonElement)
let text = document.createTextNode('button')
buttonElement.appendChild(text)
let doc1 = document.getElementById('button')


mainElement.appendChild(imgElement)
mainElement.appendChild(anchorElement)
imgElement.src = 'https://www.carsonvet.com/sites/default/files/styles/large/adaptive-image/public/rottweiler-dog-breed-info_0.jpg?itok=0nVCm2zH'

// let anchor = document.createElement('a')
anchorElement.href = 'https://google.com'
let link = document.createTextNode("Go To Google")
anchorElement.appendChild(link)
anchorElement.title = "Go To Google"

mainElement.appendChild(newElement)

buttonElement.addEventListener('click', function() {
    let userInput = newElement.value
    const clearCss = document.querySelector(userInput)
    clearCss.remove()

})




