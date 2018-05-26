class User{
    constructor(u_pseudo, u_mail, u_phone, u_pass){
        this.u_pseudo = u_pseudo;
        this.u_mail = u_mail;
        this.u_pass = u_pass;
        this.u_avatar = 0;
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
    constructor(activityName){
        this.activityName = activityName;
    }
}
