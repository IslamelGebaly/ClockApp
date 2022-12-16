function app() {
    ///Configuring Html
    const doc = document;
    const container = doc.createElement("div");
    container.id = "container";
    doc.body.appendChild(container);

    const welcome_prompt = doc.createElement("h1");
    welcome_prompt.textContent = "Welcome to my clock app!";
    container.appendChild(welcome_prompt);
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
