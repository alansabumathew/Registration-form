function validate() {  
var fname = document.reg-form.fname;  
var lname = document.reg-form.lname;  
if (fname.value.length <= 0) {  
    alert("Name is required");  
    fname.focus();  
    return false;  
}  
if (lname.value.length <= 0) {  
    alert("Last Name is required");  
    lname.focus();  
    return false; 
}  
}
console.log("hello")