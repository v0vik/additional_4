module.exports = function multiply(first, second) {

  let arr1 = [];
  let arr2 = [];
 
  for (let i=second.length-1; i>=0; i--) {
    
    for (let j=first.length-1; j>=0; j--) {
      arr2.push(first.charAt(j) * second.charAt(i));
    }
    for (let k = second.length-1; k > i; k-- ) {
      arr2.unshift(0);
    }
    
    arr1.push(arr2);
    arr2 = [];
  }
  
  
  let result = [];
  let res = 0;

  for (let i = 0; i < arr1[arr1.length-1].length; i++) {
  
    for (let j = 0; j < arr1.length; j++) {
      res = res + (arr1[j][i] ?  arr1[j][i] : 0);
    }

    result.push(res%10);
    res = Math.floor(res/10);
  }
  
  if (res !== 0) result.push(res);
  
  result = result.reverse().join('');
  
return result;
}
