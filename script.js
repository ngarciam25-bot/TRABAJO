function calcular(){

    let puntos = 0;

    let p1 = document.querySelector('input[name="p1"]:checked');
    let p2 = document.querySelector('input[name="p2"]:checked');
    let p3 = document.querySelector('input[name="p3"]:checked');

    if(p1 && p1.value === "no"){
        puntos++;
    }

    if(p2 && p2.value === "si"){
        puntos++;
    }

    if(p3 && p3.value === "no"){
        puntos++;
    }

    let mensaje = "";

    if(puntos === 3){
        mensaje = "Excelente. Tienes buenos conocimientos de ciberseguridad.";
    }
    else if(puntos >= 2){
        mensaje = "Buen trabajo. Sigue aprendiendo.";
    }
    else{
        mensaje = "Necesitas reforzar tus conocimientos de ciberseguridad.";
    }

    document.getElementById("resultado").innerHTML =
    "Puntaje: " + puntos + "/3<br>" + mensaje;
}