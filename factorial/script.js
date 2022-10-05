function factorial(){
  var num = document.getElementById("angka").value;
  var errorMsg = document.getElementById("errorMessage");
  var result;
  var text;

  if(num === "" || num == null) {
    errorMsg.style.padding = "10px";
    text = "Angka harus diisi!";
    errorMsg.innerHTML = text;
    return false;
  }

  if(num < 0) {
  	errorMsg.style.padding = "10px";
    text = "Angka tidak boleh < 0";
    errorMsg.innerHTML = text;
    return false;
  }

  if(num == 0 || num == 1) {
  	result = 1;
  }

  if(num > 1) {
  	for (var i = num-1; i >= 1; i--) {
  		num *= i;
  		result = num;
  	}
  }

  alert ("Hasil = " + result);
}