//facebook ts start from here
/*
name,
gender,
city,
date of birth,
phone no,
college name,
school name,
office,
education,
*/
var Facebook = (function () {
    //a constructor which is used for initialize a class filed
    function Facebook(user_name, user_gender, user_DOB, user_mobileNumber, user_city, user_collegeName, user_schoolName, user_education, user_company) {
        var _this = this;
        //getter code here
        this.getUserData = function () {
            return _this.mobileNumber;
        };
        this.getSaurabhNo = function () {
            return (_this.mobileNumber);
        };
        this.setSaurabhMobile = function (no) {
            _this.mobileNumber = no;
        };
        this.name = user_name;
        this.gender = user_gender;
        this.DOB = user_DOB;
        this.mobileNumber = user_mobileNumber;
        this.city = user_city;
        this.collegeName = user_collegeName;
        this.education = user_education;
        this.company = user_company;
    } // constructor end here
    return Facebook;
}()); // class end here
var getSaurabhDetails = new Facebook('saurabh', 'male', 1901020, 730922941, 'lucknow', 'RGPV', 'cbs', 'engg in computer science', 'Prosix Infotech ');
//let getGauravDetails = new Facebook('Gaurav','male',1901020,730922941, 'lucknow', 'RGPV', 'cbs', 'engg in computer science');
var getUserName = getSaurabhDetails.getUserData();
console.log("saurabh mobile no" + " " + getUserName);
// try to print the existing mobile no
//getSaurabhDetails.mobileNumber= 0123456789;
// try to print the changed mobile no
getSaurabhDetails.setSaurabhMobile(123456789);
console.log("saurabh change mobile no" + " " + getSaurabhDetails.getSaurabhNo());
