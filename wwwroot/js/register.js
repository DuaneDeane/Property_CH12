console.log("top register js");
var UI = {};

function Property(
  address,
  picture,
  size,
  beds,
  baths,
  parking,
  price,
  description
) {
  this.address = address;
  this.beds = beds;
  this.baths = baths;
  this.price = price;
  this.size = size;
  this.picture = picture;
  this.description = description;
  this.parking = parking;
}

function saveProperty() {
  console.log("top saveProperty");
  var address = UI.Address.val();
  var picture = UI.Picture.val();
  var description = UI.Description.val();
  var size = parseInt(UI.Size.val());
  var beds = parseInt(UI.Beds.val());
  var baths = parseInt(UI.Baths.val());
  var parking = UI.Parking.val() == "yes";
  var price = parseFloat(UI.Price.val());

  if (!price || !size) {
    $("#alertError").removeClass("hide");

    setTimeout(() => {
      $("#alertError").addClass("hide");
    }, 3000);
  }

  var property = new Property(
    address,
    picture,
    size,
    beds,
    baths,
    parking,
    price,
    description
  );
  console.log("line 53" + property);

  $.ajax({
    url: "/catalog/SaveProperty",
    type: "POST",
    data: JSON.stringify(property),
    contentType: "application/json",
    success: function (res) {
      console.log(res);

      $("#alertSuccess").removeClass("hide");

      setTimeout(function (res) {
        $("#alertSuccess").addClass("hide");
      }, 3000);

      $(".form-control").val("");
    },
    error: function (details) {
      console.log("Error", details);
    },
  });
}

function init() {
  console.log("register page");

  $("#btnSave").click(saveProperty);

  UI = {
    Address: $("#Address"),
    Picture: $("#Picture"),
    Description: $("#Description"),
    Size: $("#Size"),
    Beds: $("#Beds"),
    Baths: $("#Baths"),
    Parking: $("#Parking"),
    Price: $("#Price"),
  };
}

window.onload = init;
