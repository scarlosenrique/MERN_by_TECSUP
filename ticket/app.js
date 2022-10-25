
function nombreOnKeyUp(obj){
    // obtenemos el value del elemento que llamo a la funcion
    const nombre = obj.value; 
    //Obtenemos el elemento al que enviaremos el value usando su id
    const tk_nombre = document.querySelector('#tk_nombre');
    //usando la propiedad innerHTML le asignamos el value obtenido al elemento
    tk_nombre.innerHTML = nombre.toUpperCase();

}

function edadSelected(obj){
    const edad = obj.value;
    const tk_edad = document.querySelector('#tk_edad');
    tk_edad.innerHTML = edad;
}

function obraSelected(obj){
    const obra = obj.value;
    const tk_obra = document.querySelector('#tk_obra');
    tk_obra.innerHTML = obra.toUpperCase();
}

function estChecked(obj){
    const estudiante = obj.value;
    const tk_estudiante = document.querySelector('#tk_estudiante');
    tk_estudiante.innerHTML = estudiante;

}
function tc_Checked(obj){
    const tc = obj.checked;
    const tk_tc = document.querySelector('#tk_tc');
    if (tc == true) {
        tk_tc.innerHTML = "SI";
    }else{ tk_tc.innerHTML = "NO"}
}

function comprar(){
    let costo = 18;

    const tk_nom = document.querySelector('#tk_nombre');
    nom = tk_nom.innerHTML;

    const tk_edad = document.querySelector('#tk_edad');
    edad = tk_edad.innerHTML;

    const tk_estud = document.querySelector('#tk_estudiante');
    estud = tk_estud.innerHTML;

    const tk_tc = document.querySelector('#tk_tc');
    tc = tk_tc.innerHTML;

    const tk_obra = document.querySelector('#tk_obra');
    obra = tk_obra.innerHTML;

    if((nom != 0) & (edad !=0) & (estud!= 0) & (tc!=0)& (obra!=0)){
        console.log(nom +" "+ edad +"  "+ estud +"  "+ tc +"  "+ obra)
        if ((edad < 12) || (estud == "SI")){
            costo = 7;
        }
        if (tc== "NO"){
            costo=costo*0.9
        }
        /* const tk_costo = document.querySelector('#tk_costo'); */
        tk_costo.innerHTML= costo;

        /* MENSAJE DE CONFIRMACION */
        Swal.fire({
            title: 'Confirma la Compra?',
            text: "Revise los datos del ticket antes de continuar",
            /* icon: 'question', */
            imageUrl:'assets/img/codigo-logo.png',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Todo esta OK'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Confirmado',
                'Su ticket a sido emitido.',
                'success') 
            }
        })
        
        /* location.reload();    */ 
        /* MENSAJE DATOS INCOMPLETOS */   
    }else { 
        Swal.fire({
            title: 'Faltan Ingresar Datos, vea el Ticket',
            icon: 'info',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
}
