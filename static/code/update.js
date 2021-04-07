$(document).ready(function() {

  $('.updateButton').on('click', function() {
    var ur_l = $(this).attr('ur_l');
    var username = $(this).attr('username');
    var first_name = $(this).attr('first_name');
    var last_name = $(this).attr('last_name');
    var email = $(this).attr('email');
    console.log("oh shit" + username + first_name + last_name + email + username);
    $.ajax({
      url: ur_l,
      type: 'POST',
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        username: username
      },
      cache: false,
      dataType: "json"
    });
    console.log("oh shit" + username + first_name + last_name + email + username);



  });

});
