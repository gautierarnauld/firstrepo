function axiosGetDrivers(){
    axios.get('http://localhost:1337/drivers')
        .then(response => {
            // call HTTP Succes
            // Acceder a la donnee retour dans response.data.data
            window.localStorage.setItem(`drivers`, JSON.stringify(response.data))
            // console.log(drivers)
        })
        .catch(error => {
        // if fail
            console.error(error)
        });
}
axiosGetDrivers()
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
    if (driver.car !== null){
        addCarCard(driver.car, liDriverCard)
    }
    addChildrensToElement(ulDriverList, [liDriverCard])
}
function addCarCard(car, liDriverCard){
    var divCarCard = createDomElement(
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
    var imgCarCard = createDriverImg(car.Img)
    var nameCarCard = createDriverName(car.Model)
    addChildrensToElement(
        divCarCard,
        [
            imgCarCard,
            nameCarCard,
        ]
    )
    addChildrensToElement(liDriverCard, [divCarCard])
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
    let drivers = JSON.parse(window.localStorage.getItem('drivers'))
    drivers.forEach(driver => {
        addDriverCard(driver, ulDriverList)
    })
    document.body.appendChild(ulDriverList)
}
build()
function axiosPostDrivers(name, img){
    axios.post('http://localhost:1337/drivers', {name: name, img: img})
        .then(response => {
            console.log(response)
            // call HTTP Succes
            // Acceder a la donnee retour dans response.data.data
            // window.localStorage.setItem(`drivers`, JSON.stringify(response.data))
            // console.log(drivers)
        })
        .catch(error => {
        // if fail
            console.error(error)
        });
}
function addDriver() {
    var getName = document.getElementById('inputName').value
    var getImg = document.getElementById('inputImg').value

    var obj = {
        name: getName,
        img: getImg
    }
    let drivers = JSON.parse(window.localStorage.getItem('drivers'))
    drivers.push(obj)
    axiosPostDrivers(obj.name, obj.img)
    window.localStorage.setItem('drivers', JSON.stringify(drivers))
    console.log(obj)
    var objFromList = drivers.slice(-1)[0]
    var ul = document.getElementById('ulDrivers')
    console.log(objFromList)
    addDriverCard(objFromList, ul)
}