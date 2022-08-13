var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors())
app.get('/', function (req, res) {
    res.sendFile(process.cwd() + './index.html');
    

})

app.use('/public', express.static(process.cwd() + '/public'));



const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Your app is listening on http://localhost:' + port)
});