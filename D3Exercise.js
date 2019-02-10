//javascript
var svg = d3.select("chart");
var rectangles = svg.selectAll(".rect");
var dataSetOne = ["red", "redorange", "orange"];
var dataSetTwo = ["green","steelblue","blue","purple","rebeccapurlple"];

function drawRectangles(width,colors) {

    var colorData = rect.data(colors);
    colorData.enter().append("rect")
        .attr("class", "chart")
        .attr("x", function(d,i) {return i*widith+5;})
        .attr("y",5)
        .attr("width", width)
        .attr("height", width)
        .attr("fill", function(d) {return d;});
    colorData.exit().remove();

    colorData
        .attr("x", function(d,i) {return i*widith+5;})
        //.attr("y",5)
        .attr("width", width)
        .attr("height", width)
        .attr("fill", function (d) {return d;});
    squares=svg.selectAll(".rect");
}