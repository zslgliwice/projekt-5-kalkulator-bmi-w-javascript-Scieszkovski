function oblicz(){

    let waga = parseFloat(document.getElementById('waga').value);
    let wzrost = parseFloat(document.getElementById('wzrost').value);

    const bmi2 = waga / (wzrost*wzrost);

    document.getElementById('bmi').textContent = "Twoje BMI: " + bmi2.toFixed(2);

}
