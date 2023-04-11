var input = document.querySelector(".delayed");
input.addEventListener("keypress", function (event) {
  event.preventDefault();
  console.log(event.key);
  setTimeout(function () {
    input.value = input.value + event.key;
  }, Math.random() * (7000 - 1000));
});
