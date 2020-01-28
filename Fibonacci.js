let num =10;
let series = [];
series[0] = 0;
series[1] = 1;
for(var i=2;i<num;i++){
    series[i] = series[i-1] + series[i-2];
}
console.log(series);