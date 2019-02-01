console.log ("Hello!")

var title = d3.select("#title");

console.log(title);

title
    .attr("class", "big")
    .style("color", "black")
    .style("font-family", "Helvetica");

var svg = d3.select("svg");
var circles = d3.selectAll(".dot");

function changeColor(color){
    circles.attr("fill", color);
}

function dance() {
    circles.attr("cx", function() {
        return Math.random() * 500;
    });
}

var starterData = [
    {name: "Davd", height: 72},
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
        return d.height;
    });
    
    newCircles.exit().remove();
}