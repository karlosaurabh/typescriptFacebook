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

class Facebook{
    // Declaring the properties 
    name : string;
    gender : string;
    DOB : number;
   private mobileNumber : number;
    city : string;
    collegeName : string;
    schoolName : string;
    education : string;
    company : string;

    //a constructor which is used for initialize a class filed
    constructor(user_name:string,user_gender: string, user_DOB:number, user_mobileNumber:number, user_city:string, user_collegeName:string, user_schoolName:string, user_education : string, user_company ?: string){
        this.name =  user_name;
        this.gender = user_gender;
       this.DOB = user_DOB;
       this.mobileNumber = user_mobileNumber;
        this.city = user_city;
        this.collegeName = user_collegeName;
      this.education  = user_education;
       this.company = user_company;
    }// constructor end here
   //getter code here
    getUserData = ()=>{
        return this.mobileNumber
    }

    
   

    getSaurabhNo = ()=>{
        return(this.mobileNumber)
    }

    setSaurabhMobile = (no:number)=>{
        this.mobileNumber =no;
    }
    
}// class end here

let getSaurabhDetails = new Facebook('saurabh','male',1901020,730922941, 'lucknow', 'RGPV', 'cbs', 'engg in computer science','Prosix Infotech ');
//let getGauravDetails = new Facebook('Gaurav','male',1901020,730922941, 'lucknow', 'RGPV', 'cbs', 'engg in computer science');
let getUserName = getSaurabhDetails.getUserData();
console.log("saurabh mobile no" + " " +getUserName)

 // try to print the existing mobile no
 //getSaurabhDetails.mobileNumber= 0123456789;

 // try to print the changed mobile no
 getSaurabhDetails.setSaurabhMobile(123456789)
 console.log("saurabh change mobile no" + " "+ getSaurabhDetails.getSaurabhNo());


 