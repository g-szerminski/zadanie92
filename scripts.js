var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Marian';
if (allNames.indexOf(newName) === -1) { 
	var allNames = allNames.push(newName);
    console.log('Dodane mię do tablicy to ' + newName);

}	else {
	console.log('Wprowadzone imię to ' + newName + ' Imię nie może być urzyte kolejny raz');
}