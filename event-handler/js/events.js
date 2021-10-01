function transformUppercase(_val){
    return _val.toUppercase();
}

let elNamaPengguna = document.getELementaryById("NamaPengguna")
elNamaPengguna.addEventListener("keyup",function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})