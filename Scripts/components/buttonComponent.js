const createButtons = () => {
    let tipologie;
    const bindingDiv = document.getElementById("buttonsDiv");

    return {
        getDatiTipologie: (newTipologie) => {
            tipologie = newTipologie
        },
        render : () => {
            console.log(tipologie);
            let line = tipologie.map((tipologia) => {`<button class="button" id="${tipologia}"> ${tipologia} </button>`}).join("");
            bindingDiv.innerHTML = line;
        }
    }
    
}