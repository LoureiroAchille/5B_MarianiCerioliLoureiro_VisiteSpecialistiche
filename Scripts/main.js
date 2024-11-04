const buttonPrenota = document.getElementById("prenota");
const buttonPrecedente = document.getElementById("precedente");
const buttonSuccessivo = document.getElementById("successivo");


const buttons = createButtons();
const table = createTable();
const form = createForm(document.getElementById("formDiv"));


buttonPrenota.onclick = () => {
    show(document.getElementById("formDiv"));
}

buttonPrecedente.onclick = () => {
    dayOffset -= 5;
    console.log(dayOffset);
    datiTabella = elaboraDatiTabella();
    table.setData(datiTabella);
    table.render();
}

buttonSuccessivo.onclick = () => {
    dayOffset += 5;
    console.log(dayOffset);
    datiTabella = elaboraDatiTabella();
    table.setData(datiTabella);
    table.render();
}


fetch("conf.json").then(r =>r.json()).then(confData => {
    buttons.setDatiTipologie(confData.tipologie)
    buttons.render();

    //download().then(() => {
        let datiTabella = elaboraDatiTabella();
        table.setData(datiTabella);
        table.render();
    //})
    

    form.setLabels([["Data ","date"], ["Ora ","number"], ["Nominativo ","text"]]);
    form.render();

    setInterval(() => {

        table.render()

    },5000);
});

