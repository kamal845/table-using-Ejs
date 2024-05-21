const Table = require('../model/model');

exports.getHomeData = async (req, res) => {
    try {
        const tables = await Table.find();
        res.render("home", { tables: tables });
    } catch (error) {
        console.log("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
};

// Controller function to create a new table entry
exports.createTable = async (req, res) => {
    const { id, name, Age, image, school } = req.body;
    try {
        const newTable = new Table({ id, name, Age, image, school });
        await newTable.save();
        res.redirect(req.path === '/' ? '/' : '/home');
    } catch (error) {
        console.log('Error saving data:', error);
        res.status(500).send('Internal Server Error');
    }
};


exports.renderCreate = (req, res) => {
    res.render('create');
};

exports.renderHome = (req, res) => {
    res.render("home");
};

exports.redirectHome = (req, res) => {
    res.redirect('home');
};








exports.renderEditPage = async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Table.findById(id);
        if (record) {
            res.render('edit', { record });
        } else {
            res.status(404).send('Record not found');
        }
    } catch (error) {
        console.log('Error fetching record:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Controller function to update a table entry
exports.updateTable = async (req, res) => {
    const id = req.params.id;
    const updatedData = {
        name: req.body.name,
        Age: req.body.Age,
        image: req.body.image,
        school: req.body.school
    };

    try {
        await Table.findByIdAndUpdate(id, updatedData);
        res.redirect('/home');
    } catch (error) {
        console.log('Error updating record:', error);
        res.status(500).send('Internal Server Error');
    }
};


exports.deleteTable = async (req, res) => {
    const id = req.params.id;
    try {
        await Table.findByIdAndDelete(id);
        const tables = await Table.find();
        res.render('home', { tables: tables });
    } catch (error) {
        console.log('Error deleting record:', error);
        res.status(500).send('Internal Server Error');
    }
};