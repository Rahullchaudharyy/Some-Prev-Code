document.addEventListener('DOMContentLoaded', function() {
    let UserInput = document.getElementById("date");
    let age_result = document.querySelector(".Age-result");
    let Submit = document.getElementById("Calculate-Button");

    UserInput.max = new Date().toISOString().split("T")[0];

    function CalculateAge() {
        let BirthDate = new Date(UserInput.value);

        let D1 = BirthDate.getDate();
        let M1 = BirthDate.getMonth() + 1;
        let Y1 = BirthDate.getFullYear();

        let Today = new Date(); // Get the current date

        let D2 = Today.getDate();
        let M2 = Today.getMonth() + 1;
        let Y2 = Today.getFullYear();

        let D3, Y3, M3;

        Y3 = Y2 - Y1;

        if (M2 >= M1) {
            M3 = M2 - M1;
        } else {
            Y3--;
            M3 = 12 + M2 - M1;
        }

        if (D2 >= D1) {
            D3 = D2 - D1;
        } else {
            M3--;
            D3 = getDaysInMonth(Y2, M2 - 1) + D2 - D1;
        }

        if (M3 < 0) {
            M3 = 0;
            Y3--;
        }

        // console.log(Y3, M3, D3);
        age_result.innerHTML = `Your age is ${Y3} Years ${M3} months ${D3} days`;
    }

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    Submit.addEventListener('click', CalculateAge);
});
