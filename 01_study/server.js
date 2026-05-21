const http = require("http");

const port = 3000;

const menu = [
    { name: "Somtum", price: 30, id: 1 },
    { name: "Fried Chicken", price: 50, id: 2 },
    { name: "Mango Juice", price: 70, id: 3 },
    { name: "Pizza", price: 90, id: 4 },
];

const jsd = [
    { name: "Em", jsd_number: 5, genmate: "F" },
    { name: "Card", jsd_number: 9, genmate: "F" },
    { name: "Lin", jsd_number: 13, genmate: "F" },
    { name: "Jay", jsd_number: 19, genmate: "F" },
    { name: "Toon", jsd_number: 38, genmate: "F" },
    { name: "Sign", jsd_number: 41, genmate: "F" },
    { name: "Ong", jsd_number: 42, genmate: "F" },
];

const server = http.createServer((req, res) => {
    console.log(
        `URL: ${req.url}\nMETHOD: ${req.method}\nHEADERS:\n${JSON.stringify(req.headers, null, 2)}`,
    );

    if (req.method === "GET") {
        if (req.url === "/") {
            res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
            res.end("<h1>สวัสดีครับ Welcome to the world</h1>");
        }
        if (req.url === "/menu") {
            res.writeHead(200, {
                "content-type": "application/json; charset=utf-8",
            });
            res.end(JSON.stringify(menu));
        }
        if (req.url === "/random") {
            const randomIndex = Math.floor(Math.random() * menu.length);
            const aa = menu[randomIndex];
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.end(JSON.stringify(aa));
        }

        ////////////////////////////////////////////////////////////
        /////////////////        Afternoon        //////////////////
        ////////////////////////////////////////////////////////////

        if (req.url === "/users") {
            res.writeHead(200, {
                "content-type": "application/json; charset=utf-8",
            });
            res.end(JSON.stringify(jsd));
        }

        if (req.url === "/random-gen") {
            const randomIndex = Math.floor(Math.random() * jsd.length);

            const bb = jsd[randomIndex];

            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.end(JSON.stringify(bb));
        }
        if (req.url.startsWith("/users/")) {
            const parts = req.url.split("/");
            const searchNum = Number(parts[2]);
            const findUser = jsd.find((user) => user.jsd_number === searchNum);

            res.writeHead(200, {
                "content-type": "application/json; charset=utf-8",
            });
            res.end(JSON.stringify(findUser));
        }
    }
});

////////////////////////////////////////////////////////////
/////////////////        Express        //////////////////
////////////////////////////////////////////////////////////

server.listen(port, () => {
    console.log(`server is run on port ${port} 😈`);
});
