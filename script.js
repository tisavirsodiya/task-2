function submitform()
{
    var dataEntered = retrievedata();
    console.log(dataEntered);
     var readData=readingDataFromLocalStorage(dataEntered);
}
// dataenter in form
function retrievedata()
{
    var Name= document.getElementById("Name").value;
    var Email= document.getElementById("Email").value;
    var phonenumber= document.getElementById("phonenumber").value;
    var birthdaydate= document.getElementById("birthdaydate").value;
    var appointmenttime= document.getElementById("appointmenttime").value;
    var favoritecolor= document.getElementById("favoritecolor").value;
    var paymentmethod= document.getElementById("payment").value;
    var age= document.getElementById("age").value;
    var checkboxoption= document.getElementById("checkboxoption").value;
    var uploadphoto= document.getElementById("uploadphoto").value;
 
    var arr=[Name,Email,phonenumber,birthdaydate,appointmenttime,favoritecolor,paymentmethod,age,checkboxoption,uploadphoto]
    return arr;
}
// data in localstorage
function readingDataFromLocalStorage(dataEntered) 
{
    // datastorage in localhost
    var n=localStorage.setItem("Name", dataEntered[0]);
     var pn=localStorage.setItem("phonenumber", dataEntered[2]);
    var b=localStorage.setItem("birthdaydate", dataEntered[3]);
    var a=localStorage.setItem("appointmenttime", dataEntered[4]);
    var f=localStorage.setItem("favoritecolor", dataEntered[5]);
    var p=localStorage.setItem("payment", dataEntered[6]);
    var a=localStorage.setItem("age", dataEntered[7]);
    var c=localStorage.setItem("checkboxoption", dataEntered[8]);
    var u=localStorage.setItem("uploadphoto", dataEntered[9]);

}