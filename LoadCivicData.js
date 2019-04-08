//Load the data
d3.csv("data/CivicAssocData.csv", function(error, csvData) {
  console.log("csv:", csvData);
  barChart(csvData);
  var categories = d3.nest()
    .key(function(d) {
      return d["ASSOCIATION TYPE"]; 
  })
    .entries(csvData);
  barChartKey(categories);
});

console.log("Large Civic Associations")

var svgWidth = 1400;
var svgHeight = 600;
var color = d3.scaleOrdinal()
     .range(["#3399ff", "#66ccff", "#99ffff", "#66cccc", "#6666ff", "#9999ff", "#cc99ff", "#ccccff", "#993399", "#ff6699", "#ff3333", "#cc3333"]);


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
    .range([10, 650]);

  var labels = svg.select("#labels").selectAll("text")
    .data(barData);

  labels.enter().append("text")
    .text(function(d) {
      return d["ASSOCIATION"];
    })
    .attr('y', function(d, i) {
      return i * 12;
    })
    .attr('dy', 7)
    .attr('x', 670);

  var bars = svg.selectAll('rect')
    .data(barData);

  bars.enter().append("rect")
    .attr("height", 8)
    .attr("width", function(d) {
      console.log(d)
      return xScale(minYear + parseFloat(d["YEARS IN EXISTENCE"]));
    })
    .attr('y', function(d, i) {
      return i * 12;
    })
    .attr('x', function(d, i) {
      return xScale(parseFloat(d["FOUNDING YEAR"]))
    })
    .attr("fill", function(d) {
        return color(d["ASSOCIATION TYPE"]);
    })
    
    .on("mousemove", function(d) {
      var mouse = d3.mouse(document.body);
      d3.select("#tooltip")
          .style("display", "inline-block")
          .style("postion", "relative")
          .html("<div class='tooltip-title'>" + d["ASSOCIATION"] + "<br>" + " Association Type:  " + d["ASSOCIATION TYPE"] + "<br>" + " Founding Year:  " + d["FOUNDING YEAR"] + "<br>" + " Ending Year:  " + d["ENDING YEAR"] + "</br>" + "</div>")
          .style("left", mouse[0] + 20 + "px")
          .style("top", mouse[1] - 50 + "px");
    })
    .on("mouseout", function(d) {
      d3.select("#tooltip")
          .style("display", "none")
    })

  var xAxis = d3.axisBottom(xScale)
    .tickFormat(d3.format("d"));
    d3.select("#xAxis").call(xAxis);
}
// gridlines in x axis function
function make_x_gridlines() {		
  return d3.axisBottom(x)
      .ticks(5)
}
  var grid = svg.selectAll('tick')
  .data(barData);

  grid.enter().append("tick")
  .attr("height", svgHeight)
  .attr("width", 1)
  .attr('y', axisBottom)
  .attr('x', function(d, i) {
    return make_x_gridlines()
  })

svg.append("g")			
    .attr("class", "grid")
    .call(make_x_gridlines()
    .tickSize(-height)
    .tickFormat("")
)

function barChartKey(barData) {
  var svg = d3.selectAll('.barChartKey')
  .attr("width", 400)
  .attr("height", 100)
  .style("display", "inline-block");

  var categories = svg.select("#categories").selectAll("text")
  .data(barData);
  categories.enter().append("text")
    .text(function(d) {
      return d["ASSOCIATION TYPE"];
    })
    .attr('y', function(d, i) {
      return i * 12;
    })
//    .attr('dy', 7)
//    .attr('x', 670);

  var swatch = svg.selectAll('rect')
  .data(barData);

  swatch.enter().append("rect")
  .attr("height", 8)
  .attr("width", 8)
  .attr('y', function(d, i) {
    return i * 12;
  })
  .attr('x', 5)
  .attr("fill", function(d) {
      return color(d["ASSOCIATION TYPE"]);
  })
}
