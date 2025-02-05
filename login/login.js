function login() {
    // get data
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
            localStorage.setItem("token",JSON.stringify(data));
            window.location.href="..product/product.html";
        }
    })
}