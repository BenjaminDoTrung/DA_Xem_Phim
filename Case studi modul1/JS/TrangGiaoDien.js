let theLink = document.createElement("a")
theLink.href = "TrangNguoixem.html";
let nutXem = document.createElement("button");
nutXem.textContent = "Xem";
let divNut = document.getElementById("nutXem");
divNut.appendChild(theLink);
theLink.appendChild(nutXem);
