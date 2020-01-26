var test = [
    {id: 1, PlaceRef: "*00011", Component: "BATH", SubLocCode: "BAT", BarCode: ""},
    {id: 2, PlaceRef: "*00022", Component: "BAXI10R", SubLocCode: "KIT", BarCode:""},
    {id: 1, PlaceRef: "*00011", Component: "BATH", SubLocCode: "BAT", BarCode: ""},
    {id: 3, PlaceRef: "*00011", Component: "ANR190", SubLocCode: "B1", BarCode: ""}
  ]
  let unique = {};
  for(let i in test){
    objId = test[i]['id'];
    unique[objId] = test[i];
  }
  console.log(unique);