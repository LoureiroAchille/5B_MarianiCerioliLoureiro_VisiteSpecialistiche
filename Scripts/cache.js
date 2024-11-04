fetch("conf.json").then(r =>r.json()).then(confData => {
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


 