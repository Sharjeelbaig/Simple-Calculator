//functions
function calculate() {
    var inputValue = document.getElementById("operationalInput").value;
    var resultContainer = document.getElementById("resultContainer");
    var result = eval(inputValue);
    resultContainer.innerHTML = result;
}
function push(number) {
    document.getElementById("operationalInput").value += number;
}

function del() {

    var str = document.getElementById("operationalInput").value;
    var res = str.slice(0, -1);
    document.getElementById("operationalInput").value = res;
}

function clearFunction() {
    var str = document.getElementById("operationalInput").value;
    var res = str.slice(-1, -1);
    document.getElementById("operationalInput").value = res;
}


//logics
setInterval(() => {
    calculate()
}, 1);



