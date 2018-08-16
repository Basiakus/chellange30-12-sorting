// Variable declaration

const list = document.querySelector('#list');
const addCompanyName = document.querySelector('#addCompanyName');
const companyName = document.querySelector('#companyName');
const addButton = document.querySelector('#addButton');


let strArr = ['The Plot in You', 
			  'The Devil Wears Prada', 
			  'Pierce the Veil', 'Norma Jean', 
			  'The Bled', 'Say Anything', 
			  'The Midway State', 
			  'We Came as Romans', 
			  'Counterparts', 
			  'Oh, Sleeper', 
			  'A Skylit Drive', 
			  'Anywhere But Here', 
			  'An Old Dog'];

let sorted = strArr.sort((a, b) => filter(a) < filter(b) ? -1 : 1);


//functions declaration

function addPerson(e) {
	e.preventDefault();
	const companyToAdd = companyName.value;
	if(companyToAdd === '') return alert('Please write company brand name');
	strArr.push(companyToAdd);
	//console.log(sorted);
}

function filter(string) { 
	return string.replace(/^(a |an |the )/i, '');
}

function printList() {
	list.innerHTML = sorted.map(name => `<li>${name}`).join('');
}

function resorted() {
	sorted = strArr.sort((a, b) => filter(a) < filter(b) ? -1 : 1);
}

//EventListener declarations
window.addEventListener('load', printList);
addCompanyName.addEventListener('submit', addPerson);
addCompanyName.addEventListener('submit', resorted);
addCompanyName.addEventListener('submit', printList);





