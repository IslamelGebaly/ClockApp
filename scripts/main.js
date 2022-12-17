function app() {
    ///Configuring Html
    const doc = document;

    ///Defining container for the app
    const container = doc.createElement("div");
    container.setAttribute("style",
        "position: relative; left:400px; top: 200px; border-style:double; border-width:10px; text-align:center;"+
        "width:500px"
    )
    doc.body.appendChild(container);

    ///Adding Welcome Prompt
    const welcomePrompt = doc.createElement("h1");
    welcomePrompt.textContent = "Welcome to my clock app!";
    container.appendChild(welcomePrompt);

    ///creates clock element
    const clock = doc.createElement("h2");
    updateTime(container, clock);
}

function updateTime(container, element){
    ///Updates time 
    const date = new Date();
    element.innerHTML = date.toTimeString().split(" ")[0];
    container.appendChild(element);

    const interval = setInterval(() => {
        const date = new Date();
        let time = date.toTimeString().split(" ")[0];
        element.innerHTML = time;
    }, 1000)
}

app()
