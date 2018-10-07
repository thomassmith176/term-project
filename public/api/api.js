
function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------     

    var name = document.getElementById("exampleInputName1").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
   
        var status = document.getElementById('status');
        var url = '/account/create/' + name + "/" + email + "/" + password;
        console.log(url)
        superagent
            .get(url)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                    status.innerHTML = JSON.stringify(res.body);
                }           
            });
}

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
   
        var status = document.getElementById('status');
        var url = '/account/login/' + email + "/" + password;
        console.log(url)
        superagent
            .get(url)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                    status.innerHTML = JSON.stringify(res.body);
                }           
            });

}

function deposit() {
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------
}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
}

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
}

