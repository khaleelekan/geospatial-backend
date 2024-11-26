// index.mjs
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))


app.get('/tshirt/:id', (req,res) => {
    const {id} = req.params
    const { logo} = req.body;

    if (!id || !logo){
        res.status(418).send({
            message: 'both id and logo are required'
        })
    }
    res.status(200).send({
        id: id,
        logo: logo,
        tshirt: '👕',
        size: 'large'
    });
})

app.post('/tshirt', (req, res) =>{
    const {id,logo} = req.body;

    if (!logo){
        res.status(400).send({
            message: 'we need a logo!'
        })
    }
    res.send({
        tshirt: `the id is ${id} and the logo is ${logo}`
    })
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));