/**
 * table.js : Handle rows in a table
 * @author Aélion
 * @version 1.0.0
 */

console.log("Hello JS");

const interns = [
    {
        id: 1,
        lastname: "Zanzibar",
        firstname: "Jean-Luc",
        telephone: "06 23 23 23 23",
        email: "jean-luc.aubert@aelion.fr",
    },
    {
        id: 2,
        lastname: "Dutronc",
        firstname: "Jean-Luc",
        telephone: "06 23 23 23 23",
        email: "jean-luc.aubert@aelion.fr",
    },
    {
        id: 3,
        lastname: "Tartuffe",
        firstname: "Jean-Luc",
        telephone: "06 23 23 23 23",
        email: "jean-luc.aubert@aelion.fr",
    },
    {
        id: 4,
        lastname: "Bond",
        firstname: "James",
        telephone: "07 07 07 07 07",
        email: "james.bond@aelion.fr",
    },
]; //objets définis de façon littérale


    // Displaying all of interns in a row in a table
const rowMaker = () => {


    const tbody = document.querySelector('tbody') // selectionne la partie du document html (head, body, footer)

    for (const intern of interns) {
        //1. Create a tr element
        const newTr = document.createElement('tr')
        
        //2. Create a td element and write intern infos into
        const idTd = document.createElement('td')
        idTd.innerHTML = intern.id
        newTr.appendChild(idTd)

        const lastnameTd = document.createElement('td')
        lastnameTd.innerHTML = intern.lastname
        newTr.appendChild(lastnameTd)

        const firstnameTd = document.createElement('td')
        firstnameTd.innerHTML = intern.firstname
        newTr.appendChild(firstnameTd)

        const telephoneTd = document.createElement('td')
        telephoneTd.innerHTML = intern.telephone
        newTr.appendChild(telephoneTd)

        const emailTd = document.createElement('td')
        emailTd.innerHTML = intern.email
        newTr.appendChild(emailTd)

        //Append the brand new complete tr to tbody
        tbody.appendChild(newTr)
    }
}

rowMaker ()

// Arrow function
const sortTableOnName = () => {
    console.log('Hello Sorter');
    const trs = [... document.querySelector('tbody').childNodes] // "[]" = tableau; "..." = spread operator
    for(let tr of trs) {
       tr.remove()
    }

    interns.sort((intern1, intern2) => {
        return intern1.lastname.localeCompare(intern2.lastname)
    })
    console.log(interns)
    rowMaker()
}

/*
const moi = {
    nom: 'Aubert',
    age: 56
}
console.log(`Moi a le nom de ${moi.nom} et Moi a ${moi.age} ans`)
// Affecter à un nouvel objet moi
const toi = moi;
console.log(`Toi a le nom ${moi.nom} et Toi a ${moi.age} ans`)
toi.nom = 'Pia'
console.log(`Moi maintenant a le nom de ${moi.nom} et Moi a ${moi.age} ans`)
console.log(`Toi maintenant a le nom de ${toi.nom} et Toi a ${moi.age} ans`)
const lui = {... moi}
lui.nom = 'Casper le Fantôme'
console.log(`Lui maintenant a le nom de ${lui.nom} et Lui a ${moi.age} ans`)
console.log(`Moi maintenant a le nom de ${moi.nom} et Toi maintenant a le nom de ${toi.nom}`)
*/