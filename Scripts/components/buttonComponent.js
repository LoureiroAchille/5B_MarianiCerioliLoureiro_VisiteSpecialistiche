const createButtons = () => {
    let tipologie;
    const bindingDiv = document.getElementById("buttonsDiv");

    return {
        setDatiTipologie: (newTipologie) => {
            tipologie = newTipologie
        },
        render : () => {
            let line = tipologie.map((tipologia) => {return `<button class="button" id="${tipologia}"> ${tipologia} </button>`}).join("");
            console.log(line);
            bindingDiv.innerHTML = line;
        }
    }
    
}