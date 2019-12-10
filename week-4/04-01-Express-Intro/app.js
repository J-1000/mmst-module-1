const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/eine-datei.html', (request, response) => {
    response.send(` <p>wenn im public folder keine resource gefunden wird, dann antwortet die erste passende Route die definiert wurde</p>
    `
    );
});

app.get('/cat', (request, response) => {
    response.sendFile(__dirname + '/views/cat-page.html')
});


app.listen(3000, () => {
    console.log('server listening on port 3000');
});