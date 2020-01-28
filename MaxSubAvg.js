let nums = [1,12,-5,-6,50,3];
let k=4;
let sum=0;
for(var i=0; i<k;i++){
    sum+=nums[i];
}
let max_sum=sum;
for(var j=k;j<nums.length;j++){
    sum+= (nums[j]-nums[j-k]);
    max_sum = Math.max(sum,max_sum);
}

console.log("Average: ",max_sum/k);