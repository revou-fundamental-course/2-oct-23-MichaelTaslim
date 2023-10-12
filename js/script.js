document.getElementById('konversi').onclick = tempConvert;
document.getElementById('reset').onclick = clearForm;

function tempConvert(){
    var celcius = document.getElementById("Celcius").value;
    var fahrenheit= document.getElementById("Fahrenheit").value;
    var carakalkulasi = document.getElementById("Cara_Kalkulasi").value;

    if (celcius != ''){
        fahrenheit = (parseFloat(celcius)*1.8) +32;
        carakalkulasi = celcius + " * 1.8 + 32";
    } else {
        return false;
    }

    document.getElementById('Celcius').value = parseFloat(celcius).toFixed(1);
    document.getElementById('Fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('Cara_Kalkulasi').value = carakalkulasi;

}

function clearForm(){
    document.getElementById('Celcius').value='';
    document.getElementById('Fahrenheit').value='';
}
