class Phim {
    constructor(duongDanDenIMG,tenPhim) {
        this.tenPhim = tenPhim;
        this.duongDanDenIMG = duongDanDenIMG;
    }
}

let buttonThem = document.createElement("button");
buttonThem.id = "them_phim";
buttonThem.textContent = "Thêm phim";

buttonThem.onclick = function () {
    let duongDanIMG = prompt("Nhập đường dẫn tới phim: ");
    let tenPhim = prompt("Nhập tên phim: ");
    if (duongDanIMG !== null && tenPhim !== null && duongDanIMG !== "" && tenPhim !== "") {
        addPhim(duongDanIMG, tenPhim);
    }
}

let phim1 = new Phim("../pictures/anh_San_Pham/250px-Ninja2009.jpg.2555e13dd2f5a797bdf61e8cb75d66b9.jpg"
    ,"Phim Ninja");
let phim2 = new Phim("../pictures/anh_San_Pham/a198211697e7809513cbe9359f7b0cac.jpg"
    ,"Phim người sói");
let phim3 = new Phim("../pictures/anh_San_Pham/avartar.jpeg"
    ,"Phim Avatar phần 2");
let phim4 = new Phim("../pictures/anh_San_Pham/dau-pha-thuong-khung-phan-4-1.jpg"
    ,"Đấu phá thương khung  - Phần 5");
let danhSachPhim = [phim1,phim2,phim3,phim4];

//Hàm themPhim() đổi tên thành
function capNhatDanhSachPhim() {
    // lấy ra Eledemnt div tổng body
    let divDanhSachPhim = document.getElementById("danhSachPhimBody");

    // xóa hết các phần tử đang có trong div hiện tại để chuẩn bị thêm lại các phần tử mới ở trong vòng for
    divDanhSachPhim.innerHTML = "";
    let divButtonThemPhim = document.createElement("div");
    divButtonThemPhim.appendChild(buttonThem);
    divDanhSachPhim.appendChild(divButtonThemPhim);

    for (let i = 0; i < danhSachPhim.length; i++) {
        // data += `<div class="div"><img class="img" src = ${danhSachPhim[i].duongDanDenIMG}><br>`;
        // data += danhSachPhim[i].tenPhim + '<br>';
        // data += `<button onclick="boXung()">Thêm</button><button onclick="xoaPhim()">Xóa</button>`;
        // data += '</div>';

        let div = document.createElement("div");
        div.style.fontSize = "15px";
        div.style.backgroundColor = "white";
        div.style.borderRadius = "10px";
        // div.className = "div";
        //
        let img = document.createElement("img");
        // img.className = "img";
        img.src = danhSachPhim[i].duongDanDenIMG;
        //
        let tenPhim = document.createTextNode(danhSachPhim[i].tenPhim);
        let buttonSua = document.createElement("button");
        buttonSua.onclick = function () {
            boXung();
        }
        buttonSua.textContent = "Sửa";
        //
        let buttonXoa = document.createElement("button");
        buttonXoa.onclick = function () {
            xoaPhim(i);
        }
        buttonXoa.textContent = "Xóa";
        //
        div.appendChild(img);
        div.appendChild(document.createElement("br"));
        div.appendChild(tenPhim);
        div.appendChild(document.createElement("br"));
        div.appendChild(buttonSua);
        div.appendChild(buttonXoa);
        //

        divDanhSachPhim.appendChild(div);

    }
    // data += ""
    // document.getElementById("danhSachPhimBody").innerHTML = data;
}
capNhatDanhSachPhim();

function xoaPhim(id) {
    confirm("Bạn có muốn xóa phim index = " + id);
    danhSachPhim.splice(id , 1);
    capNhatDanhSachPhim();
}
function boXung() {
    let anh = document.getElementById("A").value;
    let name = document.getElementById("B").value;
    let d = new Phim(anh, name);
    danhSachPhim.push(d);
    capNhatDanhSachPhim();
}

// chỉ thêm được đường dẫn tương đối từ folder picter,
// ví dụ như: pictures/anh_San_Pham/avartar.jpeg thì sẽ OKE, ko cần nhập ../
function addPhim(duongDanDenIMG, tenPhim) {
    duongDanDenIMG = duongDanDenIMG.replaceAll("\\", "/")
    if (!duongDanDenIMG.includes("../")) duongDanDenIMG = "../" + duongDanDenIMG;
    danhSachPhim.push(new Phim(duongDanDenIMG, tenPhim));
    capNhatDanhSachPhim();
}