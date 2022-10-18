function sendEmail() {

    var userName = document.getElementById("fname").value
    var userMail = document.getElementById("umail").value


    Email.send({
            Host: "smtp.gmail.com",
            Username: "birdapplication2020@gmail.com",
            Password: "birdapp2020",
            //SecureToken: "0395156b-4433-43dc-85ae-1aca0d8e1460",
            From: "birdapplication2020@gmail.com",
            To: userMail,
            Subject: userName + " gracias por el interes!",
            Body: 'Aqui te dejamos informacion que te podria interesar:<br><br>',
            Attachments: [{
                name: "ParqueBanner.jpg",
                path: "https://drive.google.com/file/d/183NiUjhGencLuIrIArf5MYL9iA6Xv1aH/view?usp=sharing"
            }]
        })
        .then(function (message) {
            alert("Gracias por su colaboracion")
        });
}

