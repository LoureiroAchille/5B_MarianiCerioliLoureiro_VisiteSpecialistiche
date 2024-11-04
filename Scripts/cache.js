fetch("conf.json").then(r =>r.json()).then(confData => {


  let tipologiaCorrente = "Cardiologia";
  let data = {};

  const download = () => {
    new Promise((resolve, reject) => {
      try {
        fetch(url + "/get",
            {
            method: "POST",
            headers: {"key": "value",},
            })
        .then(response => response.json())
        .then(data => resolve(data))
      } catch (exception) {
        reject(exception);
      }
    });
  } 
});


 