$(document).ready(function () {
  let timer = 5;

  // Assegna setInterval a una variabile per poterlo fermare
  let countdown = setInterval(function () {
    timer = timer - 1;
    $(".score").text(timer);

    // Se vuoi che si fermi:
    if (timer <= 0) {
      clearInterval(countdown);
      $(".score").text("Time in!");
    }
  }, 1000);
});