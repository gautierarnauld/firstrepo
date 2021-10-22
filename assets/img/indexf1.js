var drivers = [
    {
        name: 'Fernando Alonso',
        img: './FA.jpg'
    }
]

function createDomElement(type, classes, id, attributes){
    var domElement = document.createElement(type)
    if(classes) {
        classes.forEach(domElementClass => {
            domElement.classList.add(domElementClass)
        });
    }
    domElement.id = id
    if(attributes !== null) {
        for (const [key, value] of Object.entries(attributes)) {
            domElement.setAttribute(key, value)
    }
    return domElement
    }
}
function createDriverImg(link){
    let img = document.createElement('img')
    img.src = link
    return img
}
function createDriverName(text) {
    let p = document.createElement('p')
    p.innerText = text
    return p
}
function addChildrensToElement(element, childrens)  {
    childrens.forEach(child => {
        element.appendChild(child)
    })
}
function addDriverCard(driver, ulDriverList){
    var liDriverCard = document.createElement('li')

    var divDriverCard = createDomElement(
        'div',
        [
            "uk-card",
            "uk-card-default",
            "uk-card-body",
            "uk-text-center",
            "uk-sortable-handle",
        ],
        '',
        {}
    )
    var imgDriverCard = createDriverImg(driver.img)
    var nameDriverCard = createDriverName(driver.name)
    addChildrensToElement(
        divDriverCard,
        [
            imgDriverCard,
            nameDriverCard,
        ]
    )
    addChildrensToElement(liDriverCard, [divDriverCard])
    addChildrensToElement(ulDriverList, [liDriverCard])
}
function build(){

    var ulDriverList = createDomElement(
        'ul',
        ["uk-grid-small", "uk-child-width-1-2", "uk-child-width-1-4@s"],
        'ulDrivers',
        {
            'uk-sortable': 'handle: .uk-sortable-handle',
            'uk-grid' : ''
        }
    )
    drivers.forEach(driver => {
        addDriverCard(driver, ulDriverList)
    })
    document.body.appendChild(ulDriverList)
}
build()
function addDriver() {
    var getName = document.getElementById('inputName').value
    var getImg = document.getElementById('inputImg').value

    var obj = {
        name: getName,
        img: getImg
    }
    drivers.push(obj)
    console.log(obj)
    var objFromList = drivers.slice(-1)[0]
    var ul = document.getElementById('ulDrivers')
    console.log(objFromList)
    addDriverCard(objFromList, ul)
}