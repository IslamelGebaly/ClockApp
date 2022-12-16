function app() {
    const doc = document;
    const h1 = doc.createElement("h1");
    h1.textContent = "Welcome to my clock app!";
    doc.body.appendChild(h1);

    const h2 = doc.createElement("h2");
    updateTime(doc, h2)
}

function updateTime(doc, element){
    doc.body.appendChild(element)
    const interval = setInterval(() => {
        const date = new Date();
        let time = date.toTimeString().split(" ")[0];
        element.innerHTML = time;
    }, 1000)
}

app()
