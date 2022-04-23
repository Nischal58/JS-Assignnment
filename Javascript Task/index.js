var removebtn = document.getElementsByClassName('btn-danger');
function removebtns(event){
    var e = event.target;
    var parents = e.parentElement.parentElement.remove();
    grandtotal()
}

var addTocart = document.getElementsByClassName('btn-primary')
for(i = 0 ;i <addTocart.length ; i++){
    addTocart[i].addEventListener('click',addTocarts)
}

function addTocarts(event){
    console.log("hi")
    var addToCart=event.target;
    var addtocartEl = addToCart.parentElement
    console.log(addtocartEl);
    var imgname = addtocartEl.children[0].src;
    var titlename = addtocartEl.children[1].innerText;
    var price = addtocartEl.children[2].innerText;
    addTocartupdate(imgname ,titlename ,price )
}
var tbody = document.getElementsByTagName('tbody')[0]


function addTocartupdate(imgname ,titlename ,price ){
    var createElement = document.createElement('tr');
    var titleNames = document.getElementsByClassName('item-title');
    for( i = 0 ; i<titleNames.length;i++){
        if(titleNames[i].innerText ==titlename){
            alert('This item is already added to your cart');
            return
        }
    }
    createElement.innerHTML = `<td><img src="${imgname}" class="item-img" alt="" ></td>
    <td><h4 class="item-title">${titlename}</h4></td>
    <td><h4 class="item-price">${price}</h4></td>
    <td><input type="number" class="item-qty" value="1"></td>
    <td><h4 class="sub-total">${price}</h4></td>
    <td><button class="btn btn-danger">Remove</button></td>`
    tbody.append(createElement);

    for(i = 0 ;i <removebtn.length ; i++){
        removebtn[i].addEventListener('click',removebtns)
    }
    for(i = 0 ;i <qtupdate.length ; i++){
        qtupdate[i].addEventListener('click',updateqty)
    }
}

var qtupdate = document.getElementsByClassName('item-qty');


function updateqty(event){
    var updateEl = event.target;
    var parentsEL = updateEl.parentElement.parentElement;

    var itemPrice =parentsEL.getElementsByClassName('item-price')[0];
    var itemprices = itemPrice.innerText.replace('RS',' ');
    var subtotal =parentsEL.getElementsByClassName('sub-total')[0];
    subtotal.innerHTML = updateEl.value * itemprices;
    if(isNaN(updateEl.value)|| updateEl.value<=0){
        updateEl.value= 1;
    }
    grandtotal();

}

function grandtotal(){
    var total = 0;
    var grands = document.getElementsByClassName('grand-total')[0];
    var updates = document.getElementsByClassName('sub-total');
    for(i = 0; i<updates.length;i++){
        var updatesAmount = parseInt(updates[i].innerText.replace('RS' , ' '));
        total += updatesAmount;
    }
    grands.innerHTML = '&nbsp;Rs. ' + total;
}

