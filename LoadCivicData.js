//Load the data
d3.csv("data/CivicAssocData.csv", function(error, csvData) {
  console.log("csv:", csvData);
  barChart(csvData);
});

console.log("Large Civic Associations")

var svgWidth = 1200;
var svgHeight = 400;
var scaleFactor = 3;

function barChart(barData) {

  var svg = d3.selectAll('.barChart')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  var bars = svg.selectAll('rect')
    .data(barData);

  bars.enter().append("rect")
    .attr("height", 10)
    .attr("width", function(d) {
      console.log(d)
        return d["YEARS IN EXISTENCE"] * scaleFactor;
    })
    .attr('y', function(d, i) {
      return i * 20;
    })
    .attr('x', function(d, i) {
      console.log(d)
        return d["FOUNDING YEAR"];
    })
  var dataExtent = d3.extent(barData, function(d) {
      return d["FOUNDING YEAR"];
    });
  var xScale = d3.scaleLinear()
    .domain(dataExtent)
    .range([0, window.innerWidth]);  

  }




//var dataExtent = d3.extent(data, function(d) {
//    return d["FOUNDING YEAR"];

//var barWidth = (svgWidth / data.length);
//var a = parseFloat("FOUNDING_YEAR");
//var b = parseFloat("ENDING_YEAR");

//var barChart = svg.select("barChart")
//var rect = svg.selectAll("rect")
//  .data(data)
//var barWidth = 10
//var barPadding = 5

//function barChart() {
//  rect.enter().append("rect")  
//    .attr("y", function(d)["FOUNDING_YEAR"]) 
//      return svgHeight - d
//    .attr("height", function(d) {
//      return d;
//    })
//    .attr("width", function(d)["ENDING_YEAR"])
//    .attr("transform", function (d, i) {
//    });

//d3.selectAll("rect")
//  .on("click", function(d) {
//    console.log(d);
//  })
//  .on("mousemove", function(d) {
//    var mouse = d3.mouse(this);
//    d3.select("#tooltip")
//        .style("display", "block")
//        .html("<h1>" + d + "</h1>")
//        .style("left", mouse[0] + "px")
//        .style("top", mouse[1] - 50 + "px");
//  })
//  .on("mouseout", function(d) {
//    d3.select("#tooltip")
//        .style("display", "none")
//  });

//var axis = d3.axisBottom(xScale);
//d3.select("#xAxis").call(axis);

//var xCoordinate = barWidth * i;
//  return "translate("+ xCoordinate +")";



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

