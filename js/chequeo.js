var URLBASE='http://localhost/diagnosticoEnfermedades/';
const enfermedades=[];
enfermedades[0]=[];
enfermedades[0]['nombre']="uno";
enfermedades[0]['descripcion']="primera";
enfermedades[0]['tratamiento']="alguno";
const matsintomas=[];
 matsintomas[0]=[0.15,1.6,1,0.4,0.3,0.45,0.35,0.6,0.35,0.3,0.15,0.7,0.25,0.2,0.5];
 matsintomas[1]=[0.15,1.6,1,0.4,0.3,0.45,0.35,0.6,0.2,0.3,0.15,0.7,0.25,0.2,0.5];
 matsintomas[2]=[0.15,1.6,1,0.6,0.3,0.3,0.35,0.6,0.15,0.3,0.25,0.7,0.25,0.3,0.5];
 matsintomas[3]=[0.15,1.6,1,0.45,0.3,0.15,0.2,0.6,0.2,0.35,0.25,0.2,0.25,0.2,0.5];
 matsintomas[4]=[0.15,1.6,1,0.3,0,0.3,0.2,0.6,0.15,0.35,0.15,0.4,0.25,0.4,0.5];
 matsintomas[5]=[0.15,1.6,1,0.3,0,0.15,0.1,0.6,0.35,0,0.15,0.1,0.25,0.1,0];
 matsintomas[6]=[0.15,1.6,1,0.15,0,0.15,0.1,0.6,0.2,0.1,0.1,0,0.05,0.1,0];
 matsintomas[7]=[0.15,1.6,1,0.3,0,0.3,0.2,0.6,0,0,0.1,0.2,0.25,0.15,0.5];
 matsintomas[8]=[0.15,1.6,1,0.15,0.3,0.15,0.1,0.6,0.15,0,0.15,0.2,0.25,0.1,0.3];
 matsintomas[9]=[0.15,0.16,0.2,0,0,0,0,0.05,0,0,0,0,0.25,0,0];


function agregarOpcion(id){
    for (var k in enfermedades) {
         $('#'+id).append('<option value="'+k+'" class="val">'+enfermedades[k]['nombre']+'</option>')
    }
}

function compare(array1,array2){
    //const arr1= [5,5,6];
    //const arr2= [3,7,4];
    const arrayN=[];
    for(i=0;i<=14;i++){
        a = array1[i];
        b = array2[i];
        arrayN[i] = Math.min(a,b);
    }
    //document.write(arrayN);
    //return arrayN;
    return arrayN.reduce(add,0);
}

function add(a, b) {
    return a + b;
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

            

function compararUno(){

    var aa = document.getElementById ("sintom[0]");
    var genero = aa.options[aa.selectedIndex].value;
    var bb = document.getElementById ("sintom[1]");
    var edad = bb.options[bb.selectedIndex].value;
    var cc = document.getElementById ("sintom[2]");
    var peso = cc.options[cc.selectedIndex].value;
    var a = document.getElementById ("sintom[3]");
    var colesterol = a.options[a.selectedIndex].value;
    var b = document.getElementById ("sintom[4]");
    var acido = b.options[b.selectedIndex].value;
    var c = document.getElementById ("sintom[5]");
    var trigliceridos = c.options[c.selectedIndex].value;
    var d = document.getElementById ("sintom[6]");
    var presionSis = d.options[d.selectedIndex].value;
    var e = document.getElementById ("sintom[7]");
    var presionDias = e.options[e.selectedIndex].value;
    var f = document.getElementById ("sintom[8]");
    var estres = f.options[f.selectedIndex].value;
    var g = document.getElementById ("sintom[9]");
    var desordenAlimenticio = g.options[g.selectedIndex].value;
    var h = document.getElementById ("sintom[10]");
    var sal = h.options[h.selectedIndex].value;
    var i = document.getElementById ("sintom[11]");
    var fumar = i.options[i.selectedIndex].value;
    var j = document.getElementById ("sintom[12]");
    var deportes = j.options[j.selectedIndex].value;
    var k = document.getElementById ("sintom[13]");
    var alcohol = k.options[k.selectedIndex].value;
    var l = document.getElementById ("sintom[14]");
    var molestias = l.options[l.selectedIndex].value;
    var lol = document.getElementById ("enfermedadComparar");
    var enfermedadseleccionada = lol.options[lol.selectedIndex].value;
    misSintomas = [genero,edad,peso,colesterol,acido,trigliceridos,presionSis,presionDias,estres,desordenAlimenticio,sal,fumar,deportes,alcohol,molestias];

    const arrar1=[0.15,1.6,1,0.4,0.3,0.45,0.35,0.6,0.35,0.3,0.15,0.7,0.25,0.2,0.5];
    const arrar2=[0.15,1.6,1,0.4,0.3,0.45,0.35,0.6,0.2,0.3,0.15,0.7,0.25,0.2,0.5];
    const arrar3=[0.15,1.6,1,0.6,0.3,0.3,0.35,0.6,0.15,0.3,0.25,0.7,0.25,0.3,0.5];
    const arrar4=[0.15,1.6,1,0.45,0.3,0.15,0.2,0.6,0.2,0.35,0.25,0.2,0.25,0.2,0.5];
    const arrar5=[0.15,1.6,1,0.3,0,0.3,0.2,0.6,0.15,0.35,0.15,0.4,0.25,0.4,0.5];
    const arrar6=[0.15,1.6,1,0.3,0,0.15,0.1,0.6,0.35,0,0.15,0.1,0.25,0.1,0];
    const arrar7=[0.15,1.6,1,0.15,0,0.15,0.1,0.6,0.2,0.1,0.1,0,0.05,0.1,0];
    const arrar8=[0.15,1.6,1,0.3,0,0.3,0.2,0.6,0,0,0.1,0.2,0.25,0.15,0.5];
    const arrar9=[0.15,1.6,1,0.15,0.3,0.15,0.1,0.6,0.15,0,0.15,0.2,0.25,0.1,0.3];
    const arrar10=[0.15,0.16,0.2,0,0,0,0,0.05,0,0,0,0,0.25,0,0];

    var valorFinal;
    switch(enfermedadseleccionada){
        case 0:
            valorFinal=compare(misSintomas,arrar1)
        break;

        case 1:
            valorFinal=compare(misSintomas,arrar2)

        break;

        case 2:
            valorFinal=compare(misSintomas,arrar3)

        break;

        case 3:
            valorFinal=compare(misSintomas,arrar4)

        break;

        case 4:
            valorFinal=compare(misSintomas,arrar5)

        break;

        case 5:
            valorFinal=compare(misSintomas,arrar6)

        break;

        case 6:
            valorFinal=compare(misSintomas,arrar7)

        break;

        case 7:
            valorFinal=compare(misSintomas,arrar8)

        break;

        case 8:
            valorFinal=compare(misSintomas,arrar9)

        break;

        case 9:
            valorFinal=compare(misSintomas,arrar10)

        break;

    }
}  




function activaTab(tab){
    $('.nav-link a[href="enfermedades.html' + tab + '"]').tab('show');
};

function misResultados(){

    var aa = document.getElementById ("generoPaciente");
    var genero = aa.options[aa.selectedIndex].value;

    var bb = document.getElementById ("edadPaciente");
    var edad = bb.options[bb.selectedIndex].value;

    var cc = document.getElementById ("pesoPaciente");
    var peso = cc.options[cc.selectedIndex].value;


    var a = document.getElementById ("nivelColesterol");
    var colesterol = a.options[a.selectedIndex].value;

    var b = document.getElementById ("nivelAcido");
    var acido = b.options[b.selectedIndex].value;

    var c = document.getElementById ("nivelTrigliceridos");
    var trigliceridos = c.options[c.selectedIndex].value;

    var d = document.getElementById ("nivelPresionSistolica");
    var presionSis = d.options[d.selectedIndex].value;

    var e = document.getElementById ("nivelPresionDiastolica");
    var presionDias = e.options[e.selectedIndex].value;

    var f = document.getElementById ("nivelEstres");
    var estres = f.options[f.selectedIndex].value;

    var g = document.getElementById ("nivelDesordenesAlimenticios");
    var desordenAlimenticio = g.options[g.selectedIndex].value;

     var h = document.getElementById ("nivelConsumoSal");
    var sal = h.options[h.selectedIndex].value;

    var i = document.getElementById ("nivelFumar");
    var fumar = i.options[i.selectedIndex].value;

    var j = document.getElementById ("nivelDeportes");
    var deportes = j.options[j.selectedIndex].value;

    var k = document.getElementById ("nivelAlcohol");
    var alcohol = k.options[k.selectedIndex].value;

    var l = document.getElementById ("nivelMolestias");
    var molestias = l.options[l.selectedIndex].value;


    misSintomas = [genero,edad,peso,colesterol,acido,trigliceridos,presionSis,presionDias,estres,desordenAlimenticio,sal,fumar,deportes,alcohol,molestias];
}

function holis(){
    var arrarMilagro=[];
    if($('.che1').is(':checked')){
        misResultados();
        const arrar1=[0.15,1.6,1,0.4,0.3,0.45,0.35,0.6,0.35,0.3,0.15,0.7,0.25,0.2,0.5];
        arrarMilagro.push(compare(misSintomas,arrar1));

    }
    if($('.che2').is(':checked')){
        misResultados();
        const arrar2=[0.15,1.6,1,0.4,0.3,0.45,0.35,0.6,0.2,0.3,0.15,0.7,0.25,0.2,0.5];
        arrarMilagro.push(compare(misSintomas,arrar2));
    }
    if($('.che3').is(':checked')){
        misResultados();
        const arrar3=[0.15,1.6,1,0.6,0.3,0.3,0.35,0.6,0.15,0.3,0.25,0.7,0.25,0.3,0.5];
        arrarMilagro.push(compare(misSintomas,arrar3));
    }
    if($('.che4').is(':checked')){
        misResultados();
        const arrar4=[0.15,1.6,1,0.45,0.3,0.15,0.2,0.6,0.2,0.35,0.25,0.2,0.25,0.2,0.5];
        arrarMilagro.push(compare(misSintomas,arrar4));
    }
    if($('.che5').is(':checked')){
        misResultados();
        const arrar5=[0.15,1.6,1,0.3,0,0.3,0.2,0.6,0.15,0.35,0.15,0.4,0.25,0.4,0.5];
        arrarMilagro.push(compare(misSintomas,arrar5));
    }
    if($('.che6').is(':checked')){
        misResultados();
        const arrar6=[0.15,1.6,1,0.3,0,0.15,0.1,0.6,0.35,0,0.15,0.1,0.25,0.1,0];
        arrarMilagro.push(compare(misSintomas,arrar6));
    }
    if($('.che7').is(':checked')){
        misResultados();
        const arrar7=[0.15,1.6,1,0.15,0,0.15,0.1,0.6,0.2,0.1,0.1,0,0.05,0.1,0];
        arrarMilagro.push(compare(misSintomas,arrar7));
    }
    if($('.che8').is(':checked')){
        misResultados();
        const arrar8=[0.15,1.6,1,0.3,0,0.3,0.2,0.6,0,0,0.1,0.2,0.25,0.15,0.5];
        arrarMilagro.push(compare(misSintomas,arrar8));
    }
    if($('.che9').is(':checked')){
        misResultados();
        const arrar9=[0.15,1.6,1,0.15,0.3,0.15,0.1,0.6,0.15,0,0.15,0.2,0.25,0.1,0.3];
        arrarMilagro.push(compare(misSintomas,arrar9));
    }
    if($('.che10').is(':checked')){
        misResultados();
        const arrar10=[0.15,0.16,0.2,0,0,0,0,0.05,0,0,0,0,0.25,0,0];
        arrarMilagro.push(compare(misSintomas,arrar10));
    }

    var enfermedadScore=[];

    var opcion = indexOfMax(arrarMilagro);
    var max = Math.max(...arrarMilagro);
    if(max<=3.4){
        alert("No padeces de alguna enfermedad seleccionada");
    }else if(max>=3.5){
        enfermedadProbable(opcion);
        
    }

}





function compararTodos(){

        //aqui definiremos todos los arrays de las enfermedades, y  con cada uno de ellos mandaremos llamar a la funcion "compare", pasandole como primer parametro
        //nuestro array de usuario, el cual recuperaremos con document get element by id desde esta funcion, una vez definido este array desde aqui, lo pasaremos como parametro junto con los demas arrays de las enfermedades
        var aa = document.getElementById ("generoPaciente");
        var genero = aa.options[aa.selectedIndex].value;

        var bb = document.getElementById ("edadPaciente");
        var edad = bb.options[bb.selectedIndex].value;

        var cc = document.getElementById ("pesoPaciente");
        var peso = cc.options[cc.selectedIndex].value;


        var a = document.getElementById ("nivelColesterol");
        var colesterol = a.options[a.selectedIndex].value;

        var b = document.getElementById ("nivelAcido");
        var acido = b.options[b.selectedIndex].value;

        var c = document.getElementById ("nivelTrigliceridos");
        var trigliceridos = c.options[c.selectedIndex].value;

        var d = document.getElementById ("nivelPresionSistolica");
        var presionSis = d.options[d.selectedIndex].value;

        var e = document.getElementById ("nivelPresionDiastolica");
        var presionDias = e.options[e.selectedIndex].value;

        var f = document.getElementById ("nivelEstres");
        var estres = f.options[f.selectedIndex].value;

        var g = document.getElementById ("nivelDesordenesAlimenticios");
        var desordenAlimenticio = g.options[g.selectedIndex].value;

         var h = document.getElementById ("nivelConsumoSal");
        var sal = h.options[h.selectedIndex].value;

        var i = document.getElementById ("nivelFumar");
        var fumar = i.options[i.selectedIndex].value;

        var j = document.getElementById ("nivelDeportes");
        var deportes = j.options[j.selectedIndex].value;

        var k = document.getElementById ("nivelAlcohol");
        var alcohol = k.options[k.selectedIndex].value;

        var l = document.getElementById ("nivelMolestias");
        var molestias = l.options[l.selectedIndex].value;

      
                            

    misSintomas = [genero,edad,peso,colesterol,acido,trigliceridos,presionSis,presionDias,estres,desordenAlimenticio,sal,fumar,deportes,alcohol,molestias];

        
    var enfermedadScore=[];
    for (var i = matsintomas.length - 1; i >= 0; i--) {
        enfermedadScore[i] = compare(misSintomas,matsintomas[i]);
    }
    var opcion = indexOfMax(enfermedadScore);
    var max = Math.max(...enfermedadScore);
      if(max<=3.4){
        alert("No padeces de ninguna enfermedad");
      }else if(max>=3.5){
        enfermedadProbable(opcion);
      }

}


function enfermedadProbable(enfermedad){
    switch(enfermedad){
        case 0:
            alert("Tromboembolismo pulmonar");
            break;
        case 1:
            alert("Sindrome de miocardio");
            break;

        case 2:
            alert("Cardio isquemica");
            break;

        case 3:
            alert("Amiloidosis");
            break;

        case 4:
            alert("Insuficiencia cardiaca");
            break;

        case 5:
            alert("Fibrilación auricular");
            break;

        case 6:
            alert("Arritmia");
            break;

        case 7:
            alert("Sindrome de marfan");
            break;

        case 8:
            alert("Coartación de aorta");
            break;

        case 9:
            alert("Enfermedad de kawasaki");
            break;

    }
    alert("Recordar que solo es una pagina de auto checo, favor de ir a una clinica especialicadad.");
    redirige("enfermedades.html");
}
function mostrarEnfermedad(enfermedad,sintomas,tratamiento){

}
function redirige(pagina){
    window.location.replace(URLBASE+pagina);
}