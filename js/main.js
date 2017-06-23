// Your code here ...
let initialLoad = false;
let imageLoad_Number = 5;

let loadImages = () => {
  let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  $.ajax({
    url: `https://randomuser.me/api/?results=${imageLoad_Number}`,
    dataType: 'json'
  }).done( (data) => {
      for(i=0; i < imageLoad_Number; i++) {
        let myResult = data.results[i];
        let first_name = capitalizeFirstLetter(myResult.name.first);
        let last_name = capitalizeFirstLetter(myResult.name.last);

        $(`#member-tile${i+1}`).find('.member-tile-pic').html(`<img src="${myResult.picture.large}" alt="user1-thumb" class="usr-thumb">`);
        $(`#member-tile${i+1}`).find('.member-tile-details').html(`<span class="member-name">${first_name} ${last_name}</span>
                                                              <span class="member-email">${myResult.email}</span>`);
      }
  });

}

$( document ).ready(function() {
  if(initialLoad === false ) {
    loadImages();
    initialLoad = true;
  }

  $("button").click( ( ) => {
    loadImages();
  });

});