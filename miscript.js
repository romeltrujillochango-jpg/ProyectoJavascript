function enviar_formulario(){
    let texto = document.getElementById("text").value;

    let radio = document.querySelector('input[name="radio"]:checked').value;

    let checkboxes = document.querySelectorAll('input[name="check"]:checked');
    let check_seleccionados = []

    checkboxes.forEach((a) => {
        check_seleccionados.push(a.value)
    });

    var select = document.getElementById("select").value;
    let lista = [texto, radio, check_seleccionados, select];
    alert(lista.join("\n"));
}

function sumar(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var suma = Number(n1)+Number(n2)+Number(n3);
    document.getElementById("suma").value = suma;
}
function obtener_suma(){
    var a = document.getElementById("suma").value;
    alert(a);
}
function obtener_texto(){
    var a = document.getElementById("h2").textContent;
    alert(a);
}

function agregar(){
    document.getElementById("div1").innerHTML = "Hola <input type='text'>";
}
function aumentar(){
   document.getElementById("div1").append("Hola <br>");
}

function aumentar_con_html (){ //permite aumentar utilizando innerHTML
    document.getElementById("div1").innerHTML += "Hola <input type='text'><br>";
}

function vaciar (){ //vaciar el div
    document.getElementById("div1").innerHTML = "";
}

function eliminar (){ //elimina todo el div
    document.getElementById("div1").remove();
}


document.getElementById("btn_cambiar_fondo").addEventListener("click", function(){
    document.getElementById("midiv").style.backgroundColor = "green";
});

document.getElementById("btn_cambiar_color").addEventListener("click", function(){
    document.getElementById("midiv").style.color= "white";
});

document.getElementById("btn_borde").addEventListener("click", function(){
    document.getElementById("midiv").style.border = "3px solid black";
});

//funciones lambda

document.querySelector("#btn_negrita").onclick = () => {
    document.querySelector("#midiv").style.fontWeight = "bold";
};

document.querySelector("#btn_clase").onclick = () => {
    document.querySelector("#midiv").classList.add("miestilo");
};

document.querySelector("#btn_quitar_clase").onclick = () => {
    document.querySelector("#midiv").classList.remove("miestilo");
};

