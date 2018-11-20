function math(num1, num2, num3, num4, num5, num6, num7) {
    let brack = num1 * num2;
    console.log(brack + " the bracket value is");

    function of() {

        let of = brack * num3;
        console.log(of + "the of value is")

    }

    function divi() {
        let divi = of / num4;
        console.log(divi + "the division value is ")

    }

    function multi() {
        let multi = division * num5;
        console.log(multi + " the multiplication value is");
    }

    function addition() {
        let sum = multi + num6;
        console.log(sum + " the addition values is");


    }

    function minus() {
        let subtr = addition - num7;
        console.log(subtr + " the subtraction values is");
    }
    brack();
    of();
    divi();
    multi();
    addition();
    minus();
}

math(12, 10, 8, 6, 4, 2, 0);

