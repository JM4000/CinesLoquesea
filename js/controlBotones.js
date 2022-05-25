function less(tipo) {
    var val;
    var pre;
    switch (tipo) {
        case 1:
            val = document.getElementById("cantOne").value;
            pre = document.getElementById("precioOne").value;
            if (val >= 1) {
                document.getElementById("cantOne").value = val - 1;
                document.getElementById("precioOne").value = pre - 8;
                substractTotal(8)
            }
            break;
        case 2:
            val = document.getElementById("cantTwo").value;
            pre = document.getElementById("precioTwo").value;
            if (val >= 1) {
                document.getElementById("cantTwo").value = val - 1;
                document.getElementById("precioTwo").value = pre - 6;
                substractTotal(6)
            }
            break;
        case 3:
            val = document.getElementById("cantThree").value;
            pre = document.getElementById("precioThree").value;
            if (val >= 1) {
                document.getElementById("cantThree").value = val - 1;
                document.getElementById("precioThree").value = pre - 15;
                substractTotal(15)
            }
            break;
    }
}

function more(tipo) {
    var val;
    var pre;
    switch (tipo) {
        case 1:
            val = document.getElementById("cantOne").value;
            pre = document.getElementById("precioOne").value;
            document.getElementById("cantOne").stepUp(1);
            document.getElementById("precioOne").stepUp(8);
            addTotal(8)
            break;
        case 2:
            val = document.getElementById("cantTwo").value;
            pre = document.getElementById("precioTwo").value;
            document.getElementById("cantTwo").stepUp(1);
            document.getElementById("precioTwo").stepUp(6);
            addTotal(6)
            break;
        case 3:
            val = document.getElementById("cantThree").value;
            pre = document.getElementById("precioThree").value;
            document.getElementById("cantThree").stepUp(1);
            document.getElementById("precioThree").stepUp(15);
            addTotal(15)
            break;
    }
}

function substractTotal(cant){
    var val = document.getElementById("pTotal").value;
    document.getElementById("pTotal").value = val - cant;
}

function addTotal(cant){
    document.getElementById("pTotal").stepUp(cant);
}