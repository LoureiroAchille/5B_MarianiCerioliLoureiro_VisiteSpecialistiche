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

const createForm=(cuh)=>{
    let data;
    let element=cuh;
    return{
        setLabels: (labels) => { data = labels; },
        render: () => { 
            element.innerHTML=data.map((line)=>`<div>${line[0]}<input id="${line[0]}" type="${line[1]}"></div>`).join("");
            element.innerHTML += `<button type="button" id="annulla"> Annulla </button> <button type="button" id="prenota"> Prenota </button>`;  
            document.getElementById("prenota").onclick = () => {
                const result = data.map((name) => {return document.getElementById(name[0]).value});
                aggiungiPrenotazione(result);
                let datiTabella = elaboraDatiTabella();
                table.setData(datiTabella);
                table.render();
            }          
            document.getElementById("annulla").onclick = () => {
                callback(result);
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
    const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let tableData= [];
    let orari;
    let tableBinding = document.getElementById("tableDiv");
    return {
        setOrari: (newOrari) => {
            orari = newOrari;
        },
        setData : (newData) => {

            tableData = [];
            orari.map((orario) => {
                tableData.push([orario,[],[],[],[],[]]);
            })

            let dateTabella = [""];
            for (let i = 0; i < 5;i++){
                let today = new Date();
                let todayStringISO = today.toISOString().slice(0,10);
                let index = today.getDay() + i;
                if (index > 6) index -= 7;
                let day = weekDay[index];
                dateTabella.push(day);
            }        
            tableData.unshift(dateTabella);

            newData.map((prenotazione) => {
                for (let i = 0; i < 5;i++){
                    let today = new Date();
                    let todayString = today.toISOString().slice(0,10).split("-").join("");
                    if (prenotazione[0] == todayString){
                        tableData[orari.indexOf(prenotazione[2])][i] = prenotazione[2];
                    }
                }
            
            })

        },
        render: () => {
            
            let line = `<table class="table">` + tableData.map((row) => { 
                return "<tr>" + row.map((element) => "<td>" + element + "</td>").join("") + "</tr>"}).join("");
            tableBinding.innerHTML = line;
            
        }
    }
}