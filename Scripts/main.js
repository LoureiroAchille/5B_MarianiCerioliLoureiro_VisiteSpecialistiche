fetch("conf.json").then(r =>r.json()).then(confData => {
    const buttons = createButtons();
    buttons.setDatiTipologie(confData.tipologie)
    buttons.render();

    const elemform=document.getElementById("formDiv");
    const form = createForm(elemform);
    form.setLabels([["Data ","date"], ["Ora ","int"], ["Nominativo ","text"]]);
    form.render();

    const table = createTable();
    table.setOrari(confData.orariPrenotazione);
    table.render();


    setInterval(() => {table.render()},5000);
});

