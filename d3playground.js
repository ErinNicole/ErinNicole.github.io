console.log ("Hello!")

var title = d3.select("#title");

title
    .attr("class", "big")
    .style("color", "steelblue")
    .style("font-family", "Helvetica");

var svg = d3.select("svg");
/*var dataSetOne = ["red", "redorange", "orange"];
var dataSetTwo = ["green","steelblue","blue","purple","rebeccapurlple"];*/

function changeColor(color){
    svg.selectAll(".dot").attr("fill", color)
    return color.random();
    }

function dance() {
    svg.selectAll(".dot").attr("cx", function() {
        return Math.random() * 200;
    });
}

var starterData = [
    {name: "Dave", height: 72},
    {name: "Matthew", height: 67},
    {name: "Diana", height: 64},
    {name: "Thor", height: 86}
];

function redrawCircles() {

    var newCircles = svg.selectAll(".dot")
        .data(starterData);

    newCircles.enter().append("circle")
        .attr("class", "dot")
        .attr("cx", function() {
            return Math.random() * 200;
        })
        .attr("cy", 50)
        .attr("r", 20);

    newCircles.attr("r", function(d) {
        return d.height / 2;
    });
    
    newCircles.exit().remove();
}

