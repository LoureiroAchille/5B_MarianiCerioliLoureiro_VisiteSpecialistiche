const hide = (div) => {
    let hidden = '<class="hide">';
    hidden += div;
    hidden += '</class>'
    innerHTML = hidden; 
}

const show = (div) => {
    let hidden = '<class="show">';
    hidden += div;
    hidden += '</class>'
}

const aggiungiPrenotazione = (datiInput) => {
    let dataInput = datiInput[0].split("-").join("");

    let chiave = tipologiaCorrente + "-" + dataInput + "-" + datiInput[1];
    data[chiave] = datiInput[2];
}

const controllaPrenotazione = (datiInput) => {
    let prenotazione = datiInput[0]
}

const cambiaTipologia = (tipologia) => {
    tipologiaCorrente = tipologia;

    let temp;
    let datiPrenotazione = [];
    Object.keys(data).forEach((prenotazione) => {
        temp = prenotazione.split("-");
        if (temp[0] == tipologia){
            datiPrenotazione.push([temp[1],temp[2],datiTabella[prenotazione]]) //[data,orario,nome]
        }
    })

    table.setData(["20241005",8,"Marco"]);

    table.render();
}
