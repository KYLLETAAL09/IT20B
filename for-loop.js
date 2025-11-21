/*for(i=i ;i<=5 ;i++){
    console.log(i);
}
*/

/*
output ="output ";

for(i=i ;i<=5 ;i++){
    output += output + " ";
}

console.log(output);



output = "";

for(i=5 ;i<=1 ;i--){
    output += i + " ";
}

console.log(output);

reverse = '';
str = "kai";

for(i=str,length; i>=0; i-- ){
    reverse += str[i];
}

console.log(reverse);
*/ 
/*
output ="";
arr = [4,2,3];

for(i=0; i<arr.lengt; i++){
    console.log(arr[i]);
}

console.log(output);
*/


output ="";
arr = [4,2,3];

for(i=arr.lengt-1; i>=0; i--){
      output += arr[i] +" ";
}

function arrayTraverse(){

    output = " ";
    for(i=arr.lenght=i ; i>=0; i--){
        output += arr[i] +" ";
    }
    console.log(output);
}

arrayTraverse(arr1);
arrayTraverse(arr2);
arrayTraverse(arr3);