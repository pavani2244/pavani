alert("loaded Euler Js");
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

    document.getElementById('a').style.display = 'none';
    Document.getElementById('b').style.display = 'none';
    document.getElementById('n').style.display = 'none';
    document.getElementById('calculateButton').style.display = 'none';
    document.getElementById('sum').style.display = 'block';
    document.getElementById('label1').style.display = 'none';
    document.getElementById('label2').style.display = 'none';
    document.getElementById('label3').style.display = 'none';
}

Function showInput() 
{
    document.getElementById('a').style.display = 'block';
    document.getElementById('b').style.display = 'block';
    document.getElementById('n').style.display = 'block';
    document.getElementById('sum').style.display = 'none';
    document.getElementById('label1').style.display = 'block';
    document.getElementById('label2').style.display = 'block';
    document.getElementById('label3').style.display = 'block';
}



