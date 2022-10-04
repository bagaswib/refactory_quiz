function validation(){
  var nama = document.getElementById("nama").value;
  var peran = document.getElementById("peran").value;
  var errorMsg = document.getElementById("error_message");
  var text;

  errorMsg.style.padding = "10px";

  if(nama === "" || nama == null){
    text = "Nama harus diisi!";
    errorMsg.innerHTML = text;
    return false;
  }

  if(peran == ""){
    text = "Pilih peranmu untuk memulai game";
    errorMsg.innerHTML = text;
    return false;
  }
  
  alert("Permainan dimulai");
}