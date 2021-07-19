const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    const content = document.getElementById("content");
    const loader = document.getElementById("loader");
    const sended = document.getElementById("sended");

    const data = {
        name,
        email
    };

    const convertData = JSON.stringify(data);

    localStorage.setItem("lead", convertData);

    content.style.display = "none";
    loader.style.display = "block"

    setTimeout(() => {
        loader.style.display = "none";
        sended.style.display = "block"
    }, 2000)

})