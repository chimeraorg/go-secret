document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const getMessage = document.querySelector("#message");
  console.log(getMessage.value);
});
