window.onload = function() {
    const form = document.getElementById("greetingform");
    form.addEventListener("submit", submit);
}

// event listener
function submit(event) {
    event.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const user = {
        "firstname":firstname,
        "lastname":lastname
    }
    greet(user);
}

// event listener calls this async function
async function greet(user) {
    const request = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(user)
    }
    const response = await fetch("/greet", request);
    if(response.ok) {
        const greeting = await response.json();
        // display the result
        const greetingheader = document.getElementById("greeting");
        greetingheader.textContent = "Hello " + greeting.greetings;
    } else {
        console.log("Server responded with a status "+response.status);
    }
}