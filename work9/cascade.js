function createOption(obj,data){
    for (var i in data){
        var op = new Option(data[i],i);
        obj.options.add(op);
    }
}
var province = document.getElementById('province');
createOption(province,provinceArr);