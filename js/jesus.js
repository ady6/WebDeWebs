// Interfaz requerida para realizar peticiones Ajax al servidor.
let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
	let capa = document.getElementById('salida');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			crearTabla();
			cambiarFondo('Principal');
		}
		else {
			capa.innerHTML = "Error AJAX, no se puede obtener la informacion de los coches";
		}
	}
}

function cargarCoches() {
	ajax.open("GET", "recursos_jesus/jesus.json");
    ajax.send();
}

function crearTabla() {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>MODELO</th><th>MATRICULA</th><th>PLAZAS</th><th>COLOR</th><th>PRECIO</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
            obj[i].marca + "<br>" + obj[i].modelo +
            "</td><td>" +
            obj[i].matricula +
            "</td><td>" +
            obj[i].plazas +
            "</td><td>" +
            obj[i].color +
            "</td><td>" +
            obj[i].precio +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}


function filtrarTabla(marcas) {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>MARCA</th><th>MATRICULA</th><th>PLAZAS</th><th>COLOR</th><th>PRECIO</th></tr>";
    var obj = JSON.parse(textJson);
    for (i = 0; i <obj.length; i++) { 
    	if (marcas == obj[i].marca) {
        table += "<tr><td>" +
            obj[i].marca + "<br>" + obj[i].modelo +
            "</td><td>" +
            obj[i].matricula +
            "</td><td>" +
            obj[i].plazas +
            "</td><td>" +
            obj[i].color +
            "</td><td>" +
            obj[i].precio +
            "</td></tr>";
        }
    }
    document.getElementById("demo").innerHTML = table;
}

function cambiarFondo(modelo) {
	if (modelo == 'Principal'){
	document.body.style.backgroundImage = "url('recursos_jesus/imagenes/principal.jpg')";
	}else if (modelo == 'Mercedes') {
	document.body.style.backgroundImage = "url('recursos_jesus/imagenes/mercedes.jpg')";
	}else if (modelo == 'Audi') {
	document.body.style.backgroundImage = "url('recursos_jesus/imagenes/audi.png')";
	}else if (modelo == 'Ferrari') {
	document.body.style.backgroundImage = "url('recursos_jesus/imagenes/ferrari.png')";
	}else if (modelo == 'Lamborghini') {
	document.body.style.backgroundImage = "url('recursos_jesus/imagenes/lamborghini.png')";
	}else if (modelo == 'BMW') {
	document.body.style.backgroundImage = "url('recursos_jesus/imagenes/BMW.jpg')";
	}else {
	document.body.style.backgroundImage = "url('recursos_jesus/imagenes/bugatti.png')";
	}
}