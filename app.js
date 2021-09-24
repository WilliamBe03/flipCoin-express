const express = require('express');

const app = express();
const port = 4000;

app.use(express.static('public'));

app.get("/flipCoin", (req, res) => {
    const val = Math.random();
    var ret;
    if (val > 0.5) {
        ret = "Heads";
    } else {
        ret = "Tails"
    }
  res.send(ret);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});