// const { json } = require("express");

// const { response } = require("express");

const homeLink = document.getElementById('headText');
const peopleButt = document.getElementById("people");
const businessButt = document.getElementById('business');
const pageContainer = document.getElementById("container");


function homepage() {
    var homePage = document.createElement('div');
    homePage.setAttribute('name', 'homepage');
    var greetingSpan = document.createElement('span');
    greetingSpan.textContent = 'Anyone at the click of your mouse.';
    greetingSpan.setAttribute('id', 'greetings');
    homePage.appendChild(greetingSpan);
    pageContainer.appendChild(homePage);


}
homepage();
function emptyResults() {
    while (pageContainer.firstChild) {
        pageContainer.removeChild(pageContainer.firstChild);
    }
}

function peoplePage() {
    // pageContainer.removeChild(); 
    function inputSection(){
        var inputTab = document.createElement('div')
        inputTab.setAttribute('id', 'inputTab')
        var pSearchCon = document.createElement('div');
        pSearchCon.setAttribute('id', 'pSearchCon');
        var nameInput = document.createElement('input')
        nameInput.setAttribute('type', 'text')
        nameInput.setAttribute('id', 'nameInput');
        var submitButt = document.createElement('button')
        submitButt.setAttribute('id', 'submitButt');
        var listCon = document.createElement('div')
        listCon.setAttribute('id', 'listCon')
        //append all
        pSearchCon.appendChild(nameInput);
        pSearchCon.appendChild(submitButt);
        inputTab.appendChild(pSearchCon);
        pageContainer.appendChild(inputTab);
        pageContainer.appendChild(listCon);
    }
    
    function peopleEventFetch() {
        
        fetch('http://localhost:8000/phone_book/owners/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            for (i = 0; i < data.length; i++) {
                var peopleSpan = document.createElement("li")
                peopleSpan.innerHTML = `Owner ID: ${data[i].id} \n Owner name: ${data[i].name} Phone number: ${data[i].phone_number} \n Location: ${data[i].address} \n Business name: ${data[i].business_name} \n`;
                console.log(peopleSpan);
                listCon.appendChild(peopleSpan);
            }
        })
    }

    function peopleEvent() {
        peopleButt.addEventListener('click', () => {
            console.log('click')
            emptyResults();
            inputSection();
            peopleEventFetch();
            submitEvent()
        })
    }
    peopleEvent();

    function submitEvent(){
        var submitButt = document.getElementById('submitButt')
        var nameInput = document.getElementById('nameInput');
        submitButt.addEventListener('click',()=> {
            console.log('click');
            console.log(nameInput.value)
            while (listCon.firstChild) {
                listCon.removeChild(listCon.firstChild);
              }
            fetch(`http://localhost:8000/phone_book/owners/${nameInput.value}`)
            .then((response)=> response.json())
            .then(data => {
                console.log(data)
                for (i = 0; i < data.length; i++) {
                    var peopleSpan = document.createElement("li")
                    peopleSpan.setAttribute('id', data[i].id)
                    peopleSpan.innerHTML = `Owner ID: ${data[i].id} \n Owner name: ${data[i].name} Phone number: ${data[i].phone_number} \n Location: ${data[i].address} \n Business name: ${data[i].business_name} \n`;
                    console.log(peopleSpan);
                    listCon.appendChild(peopleSpan);
                }
            })
            deleteEvent()
        } )
    }

    function deleteEvent(){
        var container = document.getElementById('container');
        var listCon = document.getElementById('listCon'); 
        var delButt = document.createElement('button'); 
        var listNum = listCon.innerHTML
        delButt.setAttribute('id', 'delButt');
        container.appendChild(delButt);
        delButt.addEventListener('click', ()=>{
            console.log('click!')
            let lastLI = listCon.lastChild
            let lastID = lastLI.getAttribute('id');
            fetch(`http://localhost:8000/phone_book/owners/delete/${lastID}`)
            .then(listCon.removeChild(listCon.lastChild))
            })
    }

    function insertEvent(){
        let insertTab = document.createElement('div');
            insertTab.setAttribute('id', 'insertTab');
            insertTab.setAttribute('type', 'text');
        let nameInput = document.createElement('input');
            nameInput.setAttribute('id', 'nameInput');
            nameInput.setAttribute('type', 'text');
        let phoneInput = document.createElement('input');
            phoneInput = document.setAttribute('id','phoneInput')
        let addressInput = document.createElement('input');
            addressInput.setAttribute('id', 'addressInput');
        let businessInput = document.createElement('input');
            businessInput.setAttribute('id','businessInput');
    }
}

peoplePage();



function businessPage(){

    
    // business side of things 
    function inputBar() {
        // pageContainer.removeChild(); 
        var bSearchCon = document.createElement('div');
        bSearchCon.setAttribute('id', 'bSearchCon');
        var businessInput = document.createElement('input')
        businessInput.setAttribute('type', 'text')
        businessInput.setAttribute('id', 'businessInput');
        var submitButtBusiness = document.createElement('button')
        submitButtBusiness.setAttribute('id', 'submutButtBusiness');
        bSearchCon.appendChild(businessInput);
        bSearchCon.appendChild(submitButtBusiness);
        pageContainer.appendChild(bSearchCon);
        
    }
    function businessEventFetch() {
        
        fetch('http://localhost:8000/phone_book/business/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        for (i = 0; i < data.length; i++) {
            var businessSpan = document.createElement("li")
            businessSpan.innerHTML = `Business ID: ${data[i].id} \n Business name: ${data[i].business_name} Phone number: ${data[i].phone_number} \n Location: ${data[i].address} \n Owner's name: ${data[i].owner_name} \n`;
            console.log(businessSpan);
            pageContainer.appendChild(businessSpan);
        }
    })
}


function businessEvent() {    
    businessButt.addEventListener('click', () => {
        console.log('click')
        emptyResults();
        inputBar();
        businessEventFetch();
    })
}
businessEvent();
} 
businessPage()