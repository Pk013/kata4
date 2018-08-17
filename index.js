const output = document.getElementById("output")
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
const gotCitiesCS = ["king's Landing", "braavos", "volantis", "old Valyria", "Free Cities", "qarth", "Meereen"]
const bestThingArray = ["The", "best", "thing", "about", "a", "boolean", "is", "even", "if", "you", "are", "wrong", "you", "are", "only", "off", "by", "a", "bit"]

let kata1 = document.createElement("p")
output.appendChild( kata1 )
kata1.appendChild(document.createTextNode(gotCitiesCSV.toString()))

let kata2 = document.createElement("p")
output.appendChild(kata2)
kata2.appendChild(document.createTextNode(bestThing.split(" ")))

let kata3 = document.createElement("p")
output.appendChild( kata3 )
// kata3.appendChild(document.createTextNode(gotCitiesCSV.toString().replace(/,/g, ";")))
kata3.appendChild(document.createTextNode(gotCitiesCSV.split(",").join(";")))

let kata4 = document.createElement("p")
output.appendChild(kata4)
kata4.appendChild(document.createTextNode(lotrCitiesArray.toString()))

let kata5 = document.createElement("p")
output.appendChild(kata5)
kata5.appendChild(document.createTextNode(lotrCitiesArray.slice(0, 5)))

//console.log(sequence.slice(0, 5))
let kata6 = document.createElement("p")
output.appendChild(kata6)
kata6.appendChild(document.createTextNode(lotrCitiesArray.slice(3, 8)))

let kata7 = document.createElement("p")
output.appendChild(kata7)
kata7.appendChild(document.createTextNode(lotrCitiesArray.slice(2, 5)))

let kata8 = document.createElement("p")
output.appendChild(kata8)
lotrCitiesArray.splice(2, 1)
kata8.appendChild(document.createTextNode(lotrCitiesArray))

let kata9 = document.createElement("p")
output.appendChild(kata9)
lotrCitiesArray.splice(5)
kata9.appendChild(document.createTextNode(lotrCitiesArray))

let kata10 = document.createElement("p")
output.appendChild(kata10)
lotrCitiesArray.splice(2, 0, 'Rohan')
kata10.appendChild(document.createTextNode(lotrCitiesArray))

let kata11 = document.createElement("p")
output.appendChild(kata11)
lotrCitiesArray.splice(5, 1, 'Deadest Marshes')
kata11.appendChild(document.createTextNode(lotrCitiesArray))

let kata12 = document.createElement("p")
output.appendChild(kata12)
kata12.appendChild(document.createTextNode(bestThing.slice(0, 14)))

let kata13 = document.createElement("p")
output.appendChild(kata13)
kata13.appendChild(document.createTextNode(bestThing.slice(69, 82)))

let kata14 = document.createElement("p")
output.appendChild(kata14)
kata14.appendChild(document.createTextNode(bestThing.slice(23, 38)))

let kata15 = document.createElement("p")
output.appendChild(kata15)
kata15.appendChild(document.createTextNode(bestThing.substring(0,14)))

let kata16 = document.createElement("p")
output.appendChild(kata16)
kata16.appendChild(document.createTextNode(bestThing.substring(69, 82)))

let kata17 = document.createElement("p")
output.appendChild(kata17)
kata17.appendChild(document.createTextNode(bestThing.indexOf('only')))

let kata18 = document.createElement("p")
output.appendChild(kata18)
kata18.appendChild(document.createTextNode(bestThing.indexOf('bit')))

const doubleVowelCities = gotCitiesCS.filter(function (city){
    return city.toLowerCase().includes("aa")
        || city.toLowerCase().includes("ee") 
        || city.toLowerCase().includes("ii")
        || city.toLowerCase().includes("oo")
        || city.toLowerCase().includes("uu")
})

let kata19 = document.createElement("p")
output.appendChild(kata19)
kata19.appendChild(document.createTextNode(doubleVowelCities))

const lotrOrCities = lotrCitiesArray.filter(function(orCities){
    return orCities.toLowerCase().includes("or")
})
let kata20 = document.createElement("p")
output.appendChild(kata20)
kata20.appendChild(document.createTextNode(lotrOrCities))

const bestThingB = bestThingArray.filter(function(letterB){
    return letterB.toLowerCase().includes("b") 
})
let kata21 = document.createElement("p")
output.appendChild(kata21)
kata21.appendChild(document.createTextNode(bestThingB))

let kata22 = document.createElement("p")
output.appendChild(kata22)
kata22.appendChild(document.createTextNode(lotrCitiesArray.includes('Mirkwood')))

let kata23 = document.createElement("p")
output.appendChild(kata23)
kata23.appendChild(document.createTextNode(lotrCitiesArray.includes("hollywood")))

const index = lotrCitiesArray.findIndex(lotrCitiesArray => lotrCitiesArray === "Mirkwood")
let kata24 = document.createElement("p")
output.appendChild(kata24)
kata24.appendChild(document.createTextNode(index))

let kata25 = document.createElement("p")
output.appendChild(kata25)
kata25.appendChild(document.createTextNode(lotrCitiesArray.includes("Dead Marshes")))

const reversal =  lotrCitiesArray.reverse()
let kata26 = document.createElement("p")
output.appendChild(kata26)
kata26.appendChild(document.createTextNode(lotrCitiesArray))

const sortingHat = lotrCitiesArray.sort()
let kata27 = document.createElement("p")
output.appendChild(kata27)
kata27.appendChild(document.createTextNode(lotrCitiesArray))

const bePoppin = lotrCitiesArray.pop(7)
let kata29 = document.createElement("p")
output.appendChild(kata29)
kata29.appendChild(document.createTextNode(lotrCitiesArray))

const bePushin = lotrCitiesArray.push("Rohan")
let kata30 = document.createElement("p")
output.appendChild(kata30)
kata30.appendChild(document.createTextNode(lotrCitiesArray))