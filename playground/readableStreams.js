const { Readable: readStream } = require('stream');

const inStream = new readStream({
        read (size) {
            this.push(String.fromCharCode(this.currentCharCode++));
            if ( this.currentCharCode > 110 ) {
                this.push(null)
            }
        }
});

inStream.currentCharCode = 65 

inStream.pipe(process.stdout);