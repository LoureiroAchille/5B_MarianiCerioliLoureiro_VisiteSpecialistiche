/*

tableData
tablella 5x5
array, con dentro array, ogni array e' una colonna.
[[HeaderCol1,line1,line2,line3,line4,line5],[HeaderCol2,line1,line2,line3,line4,line5]];

*/

const giorni = {"12":"martedi"};
a = "12";


console.log(giorni.a)



const createTable = () => {
    let tableData; 
    let tableBinding = document.getElementById("table");
    return {
        setData : (newData) => {
            tableData = newData;
        },
        renderTable: () => {
            let line = "<table>" + tableData.map((element,index) => "<tr>");
        }
    }
}