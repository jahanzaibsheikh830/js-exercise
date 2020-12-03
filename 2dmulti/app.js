var mat1 = [
            [0,0],
            [0,0]
        ];
        var mat2 = [
                    [0,0],
                    [0,0]
                ];
        var result = [
                     [0,0],
                     [0,0]
                    ];
        var numInput;

        for(let i=0; i<mat1.length; i++){
            for(let j=0; j<mat1[i].length; j++){
                mat1[i][j] = +prompt("taking matrix one data enter" + i + "," + j);
            }
        }
        for(let i=0; i<mat2.length; i++){
            for(let j=0; j<mat2[i].length; j++){
                mat2[i][j] = +prompt("taking matrix one data enter" + i + "," + j);
            }
        }
        for(let i=0; i<result.length; i++){
            for(let j=0; j<result[i].length; j++){
                result[j][i] = mat1[i][j] * mat2[i][j] + mat1[i][1] * mat2[1][j];
            }
        }
        // document.getElementById('mat1').innerHTML = mat1[0] + "<br>" + mat1[1];
        // document.getElementById('mat2').innerHTML = mat2[0] + "<br>" + mat2[1];
        // document.getElementById('result').innerHTML = result[0] + "<br>" + result[1];

        console.log(mat1)
        console.log(mat2)
        console.log(result)