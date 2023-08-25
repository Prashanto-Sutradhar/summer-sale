let total = 0.00;

function handleClickCard(target) {
    const liItemContainer = document.getElementById('li-items')
    const count = liItemContainer.childElementCount
    const itemName = target.parentNode.childNodes[3].innerText;
    console.log(itemName);
    const li = document.createElement('li');
    li.innerText = `${count + 1}. ${itemName}`;
    liItemContainer.appendChild(li);


    // total price
    // console.log(target.innerText.split(" ")[0]);
    const price = target.innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    document.getElementById("total").innerText = total.toFixed(2);

    const button = document.getElementById('btn1');
    if (total < 200 && total >= 0) {
        button.setAttribute("disabled", true)
    } else {
        button.removeAttribute("disabled")
    }

    document.getElementById('input').addEventListener('keyup', function(event) {
        const text = event.target.value;
        const disBtn = document.getElementById('seBtn').innerText;
        document.getElementById('btn1').addEventListener('click', function() {
            const discount = document.getElementById('discount');
            const discountField1 = discount.innerText;
            let discountField = parseFloat(discountField1)
            if (text == disBtn) {
                discountField = parseFloat((total * 20) / 100);
                discount.innerText = discountField.toFixed(2);

                const total2 = document.getElementById('last-total');
                const total2Field = total2.innerText;
                let lastConst = parseFloat(total2Field);
                lastConst = (parseFloat(total) - parseFloat(discountField));
                total2.innerText = lastConst.toFixed(2);
            } else {
                // alert('invalid code');
            }
        })


    })
    const makeBtn = document.getElementById('makebtn1');
    const makBtn2 = document.getElementById('makebtn2');
    if (total <= 0) {
        makeBtn.setAttribute("disabled", true)
    } else {

        makeBtn.removeAttribute("disabled")
        makBtn2.setAttribute("href", "#my_modal_8")
    }
}