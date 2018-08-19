$(function() {
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
      let user = {
        id: users.length,
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
  })
})
