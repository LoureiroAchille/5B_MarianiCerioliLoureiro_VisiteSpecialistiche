const createForm=(element)=>{
    let data;
    let cuh=console.log;
    return{
        setLabels: (labels) => { data = labels; },
        render: () => { 
            element.innerHTML = 
                data.map((name) => {
                    return `<div>${name}\n<input id="${name}" type="text" /></div>`;
                }).join('\n')
                + "<button type='button' id='annulla'>Annulla</button><button type='button' id='prenota'>Prenota</button>";  
            document.querySelector("#Prenota").onclick = () => {
    //tag 3
                const result = data.map((name) => {
                    return document.querySelector("#" + name).value;
                });
    //biggest
                cuh(result);
            }          
        },        
    };
};
