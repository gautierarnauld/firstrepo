var amazon_db_telephones = [
    {
        nom: 'DOOGEE S97 PRO',
        prix: 186,
        description: 'android13',
        img: './tel1.webp'
    },
    {
        nom: 'SAMSUNG GALAXY A12',
        prix: 336,
        description: 'android14',
        img: './tel2.webp'
    },
    {
        nom: 'XPERIA 1 III',
        prix: 226,
        description: 'android15',
        img: './tel3.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 186,
        description: 'android13',
        img: './tel1.webp'
    },
    {
        nom: 'SAMSUNG GALAXY A12',
        prix: 336,
        description: 'android14',
        img: './tel2.webp'
    },
    {
        nom: 'XPERIA 1 III',
        prix: 226,
        description: 'android15',
        img: './tel3.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 186,
        description: 'android13',
        img: './tel1.webp'
    },
    {
        nom: 'SAMSUNG GALAXY A12',
        prix: 336,
        description: 'android14',
        img: './tel2.webp'
    },
    {
        nom: 'XPERIA 1 III',
        prix: 226,
        description: 'android15',
        img: './tel3.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 186,
        description: 'android13',
        img: './tel1.webp'
    },
    {
        nom: 'SAMSUNG GALAXY A12',
        prix: 336,
        description: 'android14',
        img: './tel2.webp'
    },
    {
        nom: 'XPERIA 1 III',
        prix: 226,
        description: 'android15',
        img: './tel3.webp'
    },
    {
        nom: 'DOOGEE S97 PRO',
        prix: 186,
        description: 'android13',
        img: './tel1.webp'
    },
    {
        nom: 'SAMSUNG GALAXY A12',
        prix: 336,
        description: 'android14',
        img: './tel2.webp'
    },
    {
        nom: 'XPERIA 1 III',
        prix: 226,
        description: 'android15',
        img: './tel3.webp'
    },
]

// console.log(amazon_db_telephones)


function creation(tel, ulPhoneList){
    var liPhoneCard = document.createElement('li')
    // liPhoneCard.style = 'display: inline-block;'

    var divPhoneCard = document.createElement('div')
    divPhoneCard.classList.add("uk-card")
    divPhoneCard.classList.add("uk-card-default")
    divPhoneCard.classList.add("uk-card-body")
    divPhoneCard.classList.add("uk-text-center")
    divPhoneCard.classList.add("uk-sortable-handle")
    // divPhoneCard.style = 'display: inline-block;'
    
    var imgPhoneCard = document.createElement('img')
    imgPhoneCard.src = tel.img
    
    var nomPhoneCard = document.createElement('p')
    nomPhoneCard.innerText = tel.nom

    var prixPhoneCard = document.createElement('p')
    prixPhoneCard.innerText = tel.prix

    var descriptionPhoneCard = document.createElement('p')
    descriptionPhoneCard.innerText = tel.description

    divPhoneCard.appendChild(imgPhoneCard)
    divPhoneCard.appendChild(nomPhoneCard)
    divPhoneCard.appendChild(prixPhoneCard)
    divPhoneCard.appendChild(descriptionPhoneCard)
    
    liPhoneCard.appendChild(divPhoneCard)

    ulPhoneList.appendChild(liPhoneCard) 
}
    
    
function build(){
    var ulPhoneList = document.createElement('ul')
    ulPhoneList.classList.add("uk-grid-small")
    ulPhoneList.classList.add("uk-child-width-1-2")
    ulPhoneList.classList.add("uk-child-width-1-4@s")
    ulPhoneList.id = "commeTuVeux"
    // ulPhoneList.style = 'display: inline-block;'
    ulPhoneList.setAttribute('uk-sortable', 'handle: .uk-sortable-handle')
    ulPhoneList.setAttribute('uk-grid','')
    

    amazon_db_telephones.forEach(tel => {
        creation(tel, ulPhoneList)
    })
    document.body.appendChild(ulPhoneList)
}

build()
function addPhone() {
    var getModel = document.getElementById('inputModel').value
    var getPrice = document.getElementById('inputPrice').value
    var getDescription = document.getElementById('inputDescription').value
    var getImg = document.getElementById('inputImg').value
    var bt = document.getElementById('addPhoneButton')
    var obj = {
        nom: getModel,
        prix: getPrice,
        description: getDescription,
        img: getImg
    }
    amazon_db_telephones.push(obj)
    var ul = document.getElementById('commeTuVeux')
    creation(obj, ul)
    console.log(amazon_db_telephones.length)
    // 'nom: ${getModel.value}', 'prix:${getPrice.value}', 'description:${getDescription.value}', 'img:${getImg.value}'
    // bt.setAttribute("style", `grid-row: ${row};`)
    }

