// Your code here ...
let resObj1;
let resObj2;
let resObj3;
let resObj4;
let resObj5;
let initialLoad = false;
let imageLoad_Number = 5;


let loadImages = (i) => {

  let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  if(i > 0) {
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
      let myResult = data.results[0];
      let first_name = capitalizeFirstLetter(myResult.name.first);
      let last_name = capitalizeFirstLetter(myResult.name.last);

      $(`#member-tile${i}`).find('.member-tile-pic').html(`<img src="${myResult.picture.large}" alt="user1-thumb" class="usr-thumb">`);
      $(`#member-tile${i}`).find('.member-tile-details').html(`<span class="member-name">${first_name} ${last_name}</span>
                                                            <span class="member-email">${myResult.email}</span>`);
      i--;
      loadImages(i);
      }

    });
  }
}

$( document ).ready(function() {
  if(initialLoad === false ) {
    loadImages(imageLoad_Number);
    initialLoad = true;
  }

  $("button").click( ( ) => {
    loadImages(imageLoad_Number);
  });



});