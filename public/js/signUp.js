const signupFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  // do we have a signup in routes, i think userRoutes.js
  const response = await fetch("/api/user/signup", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
