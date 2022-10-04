function validation(){
  var nama = document.getElementById("nama").value;
  var peran = document.getElementById("peran").value;
  var errorMsg = document.getElementById("error_message");
  var text;

  if(nama === "" || nama == null){
    errorMsg.style.padding = "10px";
    text = "Nama harus diisi!";
    errorMsg.innerHTML = text;
    return false;
  }

  if(peran == ""){
    errorMsg.style.padding = "10px";
    text = "Pilih peranmu untuk memulai game";
    errorMsg.innerHTML = text;
    return false;
  }
  
  alert("Permainan dimulai");
}
