// const express=require ('express');
// const app=express();
// const connectDB=require("./database/database");
// const Table=require('./model/model');
// const controller = require("./controller/controller");
// const bodyParser = require('body-parser');
// const path=require('path');
// app.set("views",path.join(__dirname,"/views"));
// app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the 'public' directory
// app.use(express.urlencoded({extended:false}));
// app.use(bodyParser.json());
// const port=3000;

// app.set('view engine','ejs');

// app.get('/',(req,res)=>{
//     res.render("home");
// })

// app.get('/home', async (req, res) => {
//     try {
//         const tables = await Table.find();
//  res.render("home", { tables: tables });
//     } catch (error) {
//         console.log("Error fetching data:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// app.post('/', async (req, res) => {
//     const { id, name,Age, image, school } = req.body;
//     try {
//         const newTable = new Table({ id, name,Age, image, school });
//         await newTable.save();
//         res.redirect('/');
//     } catch (error) {
//         console.log('Error saving data:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });


// app.get('/create', (req, res) => {
//     res.render('create');
// });
// app.get('/create/', (req, res) => {
//     res.redirect('home');
// });
// app.post('/home', async (req, res) => {
//     const { id, name, Age, image, school } = req.body;
//     try {
//         const newTable = new Table({ id, name, Age, image, school });
//         await newTable.save();
//         res.redirect('/home');
//     } catch (error) {
//         console.log('Error saving data:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// try {
//     app.listen(port, async () => {
//         try {
//             await connectDB();
//             console.log("Server is running on port and database is connected", port);
//         } catch (error) {
//             console.log("Error connecting to the database:", error);
//         }
//     });
// } catch (error) {
//     console.log("Error starting the server:", error);
// }



const express = require('express');
const app = express();
const connectDB = require("./database/database");
const bodyParser = require('body-parser');
const path = require('path');

// Import routes
const routes = require('./routes/route');
// Middleware
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the 'public' directory
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.set('view engine', 'ejs');

// Use routes
app.use('/', routes);

try {
    app.listen(port, async () => {
        try {
            await connectDB();
            console.log("Server is running on port and database is connected", port);
        } catch (error) {
            console.log("Error connecting to the database:", error);
        }
    });
} catch (error) {
    console.log("Error starting the server:", error);
}
