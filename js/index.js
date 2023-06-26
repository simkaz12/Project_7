const response = fetch('http://localhost:10002/data/marks.json').then((res) => res.json()).then((data) => {console.log(data)});

console.log(response);