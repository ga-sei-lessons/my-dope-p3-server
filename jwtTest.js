const jwt = require('jsonwebtoken')

const jwtTest = () => {
    try {
        // create a jwt payload -- the data that is encoded
        const payload = {
            // public user information
            name: 'weston',
            id: '1234',
            email: 'w@b.com'
            // do not put the password in the payload!
        }
        // 'sign' jwt by supplying a secret to hash in the signature
        const secret = 'my super big secret' 
        // jwt.sign({ payload to encode }, 'secret to create signanture', { options (expiresIn) })
        const token = jwt.sign(payload, secret)
        console.log(token)
        // head (specifices encoding standard for the jwt): eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
        // payload (encoded data): eyJuYW1lIjoid2VzdG9uIiwiaWQiOiIxMjM0IiwiZW1haWwiOiJ3QGIuY29tIiwiaWF0IjoxNjY1MDgyMjMwfQ.
        // signaure (hash of the payload and secret): Gp7p20Q9AOWgXEhCu3QdT6AXrueolou2PIEq8hv6m-k


        // signing a token will log a user in
        // jwt.verify(token, 'secret') -- throws and error if it cannot verify (otherwise returns decoded data to us)
        const decode = jwt.verify(token, secret)
        // when we decode jwts we will check the signature to make sure the user's login is valid, this authorizes the user
        console.log(decode)
    } catch(err) {
        console.log(err)
    }
}

jwtTest()