function submitform()
{
    var dataEntered = retrievedata();
    // console.log(dataEntered);
     var readData=readingDataFromLocalStorage(dataEntered);
    //  console.log(readData); 
    insert(readData);
}
// CREAT
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
// READ
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

    // getting values from local to table 
    var n1=localStorage.getItem("Name",n);
     var pn1=localStorage.getItem("phonenumber",pn);
    var b1=localStorage.getItem("birthdaydate",b);
    var a1=localStorage.getItem("appointmenttime",a);
    var f1=localStorage.getItem("favoritecolor",f);
    var p1=localStorage.getItem("payment", p);
    var a1=localStorage.getItem("age", a);
    var c1=localStorage.getItem("checkboxoption",c);
    var u1=localStorage.getItem("uploadphoto", u);

    var arr=[n1,pn1,b1,a1,f1,p1,a1,c1,u1]
    return arr;
}
// INSERT
function insert(readData)
{
    var row= table.insertRow();
    var cell1= row.insertcell(0);
    var cell2= row.insertcell(1);
    var cell3= row.insertcell(2);
    var cell4= row.insertcell(3);
    var cell5= row.insertcell(4);
    var cell6= row.insertcell(5);
    var cell7= row.insertcell(6);
    var cell8= row.insertcell(7); 
    var cell9= row.insertcell(8);
    var cell10= row.insertcell(9);

 cell1.innerHTML=readData[0];
 cell2.innerHTML=readData[1];
 cell3.innerHTML=readData[2];
 cell4.innerHTML=readData[3];
 cell5.innerHTML=readData[4];
 cell6.innerHTML=readData[5];
 cell7.innerHTML=readData[6];
 cell8.innerHTML=readData[7];
 cell9.innerHTML=readData[8];
 cell10.innerHTML=readData[9];

 row.insertcell(0).innerHTML=readData[0];


}










