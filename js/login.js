$(function() {
  $("#signup").click(function () {
       window.location.replace("index.html");
   });
  $("#myFrom").validate ({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        minlength: 8
      }
    },
    submitHandler: function(form) {
      let users = JSON.parse(localStorage.getItem("users"));
      users.forEach(function(user) {
        if ($("#email").val() === user.email && $("#password").val() === user.password) {
          window.location.replace("edit.html?email=" + user.email)
        };
      });
    }
  })
})
