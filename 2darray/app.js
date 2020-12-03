// var arr2d = [
        // [2,3,4,1],
        // [6,2,1,0],
        // [2,1,5,3],
        // [3,7,2,0],
        // ];

        // for(var i = 0; i<arr2d.length; i++){
        //     console.log(arr2d[i]);
        //     for(var j = 0; j<arr2d[i].length; j++){
        //         console.log(arr2d[i][j])
        //     }
        // }
        
        // var arr = [23,45,67,234,56,23,56,45,34,45,67,6,5];
        // var isEven = 0;

        // for(let i=0; i<arr.length; i++){
        //     if(arr[i] % 2 === 0){
        //         isEven++;
        //         // document.write(arr[i] + "<br>");   
        //     }   
        // }
        // document.write("Total Even Number is " + isEven)
        
        // var firstName = prompt("Enter Your First Name");
        // var lastName = prompt("Enter Your Last Name");
        // var fName = [];
        // var lName = [];
        // var fullName = [];
        // fName.push(firstName)
        // lName.push(lastName)
        // for(let i=0; i<fName.length; i++){
        //     for(let j=0; j<lName.length; j++){
        //         fullName.push(fName[i] + lName[j])
        //     }
        // }
        // document.write(fullName + "<br> ")

        var mat1 = [[0,0],[0,0]];
        var mat2 = [[0,0],[0,0]];
        var result = [[0,0],[0,0]]
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
                result[i][j] = mat1[i][j] + mat2[i][j];
            }
        }
        document.getElementById('mat1').innerHTML = mat1[0] + "<br>" + mat1[1];
        document.getElementById('mat2').innerHTML = mat2[0] + "<br>" + mat2[1];
        document.getElementById('result').innerHTML = result[0] + "<br>" + result[1];