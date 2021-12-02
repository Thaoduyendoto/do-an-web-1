// show login form onclick
function showLoginFormFnc() {
    document.getElementById("modal-id").classList.add("show-component");
    document.getElementById("login-form-id").classList.add("show-component");
}

// hide login form onclick
function hideLoginFormFnc() {
    document.getElementById("modal-id").classList.remove("show-component");
    document.getElementById("login-form-id").classList.remove("show-component");
}

// show register form onclick
function showRegisterFormFnc() {
    document.getElementById("modal-id").classList.add("show-component");
    document.getElementById("register-form-id").classList.add("show-component");
}

// hide register form onclick
function hideRegisterFormFnc() {
    document.getElementById("modal-id").classList.remove("show-component");
    document.getElementById("register-form-id").classList.remove("show-component");
}

function setProductType(typeID, type) {
    this.typeID = typeID;
    this.type = type;
}

function setProductItem(typeID, productID, name, price, sale) {
    this.typeID = typeID;
    this.productID = productID;
    this.name = name;
    this.price = price;
    this.sale = sale;
}

function setCartItem(cartID, product) {
    this.cartID = cartID;
    this.product = product;
}

// type list
var arrType = [new setProductType("nike-id", "Nike"), new setProductType("adidas", "Adidas"), new setProductType("fila", "Fila"), new setProductType("champion", "Champion")];

var arrProduct = [
    new setProductItem("nike-id", "nike-01", "nike 01", "1000", "1000000"),
    new setProductItem("nike-id", "nike-02", "nike 02", "2000", "900"),
    new setProductItem("nike-id", "nike-03", "nike 03", "3000", "1000"),
    new setProductItem("nike-id", "nike-04", "nike 04", "4000", "1100"),
    new setProductItem("nike-id", "nike-05", "nike 05", "5000", "1200"),
    new setProductItem("nike-id", "nike-06", "nike 06", "6000", "1300"),
    new setProductItem("nike-id", "nike-07", "nike 07", "7000", "1400"),
    new setProductItem("nike-id", "nike-08", "nike 08", "8000", "1500"),
    new setProductItem("nike-id", "nike-09", "Nike 09", "999", "1000"),
    new setProductItem("nike-id", "nike-10", "nike 10", "250", "1000"),
    new setProductItem("nike-id", "nike-11", "Nike 11", "1", "100"),
];

var cartArr = [new setCartItem("cart-01", arrProduct[0]), new setCartItem("cart-01", arrProduct[1]), new setCartItem("cart-01", arrProduct[2])];

// show product type list onload
function showProductTypeListFnc() {
    listType = "";

    for (let i = 0; i < arrType.length; i++) {
        var type = '<li class="product-type__item id="' + arrType[i].typeID + '" "><a href="" class="product-type__item-link">' + arrType[i].type + "</a></li>";
        listType += type;
    }

    document.getElementById("product-type-list-id").innerHTML = listType;
}

var tempProductArr = [];

// show home product list
function showHomeProductList(pageNumber, maxIndex, arrProduct) {
    var productRow = "";
    var k = maxIndex * (pageNumber - 1);
    var t = 0;

    for (let i = 0; i < 3; i++) {
        if (arrProduct[k] == null) {
            break;
        } else {
            var productCols = "";
            for (let j = 0; j < 3; j++) {
                if (arrProduct[k] == null) {
                    break;
                } else {
                    tempProductArr[t] = arrProduct[k];
                    var productCol =
                        '<div class="grid__col-4"><div class="home-product__item"><a href="" class="home-product__item-link"><img src="./access/image/product/nike-boston.jpg" alt="" class="home-product__item-img" /></a><!-- product detail --><div class="home-product__item-container"><div class="home-product__item-title">' +
                        tempProductArr[t].name +
                        '</div><div class="home-product__item-price">Giá gốc: <span>' +
                        tempProductArr[t].price +
                        ' $</span></div><div class="home-product__item-sale">Giảm giá: ' +
                        tempProductArr[t].sale +
                        ' $</div><div class="home-product__item-btn-field"><button id="' +
                        tempProductArr[t].productID +
                        '" class="home-product__item-cart-insert btn" onclick="cartAddItem(this.id);">Thêm vào giỏ hàng</button><a href="#" class="home-product__item-link-btn"><button class="home-product__item-buy-btn btn">Mua Ngay</button></a></div></div></div></div>';
                    productCols += productCol;
                    k++;
                    t++;
                }
            }
            productRow += ' <div class="grid__row">' + productCols + "</div>";
        }
    }

    document.getElementById("home-product-id").innerHTML = '<div class="grid">' + productRow + "</div>";
}

function cartAddItem(id) {
    console.log(id);
    for (let i = 0; i < tempProductArr.length; i++) {
        if (tempProductArr[i].productID == id) {
            console.log(tempProductArr[i]);
        }
    }
}

function showCartItemList() {
    // empty cart HTML
    var emptyCart = '<div class="page-header-top__right-cart-show empty-cart"><div class="page-header-top__right-cart-empty-noti">Giỏ hàng trống</div></div>';

    // var cartItemBody = '<div class="page-header-top__right-cart-info"><div class="page-header-top__right-cart-name">Tên SP</div><div class="page-header-top__right-cart-quantity">SL: <span>2</span></div><div class="page-header-top__right-cart-total-price">Thành tiền: <span>1000$</span></div></div>';

    var cartItemHead = '<div class="page-header-top__right-cart-item"><img src="./access/image/product/nike-boston.jpg" alt="" class="page-header-top__right-cart-img" />';

    var cartItemTail = '<div class="page-header-top__right-cart-remove"><button class="page-header-top__right-cart-remove-btn">Xoá</button></div></div>';

    if (cartArr.length == 0) {
        document.getElementById("page-header-top__right-cart-box-id").innerHTML = emptyCart;
    } else {
        // pay button HTML
        var pay = '<div class="page-header-top__right-cart-pay"><button class="page-header-top__right-cart-pay-btn btn">Thanh toán</button></div>';

        // cart title HTML

        var cartTitle = '<div class="page-header-top__right-cart-title">Giỏ hàng</div>';
        var cartContainer = "";

        for (let i = 0; i < cartArr.length; i++) {
            var cartItem =
                cartItemHead +
                '<div class="page-header-top__right-cart-info"><div class="page-header-top__right-cart-name">' +
                cartArr[i].product.name +
                '</div><div class="page-header-top__right-cart-quantity">SL: <span>' +
                1 +
                '</span></div><div class="page-header-top__right-cart-total-price">Thành tiền: <span>' +
                cartArr[i].product.sale +
                " $</span></div></div>" +
                cartItemTail;

            cartContainer += cartItem;
        }

        cartContainer = '<div class="page-header-top__right-cart-container">' + cartContainer + "</div>";
        document.getElementById("page-header-top__right-cart-box-id").innerHTML = cartTitle + cartContainer + pay;
    }
}


// check user login  
function login() {
    var user = []
    localStorage.setItem('infouser', JSON.stringify(user))
    user = JSON.parse(localStorage.getItem('infouser'))
    var username = document.getElementById('login-form__username').value;
    var password = document.getElementById('login-form__password').value;
    adminarray = JSON.parse(localStorage.getItem('user'));
    var s = ""
    if (username == "" || password == "") {
        alert('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu')
    } else {
        for (i = 0; i < adminarray.length; i++) {
            if (username == adminarray[i].username && password == adminarray[i].password) {
                // window.location = "http://localhost:8080/unitop.vn/Front-end/lambenngoai/web1/do-an-web-1/"
                alert('Dang nhap thanh cong')
                var info = {
                    username: username,
                    fullname: fullname,
                    type: adminarray[i].type
                }
                user.push(info)
                localStorage.setItem('infouser', JSON.stringify(user))
                return location.reload()
            }
        }
        alert('Thong tin tai khoan hoạc mat khau khong chinh xac')
    }
}

// logout
function logout() {
    localStorage.removeItem('infouser')
    return location.reload()
}
// dang ky thanh vien moi
function reg() {
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phonenumber").value;
    var fullname = document.getElementById('fullname').value;
    var password = document.getElementById('password').value;
    var password_confim = document.getElementById('password_confirm').value;
    var err_fullname = ""
    var err_username = ""
    var err_phone = ""
    var err_password = ""
    var err_passwordconfirm = ""
    if (username == "") {
        err_username = "<p>Không được bỏ trống username</p>"
    } else {
        if (username.length < 8 || username > 32) {
            err_username = "<p>Độ dài từ 8 tới 32 ký tự</p>"
        }
    }

    if (fullname == "") {
        err_fullname = "<p>Không được bỏ trống họ và tên</p>"
    } else {
        if (fullname.length < 8 || fullname.length > 32) {
            err_fullname = "<p>Độ dài từ 8 tới 32 ký tự</p>"
        }
    }

    if (phone == "") {
        err_phone = "<p>Không được bỏ trống số điện thoại</p>"
    }
    if (password == "") {
        err_password = "<p>Không được bỏ trống mật khẩu</p>"
    } else {
        if (password.length < 8 || password.length > 32) {
            err_password = "<p>Độ dài từ 8 tới 32 ký tự</p>"
        }
    }
    if (password != password_confim) {
        err_passwordconfirm = "<p>Mật khẩu xác nhận không chính xác</p>"
    }
    document.getElementById('err_username').innerHTML = err_username
    document.getElementById('err_fullname').innerHTML = err_fullname
    document.getElementById('err_phone').innerHTML = err_phone
    document.getElementById('err_password').innerHTML = err_password
    document.getElementById('err_password-confirm').innerHTML = err_passwordconfirm
    if (err_passwordconfirm == "" && err_username == "" && err_fullname == "" && err_password == "" && err_phone == "") {
        var user = {
            username: username,
            fullname: fullname,
            phone: phone,
            password: password,
            usertype: 'kh'
        }
        userarray = JSON.parse(localStorage.getItem('user'))
        userarray.push(user)
        localStorage.setItem('user', JSON.stringify(userarray))
        alert('Bạn đã đăng ký thành công')
        location.reload()
    }

}
// tao admin  

function createadmin() {
    var adminarray = []
    if (localStorage.getItem("user") == null) {

        var admin1 = {
            username: "admin",
            password: "admin",
            fullname: "Tran Quang Dao",
            datesignup: "23-11-1999",
            usertype: "admin",
        };
        var admin2 = {
            username: 'quangdao',
            password: "quangdao",
            fullname: "Tran Van Dong ",
            datesignup: "23-11-1999",
            usertype: "khachhang",
        };
        adminarray.push(admin1);
        adminarray.push(admin2);
        localStorage.setItem("user", JSON.stringify(adminarray));

    }
}
// onload auto tạo fomm login reg
function createformlogin() {
    var s = '<div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" onclick="showLoginFormFnc()">Đăng nhập</span></div><div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="showRegisterFormFnc()">Đăng ký</span></div>'
    document.getElementById('form_login_reg').innerHTML = s
}

function onloadFnc() {
    showProductTypeListFnc();
    showHomeProductList(1, 9, arrProduct);
    showCartItemList();
    createadmin();
    if (localStorage.getItem('infouser') == null) {
        createformlogin()
    } else {
        user = JSON.parse(localStorage.getItem('infouser'))
        if (user[0].type == 'kh') {
            s = ' <div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" >Xin chào:' + user[0].username + '</span> </div> <div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="logout()" >(Đăng xuất)</span></div>'
            document.getElementById('form_login_reg').innerHTML = s
        } else {
            s = ' <div id="page-header-top__login" class="page-header-top__login page-header-item-hover"><span class="page-header-login-span" >Xin chào:' + user[0].username + '</span> </div> <div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span" onclick="logout()" >(Đăng xuất)</span></div><div id="page-header-top__register" class="page-header-top__register page-header-item-hover"><span class="page-header-register-span"><a href="admin.html" ><i class="fas fa-forward"></i></a></span></div>'
            document.getElementById('form_login_reg').innerHTML = s
        }
    }
}

window.onload = onloadFnc;