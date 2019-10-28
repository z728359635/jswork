function createOption(obj,date){
    for (var i in date){
        var op=new Option(date[i],i);
        obj.options.add(op);
    }
}
var collegeSelect=document.getElementById('collegeSelect');
createOption(collegeSelect, colleges)

var majorSelect=document.getElementById('majorSelect')
collegeSelect.onchange=function(){
    majorSelect.options.length=0
    createOption(majorSelect,majors[collegeSelect.value])
}
var classSelect=document.getElementById('classSelect')
collegeSelect.onchange=function(){
    majorSelect.options.length=0
    createOption(majorSelect,majors[collegeSelect.value])
}
majorSelect.onchange=function(){
   classSelect.options.length=0
   createOption(classSelect, classes[collegeSelect.value][majorSelect.value])
}