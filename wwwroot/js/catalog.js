
function fetchData(){
    $.ajax({
        url: "/catalog/GetProperties",
        type: "GET",
        success: (data) => {
            console.log(data);
            for(let i=0; i< data.length; i++){
                displayProperty(data[i]);
            }
        },
        error: (details) => {
            console.log("Error, details");
        },
    });
}

function displayProperty(property){
    const bedIcon='<i class="fas fa-bed"></i>';
    const bathIcon='<i class="fas fa-bath"></i>';
    var syntax = `<div class='property'>
        <img src='${property.picture}'>
        <p>${property.price}</p>
        <h5>${property.address}</h5>
        <h6>${property.size}</h6>
        <h6>${bedIcon}${property.beds}</h6>
        <h6>${bathIcon}${property.baths}</h6>
        <h6>${property.description}</h6>
        <h6>${property.parking}</h6>
    </div>`;

    var container = $("#catalog-container");

    container.append(syntax);
}

function init(){
    fetchData();
}

function testDelete() {
    var id = 1;
    $.ajax({
      url: "/catalog/DeleteProperty/" + id,
      type: "DELETE",
      success: () => {
        console.log("deleted");
      },
      error: (details) => {
        console.log("Error", details);
      },
    });
  }

window.onload = init;

// ajax delete /catalog/DeleteProperty/2