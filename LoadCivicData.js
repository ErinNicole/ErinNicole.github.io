//Load the data
d3.csv("data/CivicAssocData.csv", function(error, csvData) {
  console.log("csv:", csvData);
  barChart(csvData);
  barChartKey(csvData);
});

console.log("Large Civic Associations")

var svgWidth = 900;
var svgHeight = 600;
var color = d3.scaleOrdinal()
     .range(["#3399ff", "#66ccff", "#99ffff", "#66cccc", "#6666ff", "#9999ff", "#cc99ff", "#ccccff", "#993399", "#ff6699", "#ff3333", "#cc3333"]);
var border = 1;
var borderColor = 'black';

//Draw Bar Chart 
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

  //Creating a tooltip
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
  //Creating the X Axis  
  var xAxis = d3.axisBottom(xScale)
    .tickFormat(d3.format("d"));
  d3.select("#xAxis").call(xAxis);

  //Creating grid lines
  var grid = d3.axisBottom(xScale)
    .tickSize(-svgHeight)
    .tickFormat("");

  d3.select("#grid").call(grid)
    .attr("transform", "translate(0,560)")
  }

//Creating a key
function barChartKey(barData) {
  var svg = d3.select('.barChartKey')
    .attr("width", 900)
    .attr("height", 150)
    .style("display", "inline-block")
    .style("border", border);

  // var borderPath = svg.append("rect")
    // .attr("x", 100)
    // .attr("y", 0)
    // .attr("height", 600)
    // .attr("width", 900)
    // .style("stroke", borderColor)
    // .style("fill", "none")
    // .style("stroke-width", border);

  var categories = d3.nest()
    .key(function(d) {
      return d["ASSOCIATION TYPE"]
    })  
    .entries(barData);

  var categoryNames = svg.select("#categories").selectAll("text")
    .data(categories);
  categoryNames.enter().append("text")
   .text(function(d) {
     return d.key;
   })
   .attr('y', function(d, i) {
     return i * 12;
   })
   .attr('dy', 7)
   .attr('x', 170);

  var swatch = svg.selectAll('rect')
    .data(categories);

  swatch.enter().append("rect")
    .attr("height", 8)
    .attr("width", 8)
    .attr('y', function (d, i) {
      return i * 12;
    })
    .attr('x', 150)
    
    // function(d, i) {
    //   return i * 12;
    // })
    .attr("fill", function(d) {
        return color(d.key);
    });
}
//Draw Bar Chart B
// function barChartB(barData) {

//   var svg = d3.selectAll('.barChartB')
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);

//  var minYear = d3.min(barData, function(d) {
//      return parseFloat(d["FOUNDING YEAR"])
//    });

//  var maxYear = d3.max(barData, function(d) {
//      return parseFloat(d["ENDING YEAR"])
//    });
  
  // var xScale = d3.scaleLinear()
  //   .domain([minYear, maxYear])
  //   .range([10, 650]);

  // var labels = svg.select("#labels").selectAll("text")
  //   .data(barData);

  // labels.enter().append("text")
  //   .text(function(d) {
  //     return d["ASSOCIATION"];
  //   })
  //   .attr('y', function(d, i) {
  //     return i * 12;
  //   })
  //   .attr('dy', 7)
  //   .attr('x', 670);

//  var bars = svg.selectAll('rect')
//    .data(barData);

  // bars.enter().append("rect")
  //   .attr("height", 8)
  //   .attr("width", function(d) {
  //     console.log(d)
  //     return xScale(minYear + parseFloat(d["YEARS IN EXISTENCE"]));
  //   })
  //   .attr('y', function(d, i) {
  //     return i * 12;
  //   })
  //   .attr('x', function(d, i) {
  //     return xScale(parseFloat(d["FOUNDING YEAR"]))
  //   })
  //   .attr("fill", function(d) {
  //       return colorB(d["SCOPE AT INCEPTION"]);
  //   })
    
  //   .on("mousemove", function(d) {
  //     var mouse = d3.mouse(document.body);
  //     d3.select("#tooltip")
  //         .style("display", "inline-block")
  //         .style("postion", "relative")
  //         .html("<div class='tooltip-title'>" + d["ASSOCIATION"] + "<br>" + " Scope at Inception:  " + d["SCOPE AT INCEPTION"] + "<br>" + " Founding Year:  " + d["FOUNDING YEAR"] + "<br>" + " Ending Year:  " + d["ENDING YEAR"] + "</br>" + "</div>")
  //         .style("left", mouse[0] + 20 + "px")
  //         .style("top", mouse[1] - 50 + "px");
  //   })
  //   .on("mouseout", function(d) {
  //     d3.select("#tooltip")
  //         .style("display", "none")
  //   })

  // var xAxis = d3.axisBottom(xScale)
  //   .tickFormat(d3.format("d"));
  //   d3.select("#xAxis").call(xAxis);
// }

