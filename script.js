document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;

    fetch("http://localhost:3000/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          document.querySelector(
            ".status"
          ).innerHTML = `<p style="color: green;">${data.message}</p>`;
        } else {
          document.querySelector(
            ".status"
          ).innerHTML = `<p style="color: red;">${data.error}</p>`;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.querySelector(".status").innerHTML =
          '<p style="color: red;">An error occurred. Please try again.</p>';
      });
  });
