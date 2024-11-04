const createButtons = () => {
    let tipologie;
    const bindingDiv = document.getElementById("buttonsDiv");

    return {
        setDatiTipologie: (newTipologie) => {
            tipologie = newTipologie
        },
        render : () => {
            let line = tipologie.map((tipologia) => {return `<button class="button" id="${tipologia}"> ${tipologia} </button>`}).join("");
            bindingDiv.innerHTML = line;
            tipologie.map((tipologia) => {
                document.getElementById(tipologia).onclick = () => {
                    tipologiaCorrente = tipologia;
                    cambiaTipologia(tipologia);
                }
            })
        }
    }
}