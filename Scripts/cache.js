url = "boh"

const download = () => {
    return new Promise((resolve, reject) => {
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