let arr1 = [
    { id: "abdc4051", date: "2017-01-24" }, 
    { id: "abdc4052", date: "2017-01-22" }
  ];
  let arr2 = [
    { id: "abdc4051", name: "ab" },
    { id: "abdc4052", name: "abc" }
  ];
  let new_array = arr1.map((item, i) => Object.assign({}, item, arr2[i]));

  console.log(new_array);