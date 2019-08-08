function validForm(){
    var username = document.getElementById('username').value;
    var phonenumber = document.getElementById("phonenumber").value;
    var password = document.getElementById("password").value;

    if(username =='' || password =='' || phonenumber == ''){
        document.getElementById('message').innerHTML = "Username / Password / Phonenumber cannot be left blank!";
        return false;
    }
    else if (username.length <8){
        document.getElementById("message").innerHTML = "Username must be at least 8 characters";
        return false;
    }
    else if (password.length < 6){
        document.getElementById("message").innerHTML = "Password must be at least 6 characters";
        return false;
    }
    else if(!check_PassWord(password)){
        document.getElementById("message").innerHTML = "Password must contain lowercase, uppercase, number and special characters!";
        return false;
    }
    else {
        alert("Thanks for your order! Your merch will arrive home in 12-14 days");
        return true;
    }
}

function changeProduct(type,product){
    var type = document.getElementById(type);
    var product = document.getElementById(product);
    product.innerHTML ="";
    if(type.value == "album"){
        var optionArray = ["exosc|EXO-SC The 1st Mini Album <What A Life>","baekhyun|BAEKHYUN The 1st Mini Album <City Light>","shinee|Korean's Exclusive Product: Debut 11th Anniversary Exhibition PhotoCard Collection Book","exoset|EXO Don't Mess Up My Tempo Binder with PhotoCard Set","loveshot|EXO The 5th Album Repackage <LOVE SHOT>","nct127|NCT 127 Regular-Irregular","super|The 4th Mini Album 'NCT #127 WE ARE SUPERHUMAN'"];
    }
    if(type.value =="lightstick"){
        var optionArray = ["nct|NCT Lightstick","snsd|SNSD Lightstick","shinee|SHINee Lightstick","exo|EXO Lightstick Ver 3.0","red|Red Velvet Lightstick"];
    }
    if(type.value =="bag"){
        var optionArray = ["weareone|EXO 'We Are One' Tote Bag", "1271|NCT 127 'Cherry Bomb' Tote Bag","badboy|Red Velvet 'Bad Boy' Tote Bag","makeupbag|EXO 'We Are One' Clutch with Make Up Bag & Keychain","keychainnct|NCT 127 'Cherry Bomb' Clutch with Make Up Bag & Keychain","RVkeychain|Red Velvet 'Cherry Bomb' Clutch with Make Up Bag & Keychain","weareone2|EXO 'We Are One' Fanny Pack with Card Wallet & Keychain"];
    }
    if(type.value=="shirt"){
        var optionArray = ["tempo1|EXO Dont' Mess Up My Tempo Graphic T-Shirt","tempo2|EXO Don't Mess Up My Tempo Black Pullover Hoodie","tempo3|EXO Don't Mess Up My Tempo Rhinestone Red T-Shirt","tempo4|EXO Black Tempo Black T-Shirt","one1|EXO We Are One Long Sleeve T-Shirt - Grey","regular1|NCT 127 Regular-Irregular White Dimension Black T-Shirt","dimen|NCT 127 Black Dimension White T-Shirt","bomb1|NCT 127 Cherry Bomb T-shirt - White","rvblack|Red Velvet T-Shirt with Rhinestone - Black","rvbadboy|Red Velvet Bad Boy Reglan Baseball T-Shirt - White / Black"];
    }
    if(type.value == "hat"){
        var optionArray = ["hat1|NCT 127 Cherry Bomb Dad Hat with Long Strap and Rings","hat2|NCT 127 Regular-Irregular Black Dad Hat with Long Strap","hat3|NCT 127 Regular-Irregular Black Dad Hat with Chain","hat4|NCT Dream We Young Beanie","hat5|NCT Dream We Young Snapback Hat","hat6|Red Velvet Bad Boy Dad Hat with Long Strap and Rings","hat7|Red Velvet Beanie with The Perfect Red Velvet Typography"];
    }
    if(type.value == "bundle"){
        var optionArray = ["bun|Girls'Generation - 10th Anniversary Jewelry Bundle","bun1|Super Junior - Serenity Jewelry Bundle","bun2|NCT - Round Silver Bundle","bun3|EXO - Hexagon Jewelry Bundle"];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        product.options.add(newOption);
    }
}


function checkData(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    

    var checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var checkPhone = /^\d{10,14}$/;
    var checkUser = /^[A-Za-z0-9_]{8,32}$/;
    var checkPass = /(?=^.{6,15}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/;
    if (!checkUser.test(username)){
        alert("Please check our message!");
        document.getElementById("message").innerHTML = "Username must be at 8-32 lengths, containing only characters, numbers or _";
        return false;
    } 
    if(!checkPass.test(password)){
        alert("Please check our message!");
        document.getElementById("message").innerHTML = "Password must be at 6-15 length, contain at least 1 lowercase, 1 uppercase, 1 number and 1 special character";
        return false;
    }
    if (!checkPhone.test(phonenumber)){
        alert("Please check our message!");
        document.getElementById("message").innerHTML = "Phone 0-9, from 10 to 14 characters";
        return false;
    }
    if (!checkEmail.test(email)){
        alert("Please check our message!");
        document.getElementById("message").innerHTML = "Not a valid email address";
        return false;
    }

    alert("Thanks for the order. Merch will arrive to you in 8-12 days");

    
    
}

function check_PassWord(password) {
    var check_passwordsoluong = /^\S{8,32}$/;
    var ck_list = [];
    ck_list[0] = /[a-z]/;
    ck_list[1] = /[A-Z]/;
    ck_list[2] = /\d/; //co so
    ck_list[3] = /\W/; //ko co ky tu dac biet
    // STRING

    var dem = 0;
    if (!check_passwordsoluong.test(password)) {
        return false;
    }
    for (i = 0; i < 4; i++) {
        if (ck_list[i].test(password)) {
            dem++;
        }
    }
    if (dem > 3) {
        return true;
    }
    else {
        
        return false;
    }
}
