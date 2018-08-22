// get param from url
let getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
function getImage(){
  bannerImage = $('#avatar').get(0).files[0];
  imageData = getBase64(bannerImage);
};
var imageconvert = '';
function getBase64(file) {
  var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      imageconvert = reader.result;
      $('#preview').attr('src', reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };
$(function() {
  let email = getUrlParameter('email');
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if(users[i].email === email){
      $("#email").val(users[i].email);
      $("#password").val(users[i].password);
      $("#passwordAgain").val(users[i].password);
      $("#username").val(users[i].username);
      $('#preview').attr('src', users[i].avatar);
    }
};

  $("#submit").click(function(){
    for (let i = 0; i < users.length; i++) {
      if(users[i].email === email){
        users[i] = {
          id : users[i].id,
          username: $("#username").val(),
          email: users[i].email,
          password: $("#password").val(),
          firstname: null,
          lastname: null,
          gender: null,
          avatar: imageconvert,
          address: '',
          phone: null
        };
      };
      localStorage.setItem('users', JSON.stringify(users));
    }
    window.location.replace("signin.html");
  });

  $("#cancel").click(function(){
    window.location.replace("signin.html");
  });

  $("#delete").click(function(){
    let result = confirm('Are you sure?');
    if (result){
      for (let i = 0; i < users.length; i++) {
        if(users[i].email === email){
          console.log(users[i]);
          users.splice(i,1);
          break;
        };
      };
      localStorage.setItem('users', JSON.stringify(users));
      window.location.replace("signin.html");
    }
  });
});
