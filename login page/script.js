<script>
    function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill in all fields");
    return false;
  }
  
  alert("Login successful!\nUsername: " + username + "\nPassword: " + password);
  return true;
}

</script>