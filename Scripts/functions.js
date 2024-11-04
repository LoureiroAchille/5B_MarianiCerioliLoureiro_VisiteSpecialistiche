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

const aggiungiPrenotazione = () => {

}

const controllaPrenotazione = (datiInput) => {
    let prenotazione = datiInput[0]
}

const cambiaTipologia = (tipologia) => {
    tipologiaCorrente = tipologia;
    let datiTabella = [];

    

    let temp;
    let datiPrenotazione = [];
    Object.keys(datiTabella).forEach((prenotazione) => {
        temp = prenotazione.split("-");
        if (temp[0] == tipologia){
            datiPrenotazione.push([temp[1],temp[2],datiTabella[prenotazione]]) //[data,orario,nome]
        }
    })
    table.render();
}
