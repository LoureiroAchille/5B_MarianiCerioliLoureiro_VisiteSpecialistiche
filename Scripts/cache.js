let tipologiaCorrente = "Cardiologia";
let data = {};

fetch("conf.json").then(r =>r.json()).then(confData => {

  const upload = () => {
    return new Promise((resolve,reject)=>{
       try{
     fetch(confData.url, {
         headers: {
            'Content-Type': 'application/json',
            'key': confData.token
         },
         method: "POST",
         body: JSON.stringify({
            key: "visite",
            value: value
         })
      }).then(r => r.json())
      .then(r => {
         resolve(r.result);
      })
      }
      catch(error){
       reject(error)
      }
    })
 }
 
 const download = () => {
    return new Promise((resolve,reject)=>{
       try{
       fetch(confData.url, {
          headers: {
             'Content-Type': 'application/json',
             'key': confData.token
          },
          method: "POST",
          body: JSON.stringify({
             key: "visite"
          })
       }).then(r => r.json())
       .then(r => {
          resolve(r.result);
       })
       }catch(error) {
          reject(error)
       }
    })   
 } 
});