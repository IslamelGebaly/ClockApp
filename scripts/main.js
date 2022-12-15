app = () => {
    const doc = document;
    const h1 = doc.createElement("h1");
    h1.textContent = "Welcome to my clock app!";
    doc.body.appendChild(h1);

    const h2 = doc.createElement("h2");
    const date = new Date();
    let time = date.getHours().toString() + ":" + date.getMinutes().toString() + ":" + date.getSeconds().toString();
    h2.textContent = time
    doc.body.appendChild(h2)
}

app()
