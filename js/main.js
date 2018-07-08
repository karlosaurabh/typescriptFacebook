//YOUTUBE CLASS START FROM HERE
/*
NAME,
ID,
SUBCRIBER,
LIKES,
DISLIKE,
VIEWS,
TIME,
*/
var Youtube = (function () {
    function Youtube(nameOfHost, title, id, subcriber, likes, dislike, views, timeOfupload) {
        var _this = this;
        this.getYoutubeName = function () {
            return _this.title;
        };
        this.getNameOfHost = function () {
            return (_this.nameOfHost);
        };
        this.nameOfHost = nameOfHost;
        this.title = title;
        this.id = id;
        this.subcriber = subcriber;
        this.likes = likes;
        this.dislike = dislike;
        this.views = views;
        this.time = timeOfupload;
    } //constructor end 
    return Youtube;
}()); // end of class
var saurabhYoutubeDetails = new Youtube("saurabh", "concept of angular2", 60009, 6565, 5000, 3000, 5, "5 month ago");
console.log("title of the video :" + " " + saurabhYoutubeDetails.getYoutubeName());
console.log("Name of the host :" + " " + saurabhYoutubeDetails.getNameOfHost());
