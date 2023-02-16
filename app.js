let serial=0;
function getByIdText(id) {
    const element = document.getElementById(id).innerText;
    return element;
}

function setDisabled(id){
    document.getElementById(id).setAttribute('disabled', true);
}

document.getElementById('btn-coffee').addEventListener('click', function () {
    serial++;
    const prdName = getByIdText('first-p-title');
    const prdPrice = getByIdText('coffee-price');
    const prdQty = getByIdText('coffee-qty');
    const amount = parseFloat(prdPrice) * parseFloat(prdQty);
    displayData(prdName,prdPrice,prdQty,amount)
    setDisabled('btn-coffee')

})

document.getElementById('btn-panda').addEventListener('click', function(e){
    serial++;
    console.log(e.target.parentNode.parentNode.children[2].children[0].innerText);
    const prdName = e.target.parentNode.parentNode.children[0].innerText;
    const prdPrice = e.target.parentNode.parentNode.children[1].children[0].innerText;
    const prdQty = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const amount = parseFloat(prdPrice) * parseFloat(prdQty);
    displayData(prdName,prdPrice,prdQty,amount)
    setDisabled('btn-panda')

    // console.log(prdName);
})

document.getElementById('btn-vue').addEventListener('click', function(e){
    console.log(e.target.parentNode.parentNode.children[1].value);
    const prdName = e.target.parentNode.parentNode.children[0].innerText;
    const prdPrice = e.target.parentNode.parentNode.children[1].value;
    const prdQty = e.target.parentNode.parentNode.children[2].value
    
    const amount = parseFloat(prdPrice) * parseFloat(prdQty);
    if(amount <=0 || prdQty <=0){        
        alert('Please provide a valid number');
    return;    
} 
      else if (isNaN(amount)){
        alert('Please provide a valid number');
        return;    
    }       
    displayData(prdName,prdPrice,prdQty,amount)
    setDisabled('btn-vue')

})

function displayData(prdName,prdPrice,prdQty,amount) {
    const parentContainer = document.getElementById('data-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="bg-teal-200">${serial}</td>
    <td>${prdName}</td>
    <td class="bg-teal-200">${prdPrice}</td>
    <td>${prdQty}</td>
    <td class="bg-teal-200">${amount}</td>
    
    `;
    parentContainer.appendChild(tr);
}