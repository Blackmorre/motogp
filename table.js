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

/**
 * 
 * @param {*} element 
 * @returns HtmlElement
 */
const buildHtmlElement = (element, parent, value) => {
    if (parent === undefined) { //est-ce que parent est considéré comme "non défini"?
        return document.createElement(element)
    }
    else { //Je doit créer l'élément mais je dois aussi l'ajouter à son parent
        const htmlEl = document.createElement(element)
        parent.appendChild(htmlEl)
        htmlEl.innerHTML = value
        return htmlEl
    }

}

const buildHeader = (...headers) => { // ... permet d'avoir un nombre de paramètre variable
    const headerRow = buildHtmlElement('tr')
    for (const header of headers) {
        const th = buildHtmlElement('th', headerRow, header)
        if (header === 'Lastname') {
            //Have to place an event listener
            th.setAttribute('onclick', 'sortTableOnName(this)')
            th.dataset.sort = 1
        }
    }
    document.querySelector('thead').appendChild(headerRow)
}
//Call function
buildHeader('id', 'Lastname', 'Firstname', 'Phone', 'E-mail')

// Displaying all of interns in a row in a table
const rowMaker = () => {

    const tbody = document.querySelector('tbody') // selectionne la partie du document html (head, body, footer)

    for (const intern of interns) {
        //1. Create a tr element
        const newTr = buildHtmlElement('tr')
        
        /*
        const idTd = document.createElement('td')
        newTr.appendChild(idTd)
        idTd.innerHTML = intern.id
        */

        //2. Create a td element and write intern infos into
        const idTd = buildHtmlElement('td', newTr, intern.id)
        const lastnameTd = buildHtmlElement('td', newTr, intern.lastname)
        const firstnameTd = buildHtmlElement('td', newTr, intern.firstname)
        const telephoneTd = buildHtmlElement('td', newTr, intern.telephone)
        const emailTd = buildHtmlElement('td', newTr, intern.email)

        //Append the brand new complete tr to tbody
        tbody.appendChild(newTr)
    }
}

rowMaker ()


var tri = 1

// Arrow function
const sortTableOnName = (th) => {
    console.log('Hello Sorter');
    const trs = [... document.querySelector('tbody').childNodes] // "[]" = tableau; "..." = spread operator
    for(let tr of trs) {
       tr.remove()
    } //remove old list

    const sortOrder = parseInt(th.dataset.sort)

    interns.sort((intern1, intern2) => {
        return intern1.lastname.localeCompare(intern2.lastname)
    }) //add ordered list

    th.dataset.sort = sortOrder * -1
    
    console.log(interns)

    if (tri === 0) {
        interns.reverse()
        tri = 1
    }
    else {
        tri = 0
    }
    

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