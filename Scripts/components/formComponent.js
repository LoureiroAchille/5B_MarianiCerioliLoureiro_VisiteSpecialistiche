const createForm=(cuh)=>{
    let data;
    let callback=console.log;
    let element=cuh;
    return{
        setLabels: (labels) => { data = labels; },
        render: () => { 
            element.innerHTML=data.map((line)=>`<div>${line[0]}<input id="${line[0]}" type="${line[1]}"></div>`).join("");
            element.innerHTML += `<button type="button" id="annulla"> Annulla </button> <button type="button" id="prenota"> Prenota </button>`;  
            document.getElementById("prenota").onclick = () => {
                const result = data.map((name) => {
                    return document.querySelector("#" + name).value;
                });
                callback(result);
            }          
            document.getElementById("annulla").onclick = () => {
                const result = data.map((name) => {
                    return document.querySelector("#" + name).value;
                });
                callback(result);
            }
        },        
    };
};
