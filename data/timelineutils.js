
let states = data.areas[0].areas;
let allLocations = [];
for (state of states) {
    for (area of state.areas) {
        allLocations.push(area)
    }
}

let targetLoc = {
    lat: 33.717102604,
    long: -112.2769465,
}

function closestLocation(targetLocation, locationData) {
    function vectorDistance(dx, dy) {
        return Math.sqrt(dx * dx + dy * dy);
    }

    function locationDistance(location1, location2) {
        var dx = location1.lat - location2.lat,
            dy = location1.long - location2.long;

        return vectorDistance(dx, dy);
    }

    return locationData.reduce(function (prev, curr) {
        var prevDistance = locationDistance(targetLocation, prev),
            currDistance = locationDistance(targetLocation, curr);
        return (prevDistance < currDistance) ? prev : curr;
    });
}


