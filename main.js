// ------------------Question 1 --------------------------
var Q1input1 = document.getElementById("Q1input1"),
    Q1result = document.getElementById("Q1result"),
    Q1btnClick = document.getElementById("Q1btnClick");
Q1btnClick.onclick = function () {
    Q1result.innerHTML = Q1input1.value;
}

// ------------------Question 2 --------------------------
var input1 = document.getElementById("input1"),
    input2 = document.getElementById("input2"),
    result = document.getElementById("result"),
    button1 = document.getElementById("btnClick");
button1.onclick = function () {
    if (input1.value % 3 == 0 && input1.value % 4 == 0 ){
        result.innerHTML = "yes";
    }
    else {
        result.innerHTML = "no";
    }
}
// ------------------Question 3 --------------------------
var Q3input1 = document.getElementById("Q3input1"),
    Q3input2 = document.getElementById("Q3input2"),
    Q3result = document.getElementById("Q3result"),
    Q3btnClick = document.getElementById("Q3btnClick");
Q3btnClick.onclick = function () {
    if (Q3input1.value < Q3input2.value) {
        Q3result.innerHTML = Q3input2.value;
    } else if (Q3input2.value < Q3input1.value) {
        Q3result.innerHTML = Q3input1.value;
    } else {
        Q3result.innerHTML = 0;
    }
}

// ------------------Question 4 --------------------------
var Q4input1 = document.getElementById("Q4input1"),
    Q4result = document.getElementById("Q4result"),
    Q4btnClick = document.getElementById("Q4btnClick");
Q4btnClick.onclick = function () {
    if (Q4input1.value < 0) {
        Q4result.innerHTML = "Negative";
    } else if (Q4input1.value >= 0) {
        Q4result.innerHTML = "Positive";
    }
    else {
        Q4result.innerHTML = "Not a Number My Bro";
    }
}

// ------------------Question 5 --------------------------
var Q5input1 = document.getElementById("Q5input1"),
    Q5input2 = document.getElementById("Q5input2"),
    Q5input3 = document.getElementById("Q5input3"),
    min = document.getElementById("min"),
    max = document.getElementById("max"),
    Q5btnClick = document.getElementById("Q5btnClick");
Q5btnClick.onclick = function () {
    if (Q5input1.value < Q5input2.value && Q5input1.value < Q5input3.value) {
        min.innerHTML = Q5input1.value;
    } else if (Q5input2.value < Q5input1.value && Q5input2.value < Q5input3.value) {
        min.innerHTML = Q5input2.value ;
    } else if (Q5input3.value < Q5input1.value && Q5input3.value < Q5input2.value) {
        min.innerHTML = Q5input3.value ;
    }
    if (Q5input1.value > Q5input2.value && Q5input1.value > Q5input3.value) {
        max.innerHTML = Q5input2.value;
    } else if (Q5input2.value > Q5input1.value && Q5input2.value > Q5input3.value) {
        max.innerHTML = Q5input1.value;
    } else if (Q5input3.value > Q5input1.value && Q5input3.value > Q5input2.value) {
        max.innerHTML = Q5input3.value;
    }
}
// ------------------Question 6 --------------------------
var Q6input1 = document.getElementById("Q6input1"),
    Q6result = document.getElementById("Q6result"),
    Q6btnClick = document.getElementById("Q6btnClick");
Q6btnClick.onclick = function () {
    if (Q6input1.value % 2) {
        Q6result.innerHTML = "odd";
    }
    else {
        Q6result.innerHTML = "even";
    }
}

// ------------------Question 8 --------------------------
var Q8input1 = document.getElementById("Q8input1"),
    Q8result = document.getElementById("Q8result"),
    Q8btnClick = document.getElementById("Q8btnClick");
Q8btnClick.onclick = function () {
    if (Q8input1.value == 'a' || Q8input1.value == 'e' || Q8input1.value == 'i' || Q8input1.value == 'o' || Q8input1.value == 'u' || Q8input1.value == 'A' || Q8input1.value == 'E' || Q8input1.value == 'I' || Q8input1.value == 'O' || Q8input1.value == 'U') {
        Q8result.innerHTML = "vowel";
    }
    else {
        Q8result.innerHTML = "Consonant";
    }
}

// ------------------Question 10 --------------------------
// var Q10input1 = document.getElementById("Q10input1"),
//     Q10result = document.getElementById("Q10result"),
//     Q10btnClick = document.getElementById("Q10btnClick");
// Q10btnClick.onclick = function () {
//     for (i = 1 ; i < 12; i++) {
//     console.log( i * Q10input1.value);
//     Q10result.innerHTML = i * Q10input1.value;
//     }
// }

// ------------------Question 11 --------------------------
// var Q11input1 = document.getElementById("Q11input1"),
//     Q11result = document.getElementById("Q11result"),
//     Q11btnClick = document.getElementById("Q11btnClick");
// Q11btnClick.onclick = function () {
//     for (var i = 2; i <= Q11input1.value; i = i + 2) {
//         console.log(i);
//         Q11result.innerHTML = i + " you can see loop in console";
//     }
// }

// ------------------Question 12 --------------------------
var Q12input1 = document.getElementById("Q12input1"),
    Q12input2 = document.getElementById("Q12input2"),
    Q12result = document.getElementById("Q12result"),
    Q12btnClick = document.getElementById("Q12btnClick");
Q12btnClick.onclick = function () {
    console.log(Q12input1.value ** Q12input2.value);
    Q12result.innerHTML = Q12input1.value ** Q12input2.value;
}

// ------------------Question 1212 --------------------------
var N1 = document.getElementById("N1"),
    N2 = document.getElementById("N2"),
    N3 = document.getElementById("N3"),
    N4 = document.getElementById("N4"),
    N5 = document.getElementById("N5"),
    total = document.getElementById("total"),
    average = document.getElementById("average"),
    Percentage = document.getElementById("Percentage"),
    Q1212btnClick = document.getElementById("Q1212btnClick");
Q1212btnClick.onclick = function () {
    var Total = Number(N1.value) + Number(N2.value) + Number(N3.value) + Number(N4.value) + Number(N5.value);
    // var Average = total / 5 ;
    total.innerHTML = Total;
    // Number(total);
    // console.log(typeof(total))
    average.innerHTML = (Number(N1.value) + Number(N2.value) + Number(N3.value) + Number(N4.value) + Number(N5.value)) / 5;

    Percentage.innerHTML = ((Number(N1.value) + Number(N2.value) + Number(N3.value) + Number(N4.value) + Number(N5.value)) / 500) * 100 + '%';

}

// ------------------Question 13 --------------------------

var Q13input1 = document.getElementById("Q13input1"),
    Q13result = document.getElementById("Q13result"),
    Q13btnClick = document.getElementById("Q13btnClick");
Q13btnClick.onclick = function () {
    switch (Q13input1.value) {
        case "1":
            Q13result.innerHTML = 'Days in Month: 31';
            break;
        case "2":
            Q13result.innerHTML = 'Days in Month: 28';
            break;
        case "3":
            Q13result.innerHTML = 'Days in Month: 31';
            break;
        case "4":
            Q13result.innerHTML = 'Days in Month: 30';
            break;
        case "5":
            Q13result.innerHTML = 'Days in Month: 31';
            break;
        case "6":
            Q13result.innerHTML = 'Days in Month: 30';
            break;
        case "7":
            Q13result.innerHTML = 'Days in Month: 31';
            break;
        case "8":
            Q13result.innerHTML = 'Days in Month: 31';
            break;
        case "9":
            Q13result.innerHTML = 'Days in Month: 30';
            break;
        case "10":
            Q13result.innerHTML = 'Days in Month: 31';
            break;
        case "11":
            Q13result.innerHTML = 'Days in Month: 30';
            break;
        case "12":
            Q13result.innerHTML = 'Days in Month: 31';
            break;
    }
}

// ------------------Question 14 --------------------------
var Q14input1 = document.getElementById("Q14input1"),
    Q14result = document.getElementById("Q14result"),
    Q14btnClick = document.getElementById("Q14btnClick");
Q14btnClick.onclick = function () {
// 1.6093 
// var x =5;
function ConvertMileToKilo() {  
    console.log(Q14input1.value / 1.6093 );
    Q14result.innerHTML = Q14input1.value / 1.6093;
}
ConvertMileToKilo();
}
// 1.6093 
// var x =5;
// function ConvertMileToKilo() {  
//     console.log(x / 1.6093 );
// }
// ConvertMileToKilo();


