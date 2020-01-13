const request = require("request")

function main() {
    for (let i=0; i < 100; i++) {
        request.get('http://localhost:8000/',{json: true}, (err, data) => {
                let response = data
                console.log(response['body'], `Request number ${i}`);
        })
    }
}

main();