//Load the data
d3.csv("data/CivicAssocData.csv", function(error, csvData) {
  console.log("csv:", csvData);
  barChart(csvData);
});

console.log("Large Civic Associations")

var svgWidth = 800;
var svgHeight = 500;

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
    .range([0, svgWidth - 15]);

  var bars = svg.selectAll('rect')
    .data(barData);

  bars.enter().append("rect")
    .attr("height", 5)
    .attr("width", function(d) {
      console.log(d)
      return xScale(minYear + parseFloat(d["YEARS IN EXISTENCE"]));
    })
    .attr('y', function(d, i) {
      return i * 10;
    })
    .attr('x', function(d, i) {
      return xScale(parseFloat(d["FOUNDING YEAR"]))
    })
    .on("mousemove", function(d) {
      var mouse = d3.mouse(document.body);
      d3.select("#tooltip")
          .style("display", "inline-block")
          .style("postion", "relative")
          .html("<div class='tooltip-title'>" + d["ASSOCIATION"] + "<br>" + " Founding Year:  " + d["FOUNDING YEAR"] + "<br>" + " Ending Year:  " + d["ENDING YEAR"] + "</br>" + "</div>")
          .style("left", mouse[0] + 20 + "px")
          .style("top", mouse[1] - 50 + "px");
    })
    .on("mouseout", function(d) {
      d3.select("#tooltip")
          .style("display", "none")
    })

//  var colorScale = d3.scale.ordinal()
//    .domain(d["ASSOCIATION TYPE"])
//    .range(['#ddd', 'red'])

        .attr("fill", "#297fca");

//  var labels = svg.selectAll("text")
//    .data(barData);

//  labels.enter().append("text")
//    .text(function(d) {
//      return d["ASSOCIATION"];
//    })
//    .attr('y', function(d, i) {
//      return i * 10;
//    })
//    .attr('x', 0);

  var xAxis = d3.axisBottom(xScale)
      .tickFormat(d3.format("d"));
      d3.select("#xAxis").call(xAxis);
}

