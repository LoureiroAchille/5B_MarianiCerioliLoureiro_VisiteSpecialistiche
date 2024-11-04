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
            document.getElementById(tipologie[0]).style.backgroundColor = "gray";
            tipologie.map((tipologia) => {
                document.getElementById(tipologia).onclick = () => {
                    tipologie.map((altriBottoni) => { document.getElementById(altriBottoni).style.backgroundColor = "white"});
                    document.getElementById(tipologia).style.backgroundColor = "gray";
                    datiTabella = cambiaTipologia(tipologia);
                    table.setData(datiTabella);
                    table.render();
                }
            })
        }
    }
}

const createForm=(cuh)=>{
    let data;
    let element=cuh;
    return{
        setLabels: (labels) => { data = labels; },
        render: () => { 
            element.innerHTML=data.map((line)=>`<div>${line[0]}<input id="${line[0]}" type="${line[1]}"></div>`).join("");
            element.innerHTML += `<button type="button" id="annulla"> Annulla </button> <button type="button" id="invia"> Prenota </button>`;  
            document.getElementById("invia").onclick = () => {
                const result = data.map((name) => {return document.getElementById(name[0]).value});
                datiTabella = controllaPrenotazione(result);
                if (datiTabella != -1){
                    table.setData(datiTabella);
                    table.render();
                }
            }          
            document.getElementById("annulla").onclick = () => {
                hide(document.getElementById("formDiv"))
            }
        },        
    };
};


/*

tableData
tablella 5x5
array, con dentro array, ogni array e' una riga.
[[null,data1,data2,data3,data4,data5],[orario,prenotazione1,prenotazione2...]];

*/


const createTable = () => {
    let tableData= [];
    let tableBinding = document.getElementById("tableDiv");
    return {
        setData : (newData) => {
            tableData = newData;
        },
        render: () => {
            
            let line = `<table class="table">` + tableData.map((row) => { 
                return "<tr>" + row.map((element) => "<td>" + element[0] + "</td>").join("") + "</tr>"}).join("");
            tableBinding.innerHTML = line;
            
        }
    }
}