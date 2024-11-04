const createForm=(element)=>{
    let data;
    let callback=console.log;
    return{
        setLabels: (labels) => { data = labels; },
        render: () => { 
            element.innerHTML=data.map((line)=>`<div>`+ line[0] + `<input id="` + line[0] + `" type="` + line[1] + `"></div>`).join("");
            elemento.innerHTML=+ "<button type='button' id='annulla'>Annulla</button><button type='button' id='prenota'>Prenota</button>";  
            document.querySelector("#prenota").onclick = () => {
                const result = data.map((name) => {
                    return document.querySelector("#" + name).value;
                });
                callback(result);
            }          
            document.querySelector("#annulla").onclick = () => {
                const result = data.map((name) => {
                    return document.querySelector("#" + name).value;
                });
                callback(result);
            }
        },        
    };
};
