function calculateTip(){
    const billTotal = parseFloat(document.getElementById('total').value)
    const rate = parseFloat(document.getElementById('rate').value)
    const taxRate = 5.5;

    const tip = billTotal * (rate / 100)
    const tax = billTotal * (taxRate / 100)
    const grandTotal = billTotal + tip + tax

    document.getElementById('tip').innerHTML = `$${tip.toFixed(2)}`
    document.getElementById('tax').innerHTML = `$${tax.toFixed(2)}`
    document.getElementById('grand-total').innerHTML = `$${grandTotal.toFixed(2)}`
}

document.getElementById('calculateTotal').addEventListener('click', calculateTip)