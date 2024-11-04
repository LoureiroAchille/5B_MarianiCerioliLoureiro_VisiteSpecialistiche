const createForm=(element)=>{
    let data;
    let callback=console.log;
    return{
        setLabels: (labels) => { data = labels; },
        render: () => { 
            element.innerHTML = 
                data.map((name) => {
                    return `<div>${name}\n<input id="${name}" type="text" /></div>`;
                }).join('\n')
                + "<button type='button' id='annulla'>Annulla</button><button type='button' id='prenota'>Prenota</button>";  
            document.querySelector("#Prenota").onclick = () => {
                const result = data.map((name) => {
                    return document.querySelector("#" + name).value;
                });
                callback(result);
            }          
        },        
    };
};
