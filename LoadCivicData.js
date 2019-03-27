//Load the data
d3.csv("data/CivicAssocData.csv", function(error, csvData) {
  console.log("csv:", csvData);
  barChart(csvData);
});

console.log("Large Civic Associations")

var svgWidth = 800;
var svgHeight = 500;
//var scaleFactor = .1;

//Draw the Bar Chart
function barChart(barData) {

  var svg = d3.selectAll('.barChart')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  var minYear = d3.min(barData, function(d) {
      return parseFloat(d["FOUNDING YEAR"])
    });

  var maxYear = d3.max(barData, function(d) {
      return parseFloat(d["ENDING YEAR"])
    });
  
  var xScale = d3.scaleLinear()
    .domain([minYear, maxYear])
    .range([0, svgWidth - 25]);

  var bars = svg.selectAll('rect')
    .data(barData);

  bars.enter().append("rect")
    .attr("height", 5)
    .attr("width", function(d) {
      console.log(d)
    return d["YEARS IN EXISTENCE"];
//        return d["YEARS IN EXISTENCE"] * scaleFactor;
    })
    .attr('y', function(d, i) {
      return i * 10;
    })
    .attr('x', function(d, i) {
      return xScale(parseFloat(d["FOUNDING YEAR"]));
    })
    .attr("fill", "steelblue");

    var axis = d3.axisBottom(xScale);
     d3.select("#xAxis").call(axis);

    var xCoordinate = svgWidth * i;
      return "translate("+ xCoordinate +")";




//  var dataExtent = d3.extent(barData, function(d) {
//      return d["FOUNDING YEAR"];

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
}
