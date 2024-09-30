a=3;
b=5;
n=1000;



function sumofMultiples(a,b,n)
{
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }

    }
    return sum;
}

function calculate ()
{
    const a = parseInt(document.getElementaryById('a').value);
    const b = parseInt(document.getElementaryById('b').value);
    const n = parseInt(document.getElementaryById('n').value);

    const result = sumofMultiples(a, b, n);

    alert('The sum of multiples of numbers ${a} or ${b} below ${n} is: ${result}');
}


    