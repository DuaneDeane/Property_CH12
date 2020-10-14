var UI = {};

function Property(address,picture,size,beds,baths,parking,price,description){
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
    var address = UI.Address.val();
    var picture = UI.Picture.val();
    var description = UI.Description.val();
    var size = parseInt(UI.Size.val());
    var beds = parseInt(UI.Beds.val());
    var baths = parseInt(UI.Baths.val());
    var parking = UI.Parking.val() == "yes";
    var price = parseFloat(UI.Price.val());

    if(!price) {
        alert("Error, verify the price");
        return;
    }

    if(!size) {
        alert("Error, verify the size");
        return;
    }

    var property = new Property(address,picture,size,beds,baths,parking,price,description)
    console.log(property);

   $.ajax({
       url: "/catalog/SaveProperty",
       type: "POST",
       data: JSON.stringify(property),
       contentType: "application/json",
       success: (res) => {
           console.log(res);
           
           $(".form-control").val('');
       },
       error: (details) => {
            console.log("Error", details);
       }
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
        Price: $("#Price")
    };
}

window.onload = init;