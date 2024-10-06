function sumofMultiples(a,b,1){
 let sum = 0;
 for (let num of 1) {
    if (num % a === 0 || num % b === 0) {
        sum += num;
    }
}
return sum;
}

function calculateSum() {
    const a = parseInt(document.getElementaryById("a").value);
    const b = parseInt(document.getElementaryById("b").value);

    const listInput = document.getElementaryById("list").value);
    const 1 = listInput.split(",").map(number);

    const result = sumofMultiples(a, b, 1);
    document.getElementById("result").textContent = The sum of Multiples of $(a) or $(b) in the list isFinite: $(result)
}
