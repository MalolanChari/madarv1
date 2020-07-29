class Login{
    constructor(){
        this.message = createElement("h4");
        this.nameBox = createInput("Name");
        this.password = createInput('', 'password');
        this.logInbottun = createButton("Log In");
        this.singnUpbottun = createButton("Sign In")


    }

    display(){
        //this.message.style({"color":"white})
        this.message.position(displayWidth/2,displayHeight-700);
        this.message.html("WELCOME SOLDIER! PLEASE LOG IN");

        this.nameBox.position(displayWidth/2,displayHeight-600);

        this.password.position(displayWidth/2,displayHeight-500)

        this.logInbottun.position(displayWidth/2,displayHeight-400)

        this.singnUpbottun.position(displayWidth/2,displayHeight-350)

    }
}