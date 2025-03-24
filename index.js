function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(response => response.json())
    .then(data => {
        // Retrieving the new id value
        const newId = data.id;
        
        // Appending the new id value to the DOM
        const body = document.querySelector('body');
        const p = document.createElement('p');
        p.textContent = newId;
        body.appendChild(p);
    })
    .catch(error => {
        // Appending the error message to the DOM
        const body = document.querySelector('body');
        const p = document.createElement('p');
        p.textContent = "Unauthorized Access";
        body.appendChild(p);
    });
}