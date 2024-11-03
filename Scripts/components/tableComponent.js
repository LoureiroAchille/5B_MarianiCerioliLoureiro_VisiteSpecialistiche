/*

tableData
tablella 5x5
array, con dentro array, ogni array e' una riga.
[[null,data1,data2,data3,data4,data5],[orario,prenotazione1,prenotazione2...]];

*/

const createTable = () => {
    let tableData;
    let tableBinding = document.getElementById("tableDiv");
    return {
        setData : (newData) => {
            tableData = newData;
        },
        render: () => {
            let line = `<table class="table">` + tableData.map((row,) => { 
                return "<tr>" + row.map((element) => "<td>" + element + "</td>").join("") + "</tr>"}).join("");
            tableBinding.innerHTML = line;
        }
    }
}