var test = [
    {id: 1, PlaceRef: "*00011", Component: "BATH", SubLocCode: "BAT", BarCode: ""},
    {id: 2, PlaceRef: "*00022", Component: "BAXI10R", SubLocCode: "KIT", BarCode:""},
    {id: 1, PlaceRef: "*00011", Component: "BATH", SubLocCode: "BAT", BarCode: ""},
    {id: 3, PlaceRef: "*00011", Component: "ANR190", SubLocCode: "B1", BarCode: ""}
  ]

  var uniq = [...new Map(test.map(item => [item.id,item])).values()];

  console.log(uniq);