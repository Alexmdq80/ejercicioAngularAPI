var express = require("express");
var cors = require('cors');


const app = express();

app.use(express.json());
// app.use(cors());



const features = [
    {
        id: 1,
        icon: 'add_box',
        title: 'Easy to Use',
        description: 'Editing with customizing Essential Landing is easy and fast'
    },
    {
        id: 2,
        icon: 'star_half',
        title: '100% Responsive',
        description: 'Editing with customizing Essential Landing is easy and fast'
    },
    {
        id: 3,
        icon: 'system_update_alt',
        title: '50+ New Pages',
        description: 'Editing with customizing Essential Landing is easy and fast'
    }
];

app.get("/feature", (req, res, next) => {
    res.json(features);
});

app.post("/feature", (req, res) => {
    console.log(req.body);
    features.push(req.body);
    res.json({message: 'POST request success.'});
});

app.put('/feature/:id', (req, res) => {
    console.log(req.body);
    const index = features.findIndex(f => f.id === parseInt(req.body.id));
    console.log(index);
    features[index] = req.body;
    console.log("Updated", features[index]);
    res.json({message: "PUT request succefull."});
});

app.delete("/feature/:id", (req, res) => {
    const index = features.findIndex(f => f.id === parseInt(req.params.id));
    console.log(index);
    const deletedFeature = features.splice(index, 1);
    console.log(deletedFeature);
    res.json({message: 'Deleted correctly.'});
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});