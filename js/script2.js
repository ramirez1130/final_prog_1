var datos = {
	juegos:[
		{
			nombre: "Assasins Creed Unity",
			precio: "$1099",
			img: "img/juego1.jpg",
			info: 'Videojuego de la popular saga de acción y aventuras Assassins Creed destinada en exclusiva a la nueva generación. El título se ambienta en el París del siglo XVIII, recreando con todo lujo de detalles escenarios reales como la Catedral de Notre Dame o el río Sena que recorre la capital gala.'
		},
		{
			id: 2,
			nombre: "Assasins Creed Rogue",
			precio: "$1099",
			img: "img/juego2.jpg",
			info: 'Presentamos Assassins Creed Rogue, el capítulo más oscuro de la franquicia Assassins Creed hasta la fecha. Vivirás en la piel de Shay la lenta transformación que le llevará de ser un Assassin a un cazador de Assassins. Sigue tu propio credo y emprende un extraordinario viaje en el que recorrerás la ciudad de Nueva York, valles y ríos en plena naturaleza salvaje, hasta llegar a las heladas aguas del océano Atlántico Norte en busca de tu gran objetivo: acabar con los Assassins.'
		},
		{
			id: 3,
			nombre: "Far Cry 4",
			precio: "$995",
			img: "img/juego3.jpg",
			info: 'Far Cry 4 es una nueva entrega de esta saga de acción en primera persona, que nos lleva esta vez al Himalaya, a la región de Kyrat, para enfrentarnos a una especie de tirano que se ha proclamado rey de la zona y se comporta de manera brutal con los habitantes. Encarnaremos a Ajay Ghale, que tendrá que viajar a la región de Kyrat para cumplir el último deseo de su madre, viéndose envuelto en la guerra civil que se está librando.'
		},
		{
			id: 4,
			nombre: "PES2015",
			precio: "$1199",
			img: "img/juego4.jpg",
			info: 'PES 2015 se centra en el lema "el campo es nuestro", recreando perfectamente los momentos de nerviosismo y emoción del fútbol de primera categoría. PES 2015 supone el verdadero retorno a los valores fundamentales de PES de control total, mandos muy sensibles y gran jugabilidad, donde el usuario tiene total control sobre la forma en que los jugadores juegan.'
		},
		{
			id: 5,
			nombre: "FIFA15",
			precio: "$1099",
			img: "img/juego5.jpg",
			info: 'Por primera vez, los jugadores tendrán recuerdos y mostrarán emociones en función de la situación del partido. Con más de 600 nuevas reacciones emocionales, ahora los jugadores responden a momentos importantes sobre el césped, como una mala entrada, fallar una oportunidad o un marcar gol histórico, al igual que sucede en la vida real. Todos los partidos serán dinámicos y de máxima intensidad. Los comentarios mejorados se fijarán en las reacciones de los aficionados, mientras que los cánticos y los comportamientos de los hinchas variarán según cuál sea su país, o incluso su club. Las nuevas reacciones desde el banco, las celebraciones de gol entre 10 jugadores y muchas más novedades servirán para mantenerte enganchado todo el encuentro.'
		},
		{
			id: 6,
			nombre: "COD Advance Warface",
			precio: "$1099",
			img: "img/juego6.jpg",
			info: 'Call of Duty: Advanced Warfare es una nueva entrega de la saga de disparos de Activision ambientado en un futuro 40 años en el tiempo en el que los contratistas militares privados se han convertido en los grandes actores de la guerra internacional. El juego cuenta con Kevin Spacey como gran estrella, y nos ofrece armamento futurista, incluyendo exoesqueletos, armaduras y otros elementos de ciencia ficción.' 
		}
	],

	procesadores:[
		{
			"nombre": "FX4350",
			"precio": "$1841",
			"img": "img/proc1.png"
		},
		{
			"nombre": "FX6300",
			"precio": "$1750",
			"img": "img/proc2.png"
		},
		{
			"nombre": "FX8350",
			"precio": "$2890",
			"img": "img/proc3.png"
		}
	],

	mother:[
		{
			"nombre": "Asus M5 A97 Evo",
			"precio": "$1850",
			"img":"img/moth1.png"
		}
	],

	fuentes:[
		{
			"nombre":"Fuente Sentey Bxp 650 Watts",
			"precio":"$719",
			"img":"img/fuen1.png"
		}
	],

	metodoP:[
		{
			"nombre":"VISA",
			"img":"img/visa.png"
		},
		{
			"nombre":"AMERICAN EXPRESS",
			"img":"img/americanexpress.png"
		},
		{
			"nombre":"MASTER CARD",
			"img":"img/mastercard.png"
		}
	]
}

//DECLARACIÓN DE VARIABLES
var carrito = document.getElementById("carrito");
var migas = document.getElementById("migas");
var	posMigas = migas.offsetTop;
var encMigas = migas.getElementsByTagName("h3")[0];
var compra = document.getElementById("compra");
var listaProd = document.getElementById("listProd");
var espacio2 = compra.parentNode;
var juegos = document.getElementById("juegos");
var procesadores = juegos.cloneNode(true);
var motherboards = juegos.cloneNode(true);
var fuentes = juegos.cloneNode(true);
	procesadores.id = 'procesadores';
	procesadores.style.display = "none";
	motherboards.id = 'motherboards';
	motherboards.style.display = "none";
	fuentes.id = 'fuentes';
	fuentes.style.display = "none";
var categorias = document.getElementById("categorias").getElementsByTagName("li");
var btnver = document.getElementsByTagName('section')[0].getElementsByTagName('a')[0];
var spanCompra = compra.getElementsByTagName("span");
var cantp = 0; // Cantidad de productos seleccionados
var total = 0; //total a pagar sin contar cantidad
var totalPagar = 0; //total a pagar contando cantidades
var mouseMov = listaProd.getElementsByTagName("img");
var deg = 0; // control de grados en el efecto de las imagenes


//DECLARACIÓN DE FUNCIONES

function get_scroll( ){
	return window.pageYOffset || document.documentElement.scrollTop;
}

function prevenir(event){
	return event.preventDefault() ;
}

function totalProd(){
	this.parentNode.nextSibling.innerHTML = (this.parentNode.previousSibling.innerHTML)*(this.value);
	totalPagar = 0;
	var precios = document.getElementsByClassName("total");
	for(var i=0;i<precios.length;i++){
		var cantidad = precios[i].parentNode.getElementsByTagName("td")[3].getElementsByTagName("input")[0].value;
		var suma = parseInt(precios[i].innerHTML);
		var precioT = cantidad*suma;
		totalPagar = totalPagar + precioT;
		document.getElementById("showT").innerHTML = "Total: $" + totalPagar;
	}
}

//Funcion para tener contantemente contado el total en la instancia de check
function pagoTotal(){
	var precios = document.getElementsByClassName("total");
	totalPagar = 0;
	for(var i=0;i<precios.length;i++){
		var cantidad = precios[i].parentNode.getElementsByTagName("td")[3].getElementsByTagName("input")[0].value;
		var suma = parseInt(precios[i].innerHTML);
		totalPagar = totalPagar + (suma * cantidad);
		document.getElementById("showT").innerHTML = "Total: $" + totalPagar;
	}
}

//Funcion para crear fondos cada vez que uso una ventana modal
function crearFondo(){
	removeBanner();

	var fondo = document.createElement("div");
		fondo.id = "fondoModal";
		fondo.style.width = '100%'; 
		fondo.style.height = '100%';
		fondo.style.position = 'fixed';
		fondo.style.top = '0';
		fondo.style.left = '0';
		fondo.style.zIndex = '2';
		fondo.style.background = 'rgba(0,0,0,0.7)';

	document.body.appendChild(fondo);
	document.getElementsByTagName("html")[0].style.overflow = "hidden";
	
	fondo.onclick = function(){
		if(document.getElementById("alerta")){
			this.parentNode.removeChild(document.getElementById("alerta"));
			this.parentNode.removeChild(this);
			document.getElementsByTagName("html")[0].style.overflow = "auto";
		}
		if(document.getElementById("prodModal")){
			document.body.removeChild(document.getElementById("prodModal"));
			document.body.removeChild(this);
			document.getElementsByTagName("html")[0].style.overflow = "auto";
		}
	}
}

//Funcion para crear la ventana modal al hacer click a la imagen de un producto.
function prodModal(elemento,categoria,descripcion){
	console.log(elemento);
	console.log(categoria);
	console.log(descripcion);
	var cont = document.createElement("div");
		cont.id = "prodModal";
		cont.className = "col-lg-10 col-lg-offset-1";
		cont.style.position = "fixed";
		cont.style.top = "10%";
		cont.style.padding = "15px";
		cont.style.zIndex = "5";
		cont.style.background = "white";

	var img = document.createElement('img');
		img.src = elemento.parentNode.getElementsByTagName("img")[0].src;
		img.width = '300';
		img.height = '450';

	var titulo = document.createElement("h4");
	titulo.innerHTML = elemento.parentNode.getElementsByTagName('h4')[0].innerHTML;

	var descripcion = document.createElement("p");
		descripcion.innerHTML = datos[categoria][elemento.id].info;
	console.log(descripcion);
	crearFondo();
	document.body.appendChild(cont);
	cont.appendChild(img);
	cont.appendChild(titulo);
}

//Funcion para eliminar productos de la tabla generada en el paso1 del check
function eliminar(){
	//Restar el total del producto a la muestra en pantalla
	var precio = this.parentNode.parentNode.getElementsByClassName("total")[0].innerHTML;
	var cantidad = this.parentNode.parentNode.getElementsByTagName("input")[0].value;
	var precioT = precio*cantidad;
	totalPagar = totalPagar - precioT;
	document.getElementById("showT").innerHTML = "Total: $" + totalPagar;

	var padre = this.parentNode.parentNode.parentNode;
	var hijo = this.parentNode.parentNode;
	var elementos = document.getElementsByClassName("agregado");
	var line = document.getElementsByTagName("tbody")[0].getElementsByTagName("hr");
	var altDel = this.parentNode.parentNode.getElementsByTagName("td")[1].innerHTML;
	var indice = parseInt(hijo.className.slice(3));
	padre.removeChild(hijo);
	for(var i=0;i<line.length;i++){
		if(line[i].className.slice(1) == indice){
			padre.removeChild(line[i]);
		}
	}
	
	for(var i=0;i<elementos.length;i++){
		var imagen = elementos[i].getElementsByTagName("a")[0].getElementsByTagName("img")[0];
		var botonCambiar = elementos[i].getElementsByTagName("a")[1];
		var precio = elementos[i].getElementsByTagName("h5")[0].innerHTML.slice(1);
		if(imagen.alt == altDel){
			elementos[i].removeAttribute("class");
			botonCambiar.style.backgroundPosition = "0 0";
			botonCambiar.removeEventListener("click",quitarCarrito);
			botonCambiar.addEventListener("click",agregarCarrito);

			total = total - precio;;
			cantp = cantp - 1;
			spanCompra[0].innerHTML = 'Cantidad de productos:' + cantp;
			spanCompra[1].innerHTML = 'Total a pagar: $' + total;
		}
	}
	
	if(elementos.length == 0){
		var tabla = carrito.getElementsByTagName("table")[0];
		carrito.removeChild(tabla);
		listaProd.style.display = "inline-block";
		espacio2.style.display = "inline-block";
		encMigas.innerHTML = "Productos";
		carrito.removeChild(carrito.getElementsByTagName("div")[0]);
		migas.removeChild(migas.getElementsByTagName("span")[0]);
		encMigas.style.marginLeft = "5%";
		window.scrollTo( 0, posMigas );
	}
}

//Funcion para validar campos de formulario
function validarForm(){
	if(this.value == ''){
		this.style.border = "1px solid #843534";
		this.placeholder = "Campo Requerido";
	}
	
	if(this.type == 'tel' && isNaN(this.value)){
		this.style.border = "1px solid #843534";
		this.style.color = "#843534";
		this.value = "";
		this.placeholder = "Ingresa un valor númerico";
	}
	this.onfocus = function(){
		this.style.border = "1px solid #ccc";
		this.style.color = "#555";
		this.placeholder = '';
	}
}

function proceder(){
	var comprados = document.getElementsByClassName("agregado");
	window.scrollTo( 0, posMigas );
	if(comprados.length == 0){
		var alerta = document.createElement("div");
			alerta.id = "alerta";
			alerta.style.textAlign = "center";
			alerta.style.zIndex = "5";
			alerta.style.width = "400px";
			alerta.style.position = "fixed";
			alerta.style.top = "20%";
			alerta.style.marginLeft = "50%";
			alerta.style.left = "-200px";
			alerta.style.background = "rgba(234,30,40,0.5)";
			alerta.style.border = "2px solid white"
			alerta.style.padding = "5px";
		var span = document.createElement("span");
			span.innerHTML = "No agrego ningún producto al carrito.";
			span.style.fontSize = "1.75rem";
			span.style.color = "white";
			span.style.display = "inline-block";
			span.style.verticalAlign = "middle";
		var aimg = document.createElement("img");
			aimg.src = "img/alerta.png";
			aimg.alt = "Alerta";
		crearFondo();
		document.body.appendChild(alerta);
		alerta.appendChild(span);
		alerta.appendChild(aimg);

	}else{
		removeBanner();
		var step = document.createElement("span");
			step.innerHTML = "Pasos";
			step.style.background = "url(img/pasos.png) no-repeat";
			step.style.width = "55px";
			step.style.height = "55px";
			step.style.marginLeft = "5%";
			step.style.marginRight = "1%";
			step.style.overflow = "hidden";
			step.style.display = "inline-block";
			step.style.textIndent = "-9999px";
			step.style.verticalAlign = "middle";
		
		migas.insertBefore(step,encMigas);
		encMigas.style.marginLeft = "0";
		encMigas.innerHTML = "Datos del titular.";

		listaProd.style.display = "none";
		espacio2.style.display = "none";

		var tabla = document.createElement("table");
			tabla.style.fontSize = "1.65rem";
			tabla.style.marginTop = "20px";
			tabla.className = "col-lg-8";
		var head = document.createElement("thead");
		var body = document.createElement("tbody");
		var filaTitulos = document.createElement("tr");
			filaTitulos.style.textAlign = "left";
		var tituloProd = document.createElement("th");
		var tituloPrecio = document.createElement("th");
		var tituloCant = document.createElement("th");
		var tituloTotal = document.createElement("th");
		var tituloDel = document.createElement("th");
		var separador0 = document.createElement("hr");
			separador0.color = "#B6B8BA";
//			separador0.width = "55%";

			tituloProd.innerHTML = "Producto";
			tituloProd.colSpan = "2";
			tituloPrecio.innerHTML = "Precio($)";
			tituloCant.innerHTML = "Cantidad";
			tituloTotal.innerHTML = "Total($)";

			carrito.appendChild(tabla);
			tabla.appendChild(head);
			tabla.appendChild(body)
			head.appendChild(filaTitulos);
			head.appendChild(separador0);
			filaTitulos.appendChild(tituloProd);
			filaTitulos.appendChild(tituloPrecio);
			filaTitulos.appendChild(tituloCant);
			filaTitulos.appendChild(tituloTotal);
			filaTitulos.appendChild(tituloDel);

		//Lista de productos que voy a comprar
		for(var i=0;i<comprados.length;i++){
			var nuevaFila = document.createElement("tr");
				nuevaFila.className = "col"+[i];
				nuevaFila.style.textAlign = "left";
			var sourceMini = comprados[i].getElementsByTagName("a")[0].getElementsByTagName("img")[0].src;
			var miniImagen = document.createElement("img");
				miniImagen.src = sourceMini;
				miniImagen.width = "98";
				miniImagen.height = "139";
				miniImagen.style.borderRadius = "5px"
			var colProd = comprados[i].getElementsByTagName("h4")[0].innerHTML;
			var colPrecio = parseInt(comprados[i].getElementsByTagName("h5")[0].innerHTML.slice(1));
			var cantidad = document.createElement("input");
				cantidad.className = "cantidad";
				cantidad.value = "1";
				cantidad.min = "1";
				cantidad.max = "3"
				cantidad.type = "number";
				cantidad.name = "cantidad";
				cantidad.style.width = "60%";
				cantidad.style.height = "25%";
				cantidad.style.textAlign = "center";
				cantidad.addEventListener("change",totalProd);
			var imagenDel = document.createElement("a");
				imagenDel.innerHTML = "Eliminar";
				imagenDel.className = "del";
				imagenDel.href = "#";
				imagenDel.style.background = "url(img/basura.png) no-repeat";
				imagenDel.style.backgroundPosition = "0 0";
				imagenDel.style.width = "45px";
				imagenDel.style.height = "96px";
				imagenDel.style.overflow = "hidden";
				imagenDel.style.display = "block";
				imagenDel.style.textIndent = "-9999px";
				imagenDel.addEventListener("click",prevenir);
				imagenDel.addEventListener("click",eliminar);
				imagenDel.onmouseover = function(){
					var position = this.style.backgroundPosition;
					if(position == "0px 0px"){
						this.style.backgroundPosition = "-51px 0";
					}
				}
				imagenDel.onmouseout = function(){
					var position = this.style.backgroundPosition;
					if(position == "-51px 0px"){
						this.style.backgroundPosition = "0px 0px";
					}
				}
			var separador = document.createElement("hr");
				separador.className = "s"+[i];
				separador.style.display = "inline-block";
				separador.style.color = "#B6B8BA";

			var col1 = document.createElement("td"); //Nombre
				col1.innerHTML = colProd;
			var colImg = document.createElement("td");//Imagen
			var col2 = document.createElement("td");//Precio
				col2.innerHTML = colPrecio;
				col2.className = "total";
			var col3 = document.createElement("td");//Cantidad
				col3.style.textAlign = "center";
			var col4 = document.createElement("td");//Total
				col4.innerHTML = colPrecio;
			var col5 = document.createElement("td");//Eliminar

				
				body.appendChild(nuevaFila);
				body.appendChild(separador);
				nuevaFila.appendChild(colImg);
				nuevaFila.appendChild(col1);
				nuevaFila.appendChild(col2);
				nuevaFila.appendChild(col3);
				nuevaFila.appendChild(col4);
				nuevaFila.appendChild(col5);
				col3.appendChild(cantidad);
				col5.appendChild(imagenDel);
				colImg.appendChild(miniImagen);
		}

		//Formulario
		var contForm = document.createElement("div"); //Contenedor del formulario
			contForm.id = "formulario";
			contForm.style.border = "3px solid #B6B8BA";
			contForm.style.display = "inline-block";
			contForm.style.verticalAlign = "top";
			contForm.style.padding = "20px";
			contForm.style.boxSizing = "border-box";
			contForm.style.background = "white";
			contForm.className = "col-lg-4";	
		var titulo = document.createElement("h2");
			titulo.style.fontSize = "2rem";
			titulo.style.borderBottom = "1px solid #E1E2E3";
			titulo.style.paddingBottom = "1%";
			titulo.innerHTML = "Datos del Titular";
		var showT = document.createElement("span");
			showT.id = "showT";
			showT.innerHTML = "Total:";
			showT.style.position = "absolute";
			showT.style.top = "20px";
			showT.style.right = "20%";
			showT.style.fontSize = "2rem";
			showT.style.fontWeight = "bold";
		var formulario = document.createElement("form");
			formulario.id = "dt"; //Datos del titular
			formulario.method = "post";
			formulario.style.marginTop = "4%";
			formulario.autocomplete = "off";
			//Proseguir con la compra al paso 2
			formulario.addEventListener("submit",prevenir); 
			formulario.onsubmit = function(){
				localStorage.nombre = document.getElementById("nombre").value;
				formulario.style.display = "none";
				//Bloquear la modificacion de cantidades y eliminacion de productos
				var itn = document.getElementsByClassName("cantidad");//Todos los inputs que modifican cantidad
				var idel = document.getElementsByClassName("del"); // Todas las imagenes para eliminar productos en el check
				for(var i=0;i<itn.length;i++){
					itn[i].disabled = "disabled";
					idel[i].style.backgroundPosition = "-100px 0";
					idel[i].removeEventListener("click",eliminar);
				}
				//Creo el segundo formulario en el que se va a seleccionar el metodo de pago
				var formMetodoPago = formulario.cloneNode(false);
					formMetodoPago.id = "fp";//Forma de pago
					formMetodoPago.style.display = "block";
					formMetodoPago.addEventListener("submit",prevenir);
					//Proseguir con la compra al paso 3
					formMetodoPago.onsubmit = function(){
						formMetodoPago.style.display = "none";
						var formulario3 = formMetodoPago.cloneNode(false);
							formulario3.id = "pg"; // Pago
							formulario3.style.display = "block";

							formulario3.onsubmit = function(e){
								e.preventDefault();
								//Borrar todos los items agregados
								var itemsAgregados = document.getElementsByClassName("agregado");
								console.log(itemsAgregados)

								for(var i=0;i<itemsAgregados.length;i++){
									var botonA = itemsAgregados[i].getElementsByTagName("a")[1];
										botonA.style.backgroundPosition = "0px 0px";
										botonA.addEventListener("click",agregarCarrito);
										botonA.removeEventListener("click",quitarCarrito);
									//itemsAgregados[i].removeAttribute("class");
									itemsAgregados[i].className = "col-lg-3 col-lg-offset-1";
								}

								var tabla = carrito.getElementsByTagName("table")[0];
								carrito.removeChild(tabla);
								listaProd.style.display = "inline-block";
								espacio2.style.display = "inline-block";
								encMigas.innerHTML = "Productos";
								carrito.removeChild(carrito.getElementsByTagName("div")[0]);
								migas.removeChild(migas.getElementsByTagName("span")[0]);
								encMigas.style.marginLeft = "5%";
								window.scrollTo( 0, posMigas );
								spanCompra[0].innerHTML = 'Cantidad de productos: 0';
								spanCompra[1].innerHTML = 'Total a pagar: $0';
							}
						contForm.appendChild(formulario3);
						step.style.backgroundPosition = "-112px 0";
						encMigas.innerHTML = "Pago";
						var div = new Array(4);
						var label = new Array(4);
						var ndato = new Array(4);
						var dato = new Array(4);
						for(var i=0;i<dato.length;i++){
							div[i] = document.createElement("div");
							div[i].style.width = "50%";
							div[i].style.display = "inline-block";
							div[i].style.marginTop = "3%";
							label[i] = document.createElement("label");
							dato[i] = document.createElement("input");
							dato[i].required = "required";
							dato[i].borderRadius = "2px";
							dato[i].style.padding = "5px";
							dato[i].style.fontSize = "1.5rem";
							dato[i].style.marginTop = "1%";
							dato[i].style.display = "block";
							dato[i].style.border = "1px solid #ccc";
							dato[i].style.color = "#555";
							ndato[i] = document.createElement("span");
							ndato[i].style.fontSize = "1.75rem";
							switch(i){
								case 0:
									ndato[i].innerHTML = "Titular de la Tarjeta";
									dato[i].type = "text";
									dato[i].value = localStorage.nombre;
									dato[i].disabled = "disabled";
								break;
								case 1:
									ndato[i].innerHTML = "Número de la Tarjeta";
									dato[i].type = "number";
								break;
								case 2:
									ndato[i].innerHTML = "Fecha de Vencimiento";
									dato[i].type = "date";
									dato[i].placeholder = "Formato MMAA";
									dato[i].style.width = "90%";
								break;
								case 3:
									ndato[i].innerHTML = "Código de Seguridad";
									dato[i].type = "text";
								break;
							}
							formulario3.appendChild(div[i]);
							div[i].appendChild(label[i]);
							label[i].appendChild(ndato[i]);
							label[i].appendChild(dato[i]);
						}
						var atras = document.createElement("a");
							atras.innerHTML = "Atras";
							atras.href = "#";
							atras.style.color = "#016ab3";
							atras.style.display = "inline-block";
							atras.style.marginLeft = "2%";
							atras.style.fontSize = "1.5rem";
							atras.onclick = function(e){
								e.preventDefault();
								contForm.removeChild(formulario3);
								formMetodoPago.style.display = "block";
								for(var i=0;i<itn.length;i++){
									itn[i].disabled = "";
									idel[i].style.display = "inline-block";
									idel[i].style.backgroundPosition = "0px 0px";
									idel[i].addEventListener("click",eliminar);
								}
							}
						var comprar = document.createElement("input");
							comprar.type = "submit";
							comprar.value = "Comprar";
							comprar.style.background = "#69bc50";
							comprar.style.border = "2px solid #69bc50";
							comprar.style.color = "#fff";
							comprar.style.fontSize = "2rem";
							comprar.style.borderRadius = "3px";
							comprar.style.padding = "6px 30px";
							comprar.style.display = "inline-block";
							comprar.style.marginTop = "3%";
						formulario3.appendChild(comprar);
						formulario3.appendChild(atras);
					}

				contForm.appendChild(formMetodoPago);
				step.style.backgroundPosition = "-55px 0";
				encMigas.innerHTML = "Forma de pago";

				titulo.innerHTML = "Metodo de Pago";
				for(var i=0;i<datos["metodoP"].length;i++){
					var div = document.createElement("div");
						div.style.display = "inline-block";
						div.style.margin = "0 5px 5px";
					var label = document.createElement("label");
					var input = document.createElement("input");
						input.type = "radio";
						input.required = "required";
						input.name = "Metodo de pago";
						input.value = datos["metodoP"][i].nombre;
						input.style.verticalAlign = "top";
						input.style.margin = "10px 2px 0";
					var img = document.createElement("img");
						img.src = datos["metodoP"][i].img;
						img.alt = datos["metodoP"][i].nombre;
					formMetodoPago.appendChild(div);
					div.appendChild(label);
					label.appendChild(input);
					label.appendChild(img);
				}
				var select = document.createElement("select");
					select.style.padding = "7px"
					select.style.marginTop = "3%";
					select.style.display = "block";
				var smp = document.createElement("h3"); //Seleccionar metodo de pago
					smp.innerHTML = "Seleccione la cantidad de cuotas";
					smp.style.marginTop = "2%";
					smp.style.fontSize = "1.5rem";
				var atras = document.createElement("a");
					atras.innerHTML = "Atras";
					atras.href = "#";
					atras.style.color = "#016ab3";
					atras.style.display = "inline-block";
					atras.style.marginLeft = "2%";
					atras.style.fontSize = "1.5rem";
					atras.onclick = function(e){
						e.preventDefault();
						contForm.removeChild(formMetodoPago);
						formulario.style.display = "block";
						for(var i=0;i<itn.length;i++){
							itn[i].disabled = "";
							idel[i].style.display = "inline-block";
							idel[i].style.backgroundPosition = "0px 0px";
							idel[i].addEventListener("click",eliminar);
						}
					}
				var continuar = document.createElement("input");
				continuar.type = "submit";
				continuar.value = "Continuar";
				continuar.style.background = "#343434";
				continuar.style.border = "2px solid #343434";
				continuar.style.color = "#fff";
				continuar.style.fontSize = "2rem";
				continuar.style.borderRadius = "3px";
				continuar.style.padding = "6px 20px";
				continuar.style.display = "inline-block";
				continuar.style.marginTop = "3%";
				
				for(var i=1;i<13;i++){
					var option = document.createElement("option");
					var cuotas = parseInt(totalPagar / i);
						option.innerHTML = i + " cuotas de $" + cuotas;
					select.appendChild(option); 
				}
				formMetodoPago.appendChild(smp);
				formMetodoPago.appendChild(select);
				formMetodoPago.appendChild(continuar);
				formMetodoPago.appendChild(atras);
			}

		var divsIn = new Array(9); //Divs para los inputs
		var label = new Array(9);

		//Span y inputs con varias lineas de codigo de corrido para minimizar el codigo.
		var spans = new Array(9);
			spans[0] = document.createElement("span");
			spans[0].innerHTML = "Nombre:";
			spans[1] = document.createElement("span");
			spans[1].innerHTML = "Apellido:";
			spans[2] = document.createElement("span");
			spans[2].innerHTML = "Email:";
			spans[3] = document.createElement("span");
			spans[3].innerHTML = "Documento:";
			spans[4] = document.createElement("span");
			spans[4].innerHTML = "Ciudad o Barrio:";
			spans[5] = document.createElement("span");
			spans[5].innerHTML = "Calle:";
			spans[6] = document.createElement("span");
			spans[6].innerHTML = "Altura:";
			spans[7] = document.createElement("span");
			spans[7].innerHTML = "Cód.Postal:";
			spans[7].style.display = "block";
			spans[8] = document.createElement("span");
			spans[8].innerHTML = "Acepto los términos y condiciones de la compra.";
		var inputs = new Array(10);
			inputs[0] = document.createElement("input");inputs[0].type = "text";inputs[0].name = "Nombre";inputs[0].required = "required";inputs[0].style.display = "block";inputs[0].autofocus = "autofocus";inputs[0].id = "nombre";
			inputs[1] = document.createElement("input");inputs[1].type = "text";inputs[1].name = "Apellido";inputs[1].required = "required";inputs[1].style.display = "block";
			inputs[2] = document.createElement("input");inputs[2].type = "email";inputs[2].name = "E-mail";inputs[2].required = "required";inputs[2].style.display = "block";
			inputs[3] = document.createElement("input");inputs[3].type = "tel";inputs[3].name = "Documento";inputs[3].required = "required";inputs[3].style.display = "block";
			inputs[4] = document.createElement("input");inputs[4].type = "text";inputs[4].name = "Barrio";inputs[4].required = "required";inputs[4].id = "barrio";
			inputs[5] = document.createElement("input");inputs[5].type = "text";inputs[5].name = "Calle";inputs[5].required = "required";
			inputs[6] = document.createElement("input");inputs[6].type = "text";inputs[6].name = "Altura";inputs[6].required = "required";
			inputs[7] = document.createElement("input");inputs[7].type = "tel";inputs[7].name = "Codigo Postal";inputs[7].required = "required";
			inputs[8] = document.createElement("input");inputs[8].type = "checkbox";inputs[8].name = "Terminos";inputs[8].required = "required";
			inputs[8].onclick = function(){
				if(this.checked == true){
					var inputs = document.getElementsByTagName("form")[0].getElementsByTagName("input");
					var submit = inputs[inputs.length-1];
						submit.disabled = "";
						submit.style.opacity = "1";
				}else{
					var inputs = document.getElementsByTagName("form")[0].getElementsByTagName("input");
					var submit = inputs[inputs.length-1];
						submit.disabled = "disabled";
						submit.style.opacity = "0.5";
				}
			}

			inputs[9] = document.createElement("input");inputs[9].type = "submit";inputs[9].value = "Continuar";
			inputs[9].style.background = "#343434";
			inputs[9].style.border = "2px solid #343434";
			inputs[9].style.color = "#fff";
			inputs[9].style.fontSize = "2rem";
			inputs[9].style.borderRadius = "3px";
			inputs[9].style.opacity = "0.5";
			inputs[9].disabled = "disabled";
		
		var spanSelect = document.createElement("span");spanSelect.innerHTML = "Fecha de Nacimiento:";spanSelect.style.fontSize = "1.75rem";
		var select1 = document.createElement("select");select1.name = "Dia";select1.required = "required";select1.style.display = "inline-block";select1.style.padding = "5px";
		var select2 = document.createElement("select");select2.name = "Mes";select2.required = "required";select2.style.display = "inline-block";select2.style.padding = "5px";select2.style.margin = "0 2%";
		var select3 = document.createElement("select");select3.name = "Año";select3.required = "required";select3.style.display = "inline-block";select3.style.padding = "5px";
		var fecha = document.createElement("div");
			fecha.style.display = "block";
			fecha.appendChild(select1);
			fecha.appendChild(select2);
			fecha.appendChild(select3);
		var fechaC = document.createElement("div");
			fechaC.style.display = "inline-block";
			fechaC.style.width = "100%";
			fechaC.style.marginTop = "3%";
			fechaC.appendChild(spanSelect);
			fechaC.appendChild(fecha);

		//Fors para los select
		for(var i=1;i<32;i++){
			if(i<13){
				var option = document.createElement("option");
					option.value = "Dia "+[i];
					option.innerHTML = [i];
				select1.appendChild(option);
				var option2 = document.createElement("option");
					option2.value = "Mes "+[i];
					option2.innerHTML = [i];
				select2.appendChild(option2);
			}else{
				var option = document.createElement("option");
					option.value = "Dia "+[i];
					option.innerHTML = [i];
				select1.appendChild(option);
			}
		}
		for(var i=1900;i<=1995;i++){
			var option = document.createElement("option");
				option.value = "Año "+[i];
				option.innerHTML = [i];
			select3.appendChild(option);
		}

		carrito.appendChild(contForm);
		contForm.appendChild(titulo);
		contForm.appendChild(showT);
		contForm.appendChild(formulario);

		/* Funcion para que muestre el total a pagar de los productos
		La razon por la que esta aca es porque hay que esperar a que este
		creado el span showT*/
		pagoTotal(); 

		for(var i=0;i<divsIn.length;i++){
			inputs[i].addEventListener('blur',validarForm);
			inputs[i].borderRadius = "2px";
			inputs[i].style.padding = "5px";
			inputs[i].style.fontSize = "1.5rem";
			inputs[i].style.marginTop = "1%";
			inputs[i].style.display = "block";
			inputs[i].style.border = "1px solid #ccc";
			inputs[i].style.color = "#555";
			divsIn[i] = document.createElement("div");
			divsIn[i].style.width = "50%";
			divsIn[i].style.display = "inline-block";
			divsIn[i].style.marginTop = "3%";
			label[i] = document.createElement("label");

			if(i == divsIn.length-1){
				//Un boton para continuar comprando
				inputs[i].style.display = "inline-block";
				spans[i].style.display = "inline-block";
				divsIn[i].style.width = "100%";
				spans[i].style.fontSize = "1.45rem";
				formulario.appendChild(divsIn[i]);
				divsIn[i].appendChild(label[i]);
				label[i].appendChild(inputs[i]);
				label[i].appendChild(spans[i])
				inputs[i].style.marginTop = "4%";
				//Ponemos el boton Enviar
				formulario.appendChild(inputs[i+1]);
				inputs[i+1].style.padding = "6px 20px";
				inputs[i+1].style.marginTop = "3%";
				var continuarC =  document.createElement("a");
					continuarC.style.color = "#016ab3";
					continuarC.style.display = "inline-block";
					continuarC.style.marginLeft = "2%";
					continuarC.style.fontSize = "1.5rem";
					continuarC.href = "#";
					continuarC.innerHTML = "Continuar Comprando.";
					formulario.appendChild(continuarC);
					continuarC.onclick = function(e){
						e.preventDefault();
						//check = 0; k = 0;
						var tabla = carrito.getElementsByTagName("table")[0];
						carrito.removeChild(tabla);
						listaProd.style.display = "inline-block";
						espacio2.style.display = "inline-block";
						encMigas.innerHTML = "Productos";
						carrito.removeChild(carrito.getElementsByTagName("div")[0]);
						migas.removeChild(migas.getElementsByTagName("span")[0]);
						encMigas.style.marginLeft = "5%";
						window.scrollTo( 0, posMigas );
					}
			}else{
				formulario.appendChild(divsIn[i]);
				divsIn[i].appendChild(label[i]);
				label[i].appendChild(spans[i]);
				label[i].appendChild(inputs[i]);
				spans[i].style.fontSize = "1.75rem";
				if(i == 4){
					divsIn[i].style.display = "block";
					divsIn[i].style.width = "100%";
					inputs[i].style.width = "90%";
				}
				if(i == 7){
					divsIn[i].style.width = "100%";
					inputs[i].style.width = "20%";
					inputs[i].style.display = "inline-block";
					var cp = document.createElement("a");
						cp.href = "http://www.correoargentino.com.ar/formularios/cpa";
						cp.innerHTML = "Averiguar mi Código Postal";
						cp.style.color = "#016ab3";
						cp.style.display = "inline-block";
						cp.style.marginLeft = "2%";
						cp.style.marginTop = "1%";
						cp.style.fontSize = "1.5rem";
						cp.target = "_blank";
					divsIn[i].appendChild(cp);
				}
			}
		}
		/*Agregar el div con los selects esta posicionado aca porque habia que esperar que se cree el input con id #barrio*/
		var antes = document.getElementById("barrio").parentNode.parentNode;
		formulario.insertBefore(fechaC,antes);

	}
}

function agregarCarrito(){
	this.parentNode.className = 'agregado col-lg-3 col-lg-offset-1';
	this.removeEventListener("click",agregarCarrito);
	this.addEventListener("click",quitarCarrito);
	this.style.backgroundPosition = '0 -100px';

	var precio = parseInt(this.previousSibling.innerHTML.slice(1));
		total = total + precio;;
		cantp = cantp + 1;
		spanCompra[0].innerHTML = 'Cantidad de productos:' + cantp;
		spanCompra[1].innerHTML = 'Total a pagar: $' + total;
		this.style.backgroundPosition = '0 -100px';
}

function quitarCarrito(){
	this.parentNode.className = "col-lg-3 col-lg-offset-1";
	this.removeEventListener("click",quitarCarrito);
	this.addEventListener("click",agregarCarrito);
	this.style.backgroundPosition = '0 0';

	var precio = parseInt(this.previousSibling.innerHTML.slice(1));
		total = total - precio;;
		cantp = cantp - 1;
		spanCompra[0].innerHTML = 'Cantidad de productos:' + cantp;
		spanCompra[1].innerHTML = 'Total a pagar: $' + total;
		this.style.backgroundPosition = '0 0';
}

//El nombre de la funcion es una expresion de que esta funcion crea todos los productos.
//El argumento que recibe esta funcion es la categoria de los producots juegos,procesadores,mothers o fuentes.
function dios(categoria,ubicacion){
	for(var i=0;i<datos[categoria].length;i++){
		var colocar = ubicacion.getElementsByTagName("ul")[0];
		var articulo = document.createElement('li');
			articulo.style.textAlign = "center";
			articulo.style.cursor = "pointer";
			articulo.className = "col-lg-3 col-lg-offset-1";
			articulo.id = i;
			articulo.addEventListener("click",function(){
				prodModal(articulo,categoria,descripcion);
			});

		var img = document.createElement('img');
			img.src = datos[categoria][i].img;
			img.alt = datos[categoria][i].nombre;
			img.width = '130';
			img.height = '171';
			img.style.borderRadius = '10px';
			img.style.marginTop = "10%";
		var nombre = document.createElement("h4");
			nombre.innerHTML = datos[categoria][i].nombre;
			nombre.style.fontSize = "1.75rem";
			nombre.style.color = "#666666";
			nombre.style.marginTop = "2%"
		var precio = document.createElement("h5");
			precio.innerHTML = datos[categoria][i].precio;
			precio.style.fontSize = "1.90rem";
			precio.style.color = "#666666";
			precio.style.marginTop ="1%";

		var agregar = document.createElement('a');
			agregar.href = "#";
			agregar.innerHTML = 'Agregar';
			agregar.addEventListener("click",prevenir);
			agregar.addEventListener("click",agregarCarrito);

		colocar.appendChild(articulo);
		//articulo.appendChild(links);
		articulo.appendChild(img);
		articulo.appendChild(nombre);
		articulo.appendChild(precio);
		articulo.appendChild(agregar);
	}	
}

document.onkeydown = function(event){
		var codigo = event.keyCode;
		/*if(codigo == 8){
			var tabla = carrito.getElementsByTagName("table")[0];
			carrito.removeChild(tabla);
			listaProd.style.display = "inline-block";
			espacio2.style.display = "inline-block";
		}*/
		if((codigo == 27) || (codigo == 13)){
			if(document.getElementById("alerta")){
				document.getElementById("fondoModal").parentNode.removeChild(document.getElementById("alerta"));
				document.getElementById("fondoModal").parentNode.removeChild(document.getElementById("fondoModal"));
				document.getElementsByTagName("html")[0].style.overflow = "auto";
			}
			if(document.getElementById("prodModal")){
				document.body.removeChild(document.getElementById("prodModal"));
				document.body.removeChild(document.getElementById("fondoModal"));
				document.getElementsByTagName("html")[0].style.overflow = "auto";
			}
		}
}

function crearProductos(){
	banners();
	for(var i=0;i<categorias.length;i++){
		var elBold = categorias[i].style.fontWeight;
		if(elBold == "bold"){
			categorias[i].style.fontWeight = "";
			var sacar = categorias[i].getElementsByTagName("a")[0].innerHTML.toLowerCase();
			var identificador = this.getElementsByTagName("a")[0].innerHTML.toLowerCase();
			var poner = document.getElementById(identificador);
				poner.style.display = "block";
			document.getElementById(sacar).style.display = "none";

		}
	}
	this.removeEventListener("click",crearProductos);
	this.style.fontWeight = "bold";
	for(var i=0;i<categorias.length;i++){
		if(categorias[i].style.fontWeight != "bold"){
			categorias[i].addEventListener("click",crearProductos);
		}
	}
}

function banners(){
	removeBanner();
	//Banners
	var banner = document.createElement("div");
		banner.id = "banner";
		banner.style.position = "fixed";
		banner.style.width = "496px";
		banner.style.height = "200px";
		banner.style.zIndex = "5";
		banner.style.right = "0";
		banner.style.bottom = "-200px";

	var publicidad = document.createElement("img");
		publicidad.src = "img/banner2.jpg";

	var close = document.createElement("a");
		close.href = "#";
		close.style.padding = "5px";
		close.style.position = "absolute";
		close.style.right = "0";
		close.style.top = "0";

	var closei = document.createElement("img");
		closei.src = "img/close2.png";

	close.appendChild(closei);
	document.body.appendChild(banner);
	banner.appendChild(close);
	banner.appendChild(publicidad);

	var aparicion = setInterval(function(){
		var abajo = banner.style.bottom;
		if(abajo == "0px"){
			clearInterval(aparicion);
		}
		var movimiento = parseInt(abajo.slice(0,4))+1;
		banner.style.bottom = movimiento+"px";
	},1);

	//Crear timeOut para que se elimine la publicidad a los 10 segundos de su aparicion
	var borrar = setTimeout(function(){
		removeBanner();
	},10000);

	//Asignacion de evento al boton de cerrar de la publicidad
	//hacer clear del timeOut creado anteriormente para que no borre otra publicidad
	close.onclick = function(e){
		e.preventDefault();
		removeBanner();
		if(typeof(borrar) != 'undefined'){
			clearTimeout(borrar);
		}
	}
}

function removeBanner(){
	if(document.getElementById("banner")){
		document.body.removeChild(document.getElementById("banner"));
	}
}

function cargaDocumento(){
	banners();
	categorias[0].style.fontWeight = 'bold';
	categorias[0].addEventListener("click",prevenir);
	dios("juegos",juegos);
	listaProd.appendChild(procesadores);
	dios("procesadores",procesadores);
	listaProd.appendChild(procesadores);
	dios("mother",motherboards);
	listaProd.appendChild(motherboards);
	dios("fuentes",fuentes);
	listaProd.appendChild(fuentes);
	for(var i=1;i<categorias.length;i++){
		categorias[i].addEventListener("click",prevenir);
		categorias[i].addEventListener("click",crearProductos);
	}
	
	//EFECTOS
	//Efecto del boton ver que nos lleva hasta la posicion de los productos
	btnver.onclick = function(){
		var scroll = setInterval( function(){
					var pose = migas.offsetTop;
					var pos = get_scroll();
						pos = pos + 4;
						window.scrollTo( 0, pos );

						if( pos >= pose ){
							clearInterval(scroll);
						}
						
					},1 );
	}

	//Efecto de movimiento al pasar el mouse por ensima de las imagenes de productos.
	var efecto;
	for(var i=0;i<mouseMov.length;i++){
		mouseMov[i].onmouseover = function(){
			var prov = this;
			var max = 15;
			var min = -15;
			var lim = 0;

			efecto = setInterval(function(){
				prov.style.transform = "rotate("+deg+"deg)";
				
				if((deg==0 || deg<max)&&(lim==0)){
					deg++;
					if(deg == 15){
						lim = 1;
					}
				}
				if(lim==1){
					deg--;
					if(deg==-15){
						clearInterval(efecto);
					}
				}
			},5);
		}
		mouseMov[i].onmouseout = function(){
			clearInterval(efecto);
			var prov = this;
			deg=0;
			prov.style.transform = "rotate("+deg+"deg)";
		}
	}
}

//ASIGNACIÓN DE EVENTOS

window.addEventListener("load",cargaDocumento);
btnver.addEventListener("click", prevenir);
compra.getElementsByTagName("a")[0].addEventListener("click",prevenir);
compra.getElementsByTagName("a")[0].addEventListener("click",proceder);