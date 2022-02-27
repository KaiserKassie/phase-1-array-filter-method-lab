const drivers = ["Legolas", "Aragorn", "Gandalf", "Gimli", "Legolas"]

const driversHometowns = [
    {
        driver: "Legolas",
        hometown: "Rivendell",
    },
    {
        driver: "Aragorn",
        hometown: "Gondor",
    },
    {
        driver: "Gandalf",
        hometown: "Heaven",
    },
    {
        driver: "Gimli",
        hometown: "Moria",
    }
]

function findMatching(array, string) {
    const matchingDriver = array.filter(element => element.toUpperCase() === string.toUpperCase())
    return matchingDriver 
}

function fuzzyMatch(array, string) {
    const matchingLetter = array.filter(element => element.startsWith(string))
    return matchingLetter
}

function matchName(array, string) {
    const printHometown = array.filter(element => element.driver === string)
    return printHometown
}


console.log(matchName(driversHometowns, "Gandalf"))