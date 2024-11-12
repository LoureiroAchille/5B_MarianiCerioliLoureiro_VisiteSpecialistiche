const hide = (element) => {
    element.classList.remove("visible");
    element.classList.add("hidden");
}

const show = (element) => {
    element.classList.remove("hidden");
    element.classList.add("visible");
}

const aggiungiPrenotazione = (datiInput) => {
    let dataInput = datiInput[0].split("-").join("");

    let chiave = tipologiaCorrente + "-" + dataInput + "-" + datiInput[1];


    return [datiInput[2],chiave];

    /*
    return download().then(() => {
        data[chiave] = datiInput[2];
        upload();
        return elaboraDatiTabella();
    })
    */
}

const controllaPrenotazione = (datiInput) => {
    let checkChiave = tipologiaCorrente + "-" + datiInput[0].split("-").join("") + "-" + datiInput[1];
    Object.keys(data).map((chiave) => {
        if (chiave == checkChiave) {
            alert("Prenotazione gia' occupata")
            return false
        }
    })
    return true;
}

const cambiaTipologia = (tipologia) => {
    tipologiaCorrente = tipologia;
}

const elaboraDatiTabella = (data) => {

    const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let temp;
    let datiPrenotazione = [];
    Object.keys(data).forEach((persona) => {
        temp = data[persona].split("-");
        if (temp[0] == tipologiaCorrente){
            datiPrenotazione.push([temp[1],temp[2],persona]) //[data,orario,nome]
        }
    })

    let datiTabella = [];
    orari.map((orario) => {
        datiTabella.push([[orario],[""],[""],[""],[""],[""]]);
    })

    
    let dateTabella = [[""]];
    for (let i = 0; i < 5;i++){
        let today = new Date();
        today.setDate(today.getDate() + dayOffset);
        let newDay = today;
        newDay.setDate(today.getDate() + i);
        let todayStringISO = newDay.toISOString().slice(0,10);
        let index = newDay.getDay();
        if (index > 6) index -= 7;
        let day = weekDay[index];
        dateTabella.push([todayStringISO + `\n` + day]);
    }        
    datiTabella.unshift(dateTabella);


    datiPrenotazione.map((prenotazione) => {
        for (let i = 0; i < 5;i++){
            let today = new Date();
            today.setDate(today.getDate() + dayOffset);
            let newDay = today;
            newDay.setDate(today.getDate() + i);
            let todayString = newDay.toISOString().slice(0,10).split("-").join("");
            if (prenotazione[0] == todayString){
                datiTabella[orari.indexOf(parseInt(prenotazione[1])) + 1][i + 1] = [prenotazione[2]];
            }
        }
    
    })

    return datiTabella;
}

