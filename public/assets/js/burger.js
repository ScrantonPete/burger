$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger")
        .val()
        .trim(),
      devoured: 0
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Burger added");
      location.reload();
    });
  });

  $(".eatburger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devouredStatus = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredStatus
    }).then(function() {
      console.log("Burger devoured!");
      location.reload();
    });
  });

  $(".removeburger").on("click", function(event) {
    console.log("I made it");
    event.preventDefault();

    var id = $(this).data("id");
    console.log("id:" + id);
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(location.reload());
  });
});
