function checkPasswordAndRedirect() {
    var password = prompt('Masukkan password:');
    if (password === 'passwordku123') {
      // Password benar, beralih ke halaman tujuan
      window.location.href = 'halaman-tujuan.html';
    } else {
      // Password salah, menampilkan pesan kesalahan atau melakukan tindakan lain
      alert('Password salah! Mohon coba lagi.');
    }
  }
  
  // Memanggil fungsi dengan password yang diperiksa
  var password = prompt('Masukkan password:');
  checkPasswordAndRedirect(password);
  