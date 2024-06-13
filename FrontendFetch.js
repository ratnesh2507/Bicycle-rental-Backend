fetch('http://localhost:3000/api/bikes')
  .then(res => res.json())
  .then(data => console.log(data));