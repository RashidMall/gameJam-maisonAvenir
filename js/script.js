$(document).ready(function(){

class User{
    constructor(u_pseudo, u_mail, u_phone, u_pass){
        this.u_pseudo = u_pseudo;
        this.u_mail = u_mail;
        this.u_pass = u_pass;
        this.u_avatar = [];
        this.u_points = 0;
        this.u_grade = 0;
        this.u_phone = u_phone;
        this.skills = [];
        this.badges = [];
    }

    updatePoints(points){
        this.u_points += points;
    }

    changeMail(mail){
        this.u_mail = mail;
    }

    addSkill(skill){
        this.skills.push(skill);
    }

    removeSkill(skill){
        var index = this.skills.indexOf(skill);
        if (index > -1) {
            this.skills.splice(index, 1);
        }
    }

    addBadge(){
        this.skills.push(skill);
    }

    removeBadge(skill){
        var index = this.skills.indexOf(skill);
        if (index > -1) {
            this.skills.splice(index, 1);
        }
    }

}

class Workshop {
    constructor(w_name, w_address){
        this.w_name = w_name;
        this.w_address = w_address;
    }
}

// returns users with searched skill or name
function searchWord(word, arr){
    let searchResult = [];
    for(let i = 0; i < arr.length; i++){
        if(word === arr[i].u_name){
            searchResult.push(arr[i]);
        }
        for(let j = 0; j < arr.length; j++){
            if(word === arr[i].skills[j]){
                searchResult.push(arr[i]);
            }
        }
    }
    return searchResult;
}

function uploadProfile(user){
    $('#profile-userName').text(user.u_pseudo);
    $('#profile-userMail').text(user.u_mail);
    $('#profile-userPhone').text(user.u_phone);

    $('.authentification').addClass('collapse');
    $('#userProfile').addClass('show');
}

let users = [];

if(JSON.parse(localStorage.getItem("savedData")) != null){
    users = JSON.parse(localStorage.getItem("savedData"));
    /*test*/
}

let userLogin = false;
if(JSON.parse(localStorage.getItem("savedLogin")) != null
    && JSON.parse(localStorage.getItem("savedLogin"))){
    $('.authentification').addClass('collapse');
    $('#userProfile').addClass('show');
    uploadProfile(users[users.length - 1]);
    /*test*/
}



$('#searchButton').click(function(){
    let searchQuery = $('#mysearch').val();
    let searchResult = searchWord(searchQuery, users);
});

$('#submitButton').click(function(){
    let pseudo = $('#userName').val();
    let userPass = $('#userPass').val();
    let mail = $('#userMail').val();
    let phone = $('#userPhone').val();

    let newUser = new User(pseudo, mail, phone, userPass);
    users.push(newUser);
    userLogin = true;
    localStorage.setItem("savedData", JSON.stringify(users));
    localStorage.setItem("savedLogin", JSON.stringify(userLogin));

    uploadProfile(users[users.length - 1]);
});

$('#userLogout').click(function(){
    userLogin = false;
    localStorage.setItem("savedLogin", JSON.stringify(userLogin));

});




});














