
    class choTot {
    name
    productprice
    image

    constructor(name, productprice, image) {
    this.name = name
    this.productprice = productprice
    this.image = image
}

}

    product1 = new choTot("Bán nhà C4 1 lầu", "Giá : 340T", "ảnh/0fa9031aa203f5a9440e62eacb144836-2831499080277699413.jpg ")
    product2 = new choTot("Bán Sh mode", "Giá : 43T", "ảnh/5b5133793cf8484da12fe125106f429d-2824479470774261268.jpg")
    product3 = new choTot("Bán nhà sân vườn", "Giá : 7.9ty", "ảnh/6ea9af542b2c14083217f35352370af5-2831491516998477044.jpg")

    let product = [product1, product2, product3];
    function display() {

    let data = ""
    for (let i = 0; i < product.length; i++) {
    data += '<div class="item">' + `<img class="img" src=${product[i].image}>` + '<br>'
    data += product[i].name + '<br>'
    data += product[i].productprice + '<br>'
    data += '<button onclick="Editproduct()">Edit</button>' + '<button onclick="deLete(' + i + ')">Delete</button>'
    data += '</div>'
}
    data += ""
    document.getElementById("demo").innerHTML = data
}
    display()
    function deLete(id) {
    confirm("bạn muốn xoá không")
    product.splice(id, 1)
    display()
}

    function THem() {
    let name = document.getElementById("name").value
    let productprice = document.getElementById("productprice").value
    let image = document.getElementById("image").value
    let d = new choTot(name,productprice,image)
    product.push(d)
    display()
}
    let vitri;
    function Editproduct(){
    let oldproduct = product[index]
    vitri=index
    document.getElementById("edit").value = oldproduct
    document.getElementById("div_edit").style.display = "block"
}

    function edit() {
    product[viTri] = document.getElementById("edit").value
    document.getElementById("div_edit").style.display = "none"
    display()
}
