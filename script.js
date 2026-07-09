document.querySelector("form").addEventListener("submit", async function(e){

    e.preventDefault();

    const inputs = document.querySelectorAll("input");

    const data = {

        firstname: inputs[0].value,
        lastname: inputs[1].value,
        email: inputs[2].value,
        phone: inputs[3].value,
        dob: inputs[4].value,
        bloodgroup: inputs[5].value,
        city: inputs[6].value,
        state: inputs[7].value,
        pincode: inputs[8].value,
        emergency_contact: inputs[9].value,

        gender: document.querySelector('input[name="gender"]:checked')
        ? document.querySelector('input[name="gender"]:checked').parentElement.textContent.trim()
        : "",

        address: document.querySelector("textarea").value

    };

    try{

        const response = await fetch("http://localhost:3000/register",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

        const result = await response.json();

        alert(
            result.message +
            "\nRegistration ID : " +
            result.registrationId
        );

        document.querySelector("form").reset();

    }

    catch(error){

        alert("Server not running.");

        console.log(error);

    }

});