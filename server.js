const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const booksData = [
    {
        author: "William Shakespeare",
        books: [
            { title: "Hamlet", subtitle: "Prince of Denmark", description: "A tragic tale of revenge and madness.", genre: "Tragedy", price: "$10", rating: 4.7 },
            { title: "Romeo and Juliet", subtitle: "A Love Story", description: "A timeless love tragedy.", genre: "Romance, Tragedy", price: "$12", rating: 4.6 }
        ]
    },
    {
        author: "George Orwell",
        books: [
            { title: "1984", subtitle: "A Dystopian Novel", description: "A vision of a totalitarian future.", genre: "Dystopian Fiction", price: "$10", rating: 4.9 },
            { title: "Animal Farm", subtitle: "A Political Allegory", description: "A critique of power and corruption.", genre: "Political Satire", price: "$9", rating: 4.8 }
        ]
    }
];

app.get("/books", (req, res) => {
    res.json(booksData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
