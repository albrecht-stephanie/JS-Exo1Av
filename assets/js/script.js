document.querySelector('button').addEventListener('click', function add(){
var x = document.getElementById('x').value;
var y = document.getElementById('y').value;

    if ((isNaN(x)) || (isNaN(y))){ //verification que les champs contiennent des nombresss
            alert("Des nombres, svp !");
    }
        else{
            var result = (+x) + (+y);// ou var result = parseInt(x) + parseInt(y)
            alert(result);
        }
});