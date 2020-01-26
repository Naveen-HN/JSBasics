let arr1 = [
    { id: "abdc4051", date: "2017-01-24" }, 
    { id: "abdc4052", date: "2017-01-22" }
  ];
  let arr2 = [
    { id: "abdc4051", name: "ab" },
    { id: "abdc4052", name: "abc" }
  ];
  let new_array = [];
  new_array.push({...arr1,...arr2});
  console.log(new_array);