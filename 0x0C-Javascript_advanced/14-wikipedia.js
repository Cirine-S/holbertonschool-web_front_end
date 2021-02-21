function createElement(data) {
  let p = document.createElement("p");
  p.innerHTML = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  let xhr = new XMLHttpRequest();
  let url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  xhr.open("GET", url, true);
  xhr.onload = () => {
    let status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      callback(JSON.parse(xhr.responseText).query.pages[21721040].extract);
    }
  };
  xhr.send();
}

queryWikipedia(createElement);