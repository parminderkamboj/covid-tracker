let data = require('./timelinedata.json').areas[0];
//console.log(JSON.stringify(data));
let states = data.areas;
let allLocations = [];
let allLocs = states.map(e => ({ id: e.id, areas: e.areas }));
for (state of states) {
    for (area of state.areas) {
        allLocations.push(area)
    }
    //allLocations.push(e);
}
console.log(allLocations[0]);
// function closestLocation(targetLocation, locationData) {
//     function vectorDistance(dx, dy) {
//         return Math.sqrt(dx * dx + dy * dy);
//     }

//     function locationDistance(location1, location2) {
//         var dx = location1.latitude - location2.latitude,
//             dy = location1.longitude - location2.longitude;

//         return vectorDistance(dx, dy);
//     }

//     return locationData.reduce(function (prev, curr) {
//         var prevDistance = locationDistance(targetLocation, prev),
//             currDistance = locationDistance(targetLocation, curr);
//         return (prevDistance < currDistance) ? prev : curr;
//     });
// }


