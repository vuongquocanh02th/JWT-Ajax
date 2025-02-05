// let token= "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzIwMDYzMDA3LCJleHAiOjE3MjAxNDk0MDd9.JwtLuU9ddRg94obPoaIOGesMKeAu4q6A25F0sJotJFA";
let token = getToken();
function showAllProduct() {
    $.ajax({
        // Use token
        headers:{
            "Authorization": "Bearer " + token
        },
        method: "GET",
        url: "http://localhost:8080/product",
        success: function (data){
            let content ="";
            for (let i = 0; i < data.length; i++) {
                content += `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].price}</td>
        <td>${data[i].description}</td>
        <td><a onclick="deleteById(${data[i].id})">delete</a></td>
    </tr>`;
            }
            document.getElementById("content").innerHTML = content;
        }
    })
}
showAllProduct();


// Delete
function deleteById(id) {
    // chan su kien mac dinh cua the
    event.preventDefault();
    $.ajax({
        method: "DELETE",
        url: "http://localhost:8080/product/" + id,
        success: function (data){
            showAllProduct();
        }
    })

}

function getUser() {
    let user = JSON.parse(localStorage.getItem("token"));
    if (user==null){
        window.location.href="../login/login.html";
    }
    else {
        return user;
    }

}
function getToken() {
    let u = getUser();
    let token = u.token;
    return token;

}

function create() {
    let formData = {
        name: $("#name").val(),
        price: $("#price").val(),
        description: $("#des").val()
    };

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/product",
        contentType: "application/json",
        data: JSON.stringify(formData),
        success: function (response){
            alert("Product add successfully!");
            showAllProduct();
        }
    })
}
