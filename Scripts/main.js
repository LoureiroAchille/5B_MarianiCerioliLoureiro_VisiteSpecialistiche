const buttons = createButtons();
const table = createTable();
const form = createForm(document.getElementById("formDiv"));




fetch("conf.json").then(r =>r.json()).then(confData => {
    buttons.setDatiTipologie(confData.tipologie)
    buttons.render();

    table.setOrari(confData.orariPrenotazione);
    table.render();

    form.setLabels([["Data ","date"], ["Ora ","int"], ["Nominativo ","text"]]);
    form.render();




    setInterval(() => {table.render()},5000);
});

