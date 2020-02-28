
//this is a module created in order to create the date in a module file


exports.getDay = function(){

    let date = new Date();

    let options = {
        weekday: "long",
        day:"numeric",
        month:"long"
    };


    let day = date.toLocaleDateString("en-US",options); //custom date eg. Thursday, February 27
    return day;
};
    
  