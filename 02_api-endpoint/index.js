import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const starWarsCharacters = [
    {
        id: 1,
        name: "Darth Vader",
        faction: "Galactic Empire",
        isForceSensitive: true,
        quote: "I find your lack of faith disturbing.",
    },
    {
        id: 2,
        name: "Yoda",
        faction: "Jedi Order",
        isForceSensitive: true,
        quote: "Do. Or do not. There is no try.",
    },
    {
        id: 3,
        name: "Luke Skywalker",
        faction: "Rebel Alliance",
        isForceSensitive: true,
        quote: "I am a Jedi, like my father before me.",
    },
    {
        id: 4,
        name: "Leia Organa",
        faction: "Rebel Alliance",
        isForceSensitive: true,
        quote: "Help me, Obi-Wan Kenobi. You're my only hope.",
    },
    {
        id: 5,
        name: "Han Solo",
        faction: "Rebel Alliance",
        isForceSensitive: false,
        quote: "Never tell me the odds.",
    },
    {
        id: 6,
        name: "Chewbacca",
        faction: "Rebel Alliance",
        isForceSensitive: false,
        quote: "Rrrrrrr-ghghghghgh!",
    },
    {
        id: 7,
        name: "Obi-Wan Kenobi",
        faction: "Jedi Order",
        isForceSensitive: true,
        quote: "Hello there.",
    },
    {
        id: 8,
        name: "Emperor Palpatine",
        faction: "Galactic Empire",
        isForceSensitive: true,
        quote: "Power! Unlimited power!",
    },
    {
        id: 9,
        name: "Boba Fett",
        faction: "Bounty Hunters",
        isForceSensitive: false,
        quote: "As you wish.",
    },
    {
        id: 10,
        name: "R2-D2",
        faction: "Rebel Alliance",
        isForceSensitive: false,
        quote: "*Beep boop*",
    },
    {
        id: 11,
        name: "C-3PO",
        faction: "Rebel Alliance",
        isForceSensitive: false,
        quote: "I am fluent in over six million forms of communication.",
    },
    {
        id: 12,
        name: "Darth Maul",
        faction: "Sith",
        isForceSensitive: true,
        quote: "At last we will reveal ourselves to the Jedi.",
    },
    {
        id: 13,
        name: "Ahsoka Tano",
        faction: "Rebel Alliance",
        isForceSensitive: true,
        quote: "I am no Jedi.",
    },
    {
        id: 14,
        name: "Mace Windu",
        faction: "Jedi Order",
        isForceSensitive: true,
        quote: "This party's over.",
    },
    {
        id: 15,
        name: "Padmé Amidala",
        faction: "Galactic Republic",
        isForceSensitive: false,
        quote: "So this is how liberty dies... with thunderous applause.",
    },
    {
        id: 16,
        name: "Qui-Gon Jinn",
        faction: "Jedi Order",
        isForceSensitive: true,
        quote: "There's always a bigger fish.",
    },
    {
        id: 17,
        name: "Din Djarin",
        faction: "Mandalorians",
        isForceSensitive: false,
        quote: "This is the Way.",
    },
    {
        id: 18,
        name: "Grogu",
        faction: "Mandalorians",
        isForceSensitive: true,
        quote: "*Cooing noises*",
    },
    {
        id: 19,
        name: "Kylo Ren",
        faction: "First Order",
        isForceSensitive: true,
        quote: "Let the past die. Kill it, if you have to.",
    },
    {
        id: 20,
        name: "Rey",
        faction: "Jedi Order",
        isForceSensitive: true,
        quote: "I know all about waiting.",
    },
];

app.get("/api/characters", (req, res) => {
    res.json(starWarsCharacters);
});

// for local test
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

export default app;
