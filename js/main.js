var nameProdact = document.getElementById('SiteName');
var site = document.getElementById('SiteURL');
var ProdactContaner=[];
if (localStorage.getItem('prodact')==null) {
    ProdactContaner=[];
}else{
    ProdactContaner=JSON.parse(localStorage.getItem('prodact'))
    displayProdact();
}
function addBook(){
    if (validationSiteURL() && validationName() ==true) {
        var Prodact = 
        {
            bookName: nameProdact.value,
            siteURL: site.value
        }
        ProdactContaner.push(Prodact);
        resat();
        displayProdact(); 
        localStorage.setItem('prodact',JSON.stringify(ProdactContaner))
    }else{
        var pop=`<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header d-flex justify-content-between align-items-center">
            <header class="box-header w-100 d-flex justify-content-between align-items-center mb-4 modal-title fs-5" id="exampleModalLabel">
            <div class="circles d-flex">
                <span class="rounded-circle me-2 bg-danger vip-circle"></span>
                <span class="rounded-circle me-2 bg-danger vip-circle"></span>
                <span class="rounded-circle me-2 bg-danger vip-circle"></span>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </header>
            </div>
            <div class="modal-body">
            <p>Site Name or Url is not valid, Please follow the rules below :</p>
            <ol class="rules list-unstyled m-0">
            <li>
              <i class="fa-regular fa-circle-right p-2 text-danger"></i>Site name must
              contain at least 3 characters
            </li>
            <li>
              <i class="fa-regular fa-circle-right p-2 text-danger"></i>Site URL must be a
              valid one
            </li>
          </ol>
            </div>
          </div>
        </div>
      </div> `
    document.getElementById('popup').innerHTML=pop;
    resat();
    }
}
addBook()
function resat() {
    nameProdact.value=null
    site.value=null
}
function displayProdact() {
    var cartona = ``;
    for (var i = 0; i < ProdactContaner.length; i++) {
            cartona+=`                    
            <tr>
                <td>${i}</td>
                <td>${ProdactContaner[i].bookName}</td>              
                <td>
                    <button onclick="search(${i})"  class="btn btn-outline-light"><a><i class="fa-solid fa-eye pe-2"></i>Visit</a></button></td>
                <td>
                    <button onclick="Delete(${i})" class="btn btn-danger pe-2"><i class="fa-solid fa-trash-can"></i>Delete</button>
                </td>
            </tr>`
    }
    document.getElementById('tableContent').innerHTML=cartona;
}
function Delete(deleteIndex){
    ProdactContaner.splice(deleteIndex,1)
    displayProdact(); 
    localStorage.setItem('prodact',JSON.stringify(ProdactContaner))
}
function search(searchIndex){
    window.open(ProdactContaner[searchIndex].siteURL)
}
// function validation(element)
// {
//     var regex = {
//         SiteName:/^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/,
//         SiteURL:/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
//     }
//     if (regex[element.id].test(element.value)==true) {
//         element.classList.add('is-valid');
//         element.classList.remove('is-invalid');
//         return true;
//     }else{
//         element.classList.add('is-invalid');
//         element.classList.remove('is-valid');
//         return false;
//     }
// }
function validationName()
{
    var regex = {
        SiteName:/^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/,
        SiteURL:/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    }
    if (regex.SiteName.test(SiteName.value)==true) {
        SiteName.classList.add('is-valid');
        SiteName.classList.remove('is-invalid');
        return true;
    }else{
        SiteName.classList.add('is-invalid');
        SiteName.classList.remove('is-valid');
        return false;
    }
}
function validationSiteURL()
{
    var regex = {
        SiteName:/^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/,
        SiteURL:/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    }
    if (regex.SiteURL.test(SiteURL.value)==true) {
        SiteURL.classList.add('is-valid');
        SiteURL.classList.remove('is-invalid');
        return true;
    }else{
        SiteURL.classList.add('is-invalid');
        SiteURL.classList.remove('is-valid');
        return false;
    }
}
