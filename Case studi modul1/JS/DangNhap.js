function dangNhapTaiKhoan() {
    let name = document.getElementById("username").value
    let password = document.getElementById("password").value;
    if (name === "admin" && password === "123") {
        alert("Đăng nhập thành công!");
        location.href="TrangQuanLy.html"
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác.");
    }
}
