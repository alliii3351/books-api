const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const booksData = [
    {
        author: "William Shakespeare",
        books: [
            { title: "Hamlet", subtitle: "Prince of Denmark", description: "A tragic tale of revenge and madness.", genre: "Tragedy", price: "$10", rating: 4.7 },
            { title: "Romeo and Juliet", subtitle: "A Love Story", description: "A timeless love tragedy.", genre: "Romance, Tragedy", price: "$12", rating: 4.6 },
            { title: "Macbeth", subtitle: "The Scottish Play", description: "A story of ambition and betrayal.", genre: "Tragedy", price: "$11", rating: 4.5 },
            { title: "Othello", subtitle: "The Moor of Venice", description: "A drama of jealousy and deceit.", genre: "Tragedy", price: "$9", rating: 4.4 },
            { title: "King Lear", subtitle: "A Tragic Tale", description: "A king’s descent into madness.", genre: "Tragedy", price: "$10", rating: 4.5 }
        ]
    },
    {
        author: "Leo Tolstoy",
        books: [
            { title: "War and Peace", subtitle: "A Russian Epic", description: "A novel about Russia’s history.", genre: "Historical Fiction", price: "$15", rating: 4.8 },
            { title: "Anna Karenina", subtitle: "Love & Society", description: "A tragic love story.", genre: "Romance, Tragedy", price: "$14", rating: 4.6 },
            { title: "The Death of Ivan Ilyich", subtitle: "Life & Mortality", description: "A meditation on death.", genre: "Existential Fiction", price: "$12", rating: 4.7 },
            { title: "The Kreutzer Sonata", subtitle: "A Psychological Tale", description: "A dark tale of jealousy.", genre: "Psychological Fiction", price: "$9", rating: 4.3 },
            { title: "Resurrection", subtitle: "A Story of Redemption", description: "A tale of justice and morality.", genre: "Historical Fiction", price: "$13", rating: 4.5 }
        ]
    },
    {
        author: "Jane Austen",
        books: [
            { title: "Pride and Prejudice", subtitle: "A Romantic Classic", description: "A tale of love and society.", genre: "Romance, Satire", price: "$10", rating: 4.8 },
            { title: "Sense and Sensibility", subtitle: "Love & Family", description: "A novel about two sisters.", genre: "Romance, Drama", price: "$11", rating: 4.7 },
            { title: "Emma", subtitle: "A Witty Romance", description: "A story of matchmaking.", genre: "Romance, Comedy", price: "$12", rating: 4.6 },
            { title: "Mansfield Park", subtitle: "A Story of Class", description: "A novel about social status.", genre: "Romance, Drama", price: "$10", rating: 4.4 },
            { title: "Northanger Abbey", subtitle: "A Gothic Parody", description: "A satire on Gothic fiction.", genre: "Romance, Satire", price: "$9", rating: 4.3 }
        ]
    },
    {
        author: "George Orwell",
        books: [
            { title: "1984", subtitle: "A Dystopian Novel", description: "A vision of a totalitarian future.", genre: "Dystopian Fiction", price: "$10", rating: 4.9 },
            { title: "Animal Farm", subtitle: "A Political Allegory", description: "A critique of power and corruption.", genre: "Political Satire, Allegory", price: "$9", rating: 4.8 },
            { title: "Homage to Catalonia", subtitle: "A Personal Account", description: "Orwell’s experience in the Spanish Civil War.", genre: "Non-Fiction, History", price: "$12", rating: 4.5 },
            { title: "Down and Out in Paris and London", subtitle: "A Memoir", description: "A personal account of poverty.", genre: "Memoir, Non-Fiction", price: "$11", rating: 4.4 },
            { title: "Burmese Days", subtitle: "A Colonial Story", description: "A critique of British imperialism.", genre: "Historical Fiction", price: "$10", rating: 4.3 }
        ]
    },
    {
        author: "J.K. Rowling",
        books: [
            { title: "Harry Potter and the Sorcerer’s Stone", subtitle: "Book 1", description: "The beginning of a magical journey.", genre: "Fantasy", price: "$10", rating: 4.9 },
            { title: "Harry Potter and the Chamber of Secrets", subtitle: "Book 2", description: "A mystery unfolds at Hogwarts.", genre: "Fantasy, Adventure", price: "$11", rating: 4.8 },
            { title: "Harry Potter and the Prisoner of Azkaban", subtitle: "Book 3", description: "A fugitive wizard on the loose.", genre: "Fantasy, Mystery", price: "$12", rating: 4.9 },
            { title: "Harry Potter and the Goblet of Fire", subtitle: "Book 4", description: "A deadly tournament at Hogwarts.", genre: "Fantasy, Adventure", price: "$13", rating: 4.8 },
            { title: "Harry Potter and the Order of the Phoenix", subtitle: "Book 5", description: "Dark times for the wizarding world.", genre: "Fantasy, Drama", price: "$14", rating: 4.7 }
        ]
    }
];

app.get("/books", (req, res) => {
    res.json(booksData);
});

app.listen(3000, () => console.log("API running on port 3000"));
