let tipologiaCorrente = "Cardiologia";
let data = {};

let upload;
let download;

let dayOffset = 0;

let orari;

fetch("conf.json").then(r =>r.json()).then(confData => {

  orari = confData.orariPrenotazione;

  upload = () => {
    return new Promise(()=>{
       try{
     fetch(confData.url + "set", {
         headers: {
            'Content-Type': 'application/json',
            'key': confData.token
         },
         method: "POST",
         body: JSON.stringify({
            key: "visite",
            value: data
         })
      }).then(r => r.json())
      .then(result => {console.log(result);})
      }
      catch(error){
       reject(error)
      }
    })
 }
 
  download = () => {
    return new Promise((resolve,reject)=>{
      try{
        fetch(confData.url + "get", {
          headers: {
            'Content-Type': 'application/json',
            'key': confData.token
          },
          method: "POST",
          body: JSON.stringify({
            key: "visite"
          })
        }).then(r => r.json())
        .then(data => {resolve(data);})
        }catch(error) {
          reject(error)
        }
    })   
 } 
});