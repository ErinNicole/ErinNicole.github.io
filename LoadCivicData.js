console.log("Large Civic Associations")

d3.csv("data/CivicAssocData.csv", function(error, data) {
    console.log("csv:",data)
    data.forEach(function(d) {
        d.export = parseFloat(d.export); //changes strings to numbers
    });
});