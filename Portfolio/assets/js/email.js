function envoyerEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "oliviergvandal@gmail.com",
        Password : "motdepasse",
        To : 'oliviergvandal@gmail.com',
        From : document.getElementById('email').value,
        Subject : "Contact depuis le site-web",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}