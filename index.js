const homeLink = document.getElementById('headText'); 
const peopleButt = document.getElementById('people');
const businessButt = document.getElementById('business');
const pageContainer = document.getElementById("container"); 


function homepage(){
    var homePage = document.createElement('div');
    homePage.setAttribute('name', 'homepage');
    var greetingSpan = document.createElement('span');
    greetingSpan.textContent = 'Anyone at the click of your mouse.';
    greetingSpan.setAttribute('id', 'greetings');
    homePage.appendChild(greetingSpan);
    pageContainer.appendChild(homePage);


}
homepage(); 

function peoplePage(){
    // pageContainer.removeChild(); 
    var pSearchCon = document.createElement('div');
    pSearchCon.setAttribute('id', 'pSearchCon'); 
    var nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('id', 'nameInput');
    var submitButtPeople = document.createElement('button')
    submitButtPeople.setAttribute('id', 'submitButtPeople');
    pSearchCon.appendChild(nameInput);
    pSearchCon.appendChild(submitButtPeople);
    pageContainer.appendChild(pSearchCon);
    
}
peoplePage()
function businessPage(){
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
businessPage()