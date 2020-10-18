console.log("top catalog js");

function fetchData() {
  $.ajax({
    url: "/catalog/GetProperties",
    type: "GET",
    success: (data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        displayProperty(data[i]);
      }
    },
    error: (details) => {
      console.log("Error, details");
    },
  });
}

function displayProperty(property) {
  const bedIcon = '<i class="fas fa-bed"></i>';
  const bathIcon = '<i class="fas fa-bath"></i>';
  var syntax = `
      <div class='property'>
        <figure>
          <img src='${property.picture}'>
          <figcaption>$${property.price}</figcaption>
        </figure>
        <dl>
          <dt>${property.address}<dt>
          <dd>${property.size} Sqft</dd>
          <dd>${bedIcon}${property.beds}</dd>
          <dd>${bathIcon}${property.baths}</dd>
          <dd>${property.description}</dd>
          <dd>${property.parking}</dd>
        </dl>
      </div>
      `;

  var container = $("#catalog-container");

  container.append(syntax);
}

function init() {
  fetchData();
}

function testDelete(thisid) {
  var id = thisid;
  console.log("aloha");
  $.ajax({
    url: "/catalog/DeleteProperty/" + id,
    type: "DELETE",
    success: () => {
      console.log("deleted");
    },
    error: (details) => {
      console.log("Error xxxx", details);
    },
  });
}

window.onload = init;

// ajax delete /catalog/DeleteProperty/2
