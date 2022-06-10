const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const age=document.getElementById("age");
const prog=document.getElementById("prog");
const college=document.getElementById("college");
const edu=document.getElementById("education");
const rb1=document.getElementById("webdev");
const rb2=document.getElementById("ml");
const rb3=document.getElementById("dl");
const rb4=document.getElementById("web-scraping");
const rb5=document.getElementById("ds");

function formValidation() {
  if (fname.value.length == 0) {
    alert("Enter First Name!!!");
    fname.focus();
    return false;
  }
    // checking name length
    if (fname.value.length < 2 || fname.value.length > 20) {
      alert("First name length should be more than 2 characters");
      fname.focus();
      return false;
    }
    if (lname.value.length ==0) {
      alert("Enter Last Name!!!");
      lname.focus();
      return false;
    }

    if (lname.value.length < 2 || lname.value.length > 20) {
        alert("Last name length should be more than 2 characters");
        lname.focus();
        return false;
      }
      if (age.value.length == 0) {
        alert("Enter age!!!");
        age.focus();
        return false;
      }
      if (age.value < 18) {
        alert("Not eligible!!! You should be atleast 18 years of age");
        age.focus();
        return false;
      }
      if(edu.value==="")
      {
        alert("Select education");
        edu.focus();
        return false;
      }
      if (prog.value.length== 0) {
        alert("Enter Programme Name");
        prog.focus();
        return false;
      }
      if (prog.value.length <2) {
        alert("Enter a valid Programme Name");
        prog.focus();
        return false;
      }
      if (college.value.length== 0) {
        alert("Enter College Name");
        college.focus();
        return false;
      }
      if (college.value.length <2) {
        alert("Enter a valid College Name");
        college.focus();
        return false;
      }
      if(rb1.checked==false && rb2.checked==false && rb3.checked==false && rb4.checked==false && rb5.checked==false)
      {
          alert("Select course");
          return false;
      }
      alert("Form submitted")
    return true;
    
}
