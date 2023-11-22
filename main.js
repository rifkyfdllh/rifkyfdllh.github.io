 <script>
        function checkLogin() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // Contoh validasi, Anda akan menggantinya dengan validasi yang sesuai kebutuhan
            if (username === "contohuser" && password === "contohpassword") {
                window.location.href = "halamanbaru.html";
            } else {
                alert("Login Gagal. Periksa kembali username dan password Anda.");
            }
        }
    </script>