const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));


app.use(function(request, response) {
  response.status(404).sendFile(path.join(__dirname, '/public/404.html'));  
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});