function showFor() {
    var nos = parseFloat(document.getElementById("nos").value);
    var txt = document.getElementById(document.getElementById("txt").value);
    

    if (isNaN(nos)) {
        alert("Invalid input! Please enter a valid number.");
        return; //Exit if inputs = invalid.
    }

    for(let n = 1; n <= nos; n++){
        document.getElementById("floop").innerHTML = document.getElementById("floop").innerHTML + i + ". " + txt +"</br>"
    }
}
