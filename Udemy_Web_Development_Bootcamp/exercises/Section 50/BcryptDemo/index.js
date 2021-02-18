const bcrypt = require('bcrypt')

const hashPassword = async (pw) => {

    const salt=await bcrypt.genSalt(10)

    const hash=await bcrypt.hash(pw, salt)
    console.log(salt)
    console.log(hash)
}

// All At Once
// const hashPassword = async (pw) => {
//     const hash=await bcrypt.hash(pw, 12)
//     console.log(hash)
// }

const login = async (pw, hashedPassword) => {
    
    const check = await bcrypt.compare(pw, hashedPassword)
    if (check) {
        console.log("LOGGED YOU IN! SUCCESSFUL MATCH")
    } else {
        console.log("INCORRECT")
    }
}


//hashPassword('monkey');
login('monkey','$2b$10$eRIFI/i5.s34W8myveiEsOEsgcUpovhGF9PqbNZLFNa4IayYGqJqu')