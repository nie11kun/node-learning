const axios = require('axios')

axios
.post('http://localhost:3000', {
    todo: 'go to sleep'
})
.then(res => {
    console.log(`statusCode is: ${res.status}`);
    process.stdout.write(res.data)
})
.catch(err => console.log(err))