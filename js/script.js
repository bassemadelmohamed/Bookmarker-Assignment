var siteName = document.getElementById("siteName");

var bookmarkURL = document.getElementById("bookmarkURL");

if(localStorage.getItem('list') !== null){
    siteList = JSON.parse(localStorage.getItem('list')) ;
    display();
}

var siteList = [];

function addSite(){

var site = {
    name : siteName.value,
    URL : bookmarkURL.value,
}
siteList.push (site)
localStorage.setItem('list', JSON.stringify(siteList))
clear();
display();
console.log( siteList );
}

function clear(){
    siteName.value = "";
    bookmarkURL.value= "";
}

function display(){
    var box = "";
    for ( var i=0 ; i<siteList.length ; i++){
         box +=`<tr>
        <td> ${i+1} </td>
        <td> ${siteList[i].name} </td>
        <td>
        <a href=" ${siteList[i].URL}"> <button " class="btn btn-success btn-visit pe-3">
            <i class="fa-solid fa-eye"></i>
            Visit
        </button> 
        </a>
        </td>
        <td>
        <button onclick=" deleteItem( ${i}) " class="btn btn-danger btn-delete pe-2">
        <i class="fa-solid fa-trash-can"></i>
        Delete
        </button>
        </td>
        </tr>
        ` 
    }
document.getElementById('tableContent').innerHTML= box

}

function deleteItem( index ){
    siteList.splice( index , 1);
    localStorage.setItem('list',JSON.stringify(siteList))
    console.log(siteList);
    display();

}

