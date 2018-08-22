function idGenerator() {
		 this.length = 8;
		 this.timestamp = +new Date;
		 let _getRandomInt = function( min, max ) {
			return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
		 }

		 this.generate = function() {
			 let ts = this.timestamp.toString();
			 let parts = ts.split( "" ).reverse();
			 let id = "";

			 for( let i = 0; i < this.length; ++i ) {
				let index = _getRandomInt( 0, parts.length - 1 );
				id += parts[index];
			 }

			 return id;
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
$(document).ready(function(){
  $( "#birthday" ).datepicker({
     maxDate: '0',
     dateFormat: 'dd/mm/yy',
     }).on('change', function() {
    });
});
$(function() {
  $("#cancel").click(function(){
    window.location.replace("signin.html");
  });
  $("#myFrom").validate ({
    rules: {
      email: {
        required: true,
        email: true
      },
      username: {
        required: true,
        maxlength: 16
      },
      password: {
        minlength: 8
      },
      passwordAgain: {
        minlength: 8,
        equalTo: "#password"
      },
      birthday: {
        date: true
      },
      tele: {
        digits: true
      }
    },
    submitHandler: function(form) {
			let users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
      let getId = new idGenerator();
      let user = {
        id: getId.generate(),
        birthday: $("#birthday").val(),
        username: $("#username").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        firstname: $("#firstname").val(),
        lastname: $("#lastname").val(),
        gender: $("#gender").val(),
        avatar: imageconvert,
        address: '',
        phone: $("#tele").val()
      }
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      window.location.replace("signin.html")
    }
  });
});
