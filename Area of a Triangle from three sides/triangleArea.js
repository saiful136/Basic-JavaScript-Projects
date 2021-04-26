
// We will follow the Heron's Formula to calculate the Area of a Triangle from Sides

// According to the formula - 
// For a triangle having sides of length a, b, and c and area K, we have
// K = sqrt[s{(s-a)(s-b)(s-c)}],
// where s = ½(a+b+c) is the triangle's semi-perimeter.


function area() {
    let first = document.getElementById("first-side").value;
    let second = document.getElementById("second-side").value;
    let third = document.getElementById("third-side").value;

    let s = (parseFloat(first)+ parseFloat(second) + parseFloat(third))/2;

    let result = Math.sqrt(s*((s-parseFloat(first))*(s-parseFloat(second))*(s-parseFloat(third))));

    if (!isNaN(result)) {
        document.getElementById("answer").innerHTML="The Area of the Triangle is = " +result;
    }

    else {
        alert ("The sum of the lengths of any two sides of a triangle cannot be GREATER than the length of the third side!")
    }
}