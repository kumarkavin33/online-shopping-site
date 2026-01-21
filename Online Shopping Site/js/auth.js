function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user==="admin" && pass==="admin123"){
        localStorage.setItem("role","admin");
        window.location="admin.html";
    }
    else{
        localStorage.setItem("role","user");
        window.location="products.html";
    }
}
