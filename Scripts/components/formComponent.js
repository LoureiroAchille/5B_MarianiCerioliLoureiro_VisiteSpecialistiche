const createForm=(element)=>{
    let data;
    let cuh=console.log;
    return{
        setsetLabels: (labels) => { data = labels; },
        render: () => { 
            element.innerHTML = 
                data.map((name) => {
                    return `<div>${name}\n<input id="${name}" type="text" /></div>`;
                }).join('\n')
                + "<button type='button' id='submit'>Submit</button>";  
            document.querySelector("#submit").onclick = () => {
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
