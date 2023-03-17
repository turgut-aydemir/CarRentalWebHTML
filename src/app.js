fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {
        let output = document.getElementById('output');
        data.forEach(person => {
            output.innerHTML += `<p>${person.name} (${person.age})</p>`;
        });
    })
    .catch(error => console.error(error));
