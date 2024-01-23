function show_hide_courses() {
    var dCourse = document.getElementsByClassName("dropdown-courses");
    var len = dCourse.length;
    for (var i = 0; i < len; i++){
        if (dCourse[i].style.display == "none") {
            dCourse[i].style.display = "block";
        }
        else{
            dCourse[i].style.display = "none"
        }
        
    }
}


function show_hide_information() {
    var info = document.getElementsByClassName("dropdown-information");
    var len = info.length;
    for (var i = 0; i < len; i++){
        if (info[i].style.display == "none") {
            info[i].style.display = "block";
        }
        else{
            info[i].style.display = "none"
        }
        
    }
}