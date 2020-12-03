var mat1 = [
    [0, 0],
    [0, 0]
];
var mat2 = [
    [0, 0],
    [0, 0]
];
var result = [
    [0, 0],
    [0, 0]
];
var numInput;

for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat1[i].length; j++) {
        mat1[i][j] = +prompt("taking matrix one data enter" + i + "," + j);
    }
}
for (let i = 0; i < mat2.length; i++) {
    for (let j = 0; j < mat2[i].length; j++) {
        mat2[i][j] = +prompt("taking matrix one data enter" + i + "," + j);
    }
}
for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
        result[i][j] = mat1[i][i - i] * mat2[i - i][j] + mat1[i][i - i + 1] * mat2[i - i + 1][j];;
    }
}

// result[i][j] = mat1[0][0] * mat2[0][0] + mat1[0][1] * mat2[1][0]
// result[i][j] = mat1[0][0] * mat2[0][1] + mat1[0][1] * mat2[1][1]
// result[i][j] = mat1[1][0] * mat2[0][0] + mat1[1][1] * mat2[1][0]
// result[i][j] = mat1[1][0] * mat2[0][1] + mat1[1][1] * mat2[1][1]

document.getElementById('mat1').innerHTML = mat1[0] + "<br>" + mat1[1];
document.getElementById('mat2').innerHTML = mat2[0] + "<br>" + mat2[1];
document.getElementById('result').innerHTML = result[0] + "<br>" + result[1];