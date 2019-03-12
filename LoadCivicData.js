console.log("Large Civic Associations")

d3.csv("data/CivicAssocData.csv", function(error, data) {
    console.log("csv:",data)
    data.forEach(function(d) {
    });
});
//Visualization attributes//-------------
var w = 500;
var h = 100;
var barPadding = 1;

//Scales//---------------
var xScale =
d3.scale.ordinal()

.domain(d3.range(dataset.length))

.rangeRoundBands([0, w], 0.05);

var yScale =
d3.scale.linear()
    .domain([0,
d3.max(dataset)])
    .range([0,h]);

//SVG//--------------------
var svg = 
d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

//Bars//-------------------
var bars =
svg.selectAll('rect')
   .data(dataset)
   .enter()
   .append('rect')
   .attr('x', function(d, i) {return xScale(i);})
   .attr('y', function(d) {return h - yScale(d);})
   .attr('width', xScale.rangeBand())
   .attr('height', function(d) {return yScale(d);})
   .attr('fill', function(d) {return 'rgb(0,0, " + (d * 10) + ")';})
   .on('click', function() {sortBars();})
   .on('mouseover', function(d) { var xPos, yPos;})
//Get this bar's x/y values, then augment for the tooltip.//---
    xPos =
parseFloat(d3.select(this).attr("x")) + xScale.rangeBand() / 2;
    yPos = 
parseFloat(d3.select(this).attr("y")) / 2 + h / 2;

    d3.select('#tooltip')
      .style('left', xPos + 'px')
      .style('top', yPos + 'px')
      .select('#value')
      .text(d);

//Show the tooltip

    d3.select('#tooltip').classed('hidden', false)
      .on('mouseout', function() {

//Remove the tooltip
    d3.select('#tooltip').classed('hidden', true);
      });

//Labels//--------------------------

var labels = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .style("pointer-events", "none")
    .text(function(d) {return d;})
    .attr("text-ancor", "middle")
    .attr("x", function(d, i) {return xScale(i) + xScale.rangeBand() / 2;})
    .attr("y", function(d) {return h - yScale(d) + 14;})
    .attr("font-family", "Helvetica")
    .attr("fill", "white")
    .on('click', function() {sortBars();
    });

//Sorting utilities//-------------------

var sortOrder = false;

var sortBars = function() {
    sortOrder = !sortOrder;

    svg.selectAll('rect')
      .sort(function(a, b) {
          return sortCallback(a, b, sortOrder);
      })
      .transition()
      .delay(function(d, i) {
          return i * 50;
      })
      .transition()
      .delay(function(d, i) {
          return i * 50;
      })
      .duration(1000)
      .attr("x", function(d, i) {return xScale(i);
      });

      svg.selectAll('text')
        .sort(function(a, b) {return sortCallback(a, b, sortOrder);
      })
        .transition()
        .delay(function(d, i) {return i * 50;})
        .duration(1000)
        .attr("x", function(d, i) {return xScale(i) + xScale.rangeBand() / 2;});
      };

      var sortCallback = function(a, b, order) {if (order) {return d3.ascending(a, b);
        } else {
          return d3.descending(a, b);}
        };

