document.write("90. to find the kth greatest element in a given array of integers."+"<br>");
function test90(arr,k){
    arr.sort(function(a,b){return b-a;});
    return arr[k-1];
}
document.write("The array [-10,-25,-47,-36,0], the number :3  , Ans:"+test90([-10,-25,-47,-36,0],3)+"<br><br>");