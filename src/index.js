module.exports = function solveEquation(equation) {
  // your implementation
    var arr = equation.split(' ');
    var a = parseFloat(arr[0]);
    var b = parseFloat(arr[4]);
    var c = parseFloat(arr[8]);
    var changeSign = function (sign, number){
        if(sign == '-'){
            debugger;
            number = number * (-1);
            return number;
        }
        else {
            return number;
        }
    };
    b = changeSign(arr[3], b);
    c = changeSign(arr[7], c);
    var d = Math.round(Math.sqrt(b * b - 4 * a * c));
    var x1 = Math.round((-b + d) / (2 * a));
    var x2 = Math.round((-b - d) / (2 * a));
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(x1);
    console.log(x2);
    var answer = [x1, x2];
    answer = answer.sort(function(a, b) {
        return a - b;
    });
    return answer;
};
