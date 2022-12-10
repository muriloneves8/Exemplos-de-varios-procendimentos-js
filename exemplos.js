function A(){
    console.log("A - Voce chamou o procedimento A?");
}

function B(){
    console.log("B - Procedimento B presente, chamou?");
    C();

}

function C(){
    console.log("C - OI, sou o procedimento C, o B me chamou aqui");
}

function D(){
    console.log("D - Sou o procedimento D e chamo todo mundo, veja:");
    A();
    B();
}


A();
B();
D();
