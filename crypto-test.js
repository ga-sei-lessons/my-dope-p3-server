const bcrypt = require('bcryptjs')
const { createHash } = require('crypto')

const hash = createHash('sha256')

const payload = '{ key: value }'
const secret = 'my secret'

hash.update(payload + secret)
const digest = hash.digest('hex')
console.log('sha256:', digest)

const testCrypto = async () => {
    try {
        // when a user is registering we need to make a hash of their password
        // test password hashing
        const password = 'hello'
        const saltRounds = 12 // how many times we will rehash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        console.log('bcrypt:', hashedPassword)

        // when a user is logging in we need to test the passsword that supply against a hash that we have stored in the database
        // test comparing hashes
        // bcrypt.compare('string to match', hash to match)
        const matchPasswords = await bcrypt.compare('1234', hashedPassword)
        console.log(matchPasswords)
    } catch(err) {
        console.log(err)
    }
}

// testCrypto()