fetch("conf.json").then(r =>r.json()).then(confData => {
    const buttons = createButtons();
    buttons.setDatiTipologie(confData.tipologie)
    buttons.render();

    const elemform=document.getElementById("formDiv");
    const form = createForm(elemform);
    form.setLabels([["Data ","date"], ["Ora ","int"], ["Nominativo ","text"]]);
    form.render();

    const table = createTable();
    table.setData([["","data1","data2","data3","data4","data5"],["orario","prenotazione1","prenotazione2","prenotazione3","prenotazione4","prenotazione5"]])
    table.render();


    setInterval(() => {table.render()},5000);
});

