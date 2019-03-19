console.log("Large Civic Associations")
var svgWidth = 1200;
var svgHeight = 400;

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "barChart");

//Load the data
d3.csv("data/CivicAssocData.csv", function(error, data) {
  console.log("csv:", data)
barChart(data)
});

function barChart(dataset){
}

var barPadding = 5;
var barWidth = (svgWidth / dataset.length);
var a = parseFloat("FOUNDING YEAR");
var b = parseFloat("ENDING YEAR");

var barChart = svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", function(d) {
    return svgHeight - d
  })
  .attr("height", function(d) {
    return d;
})
.attr("width", barWidth - barPadding)
.attr("transform", function (d, i) {
  var xCoordinate = barWidth * i;
  return "translate("+ xCoordinate +")";
});



//d3.select("containerOne")
//    .selectAll("rectOne").style("color", function(d, i) {return i % 2 ? "rgb(227,38,42)" : "rgb(41,171,226)";})
//    .data()
//    .enter().append("rectOne")
//      .text(function(d) { return "ASSOCIATION" + d + "!"; });

// Update...
//  var rectOne = d3.select("containerOne")
//    .selectAll("rectOne")
//    .data()
//      .text(function(d) { return d; });

// Enter...
//  rectOne.enter().append("containerOne")
//    .text(function(d) { return d; });

// Exit...
//  rectOne.exit().remove();
  


  