console.log("Large Civic Associations")
  //Load the data
  d3.csv("data/CivicAssocData.csv", function(error, data) {
    console.log("csv:",data)
  barChart(data)
});

  function barChart(dataset){

}