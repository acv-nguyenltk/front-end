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
      }
    },
    submitHandler: function(form) {
			let users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
      let getId = new idGenerator();
      let user = {
        id: getId.generate(),
        username: $("#username").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        firstname: null,
        lastname: null,
        gender: null,
        avatar: null,
        address: '',
        phone: null
      }
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      window.location.replace("signin.html")
    }
  });
});
