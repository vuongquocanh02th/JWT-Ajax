function login() {
    // lay du lieu
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let user={
        "username":name,
        "password": password
    }
    $.ajax({
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        url: "http://localhost:8080/api/login",
        method: "POST",
        data: JSON.stringify(user),
        success: function (data){
            // thay vi ghi vao console
            // console.log(data)
            localStorage.setItem("token",JSON.stringify(data));
            //     chuyen trang sang product
            window.location.href="..product/product.html";
        }
    })
}