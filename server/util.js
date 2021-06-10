let characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`

let generateRandomId = () => {
    let charArray = characters.split('')
    let id = ""
    for(let i = 0; i < 5; i++)
        id += charArray[ getRandomIntInclusive(0, charArray.length - 1) ]
    return id;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports.generateRandomId = generateRandomId