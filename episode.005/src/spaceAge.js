const earthSec  = 31557600;
const mercurySec  = 0.2408467;
const venusSec  = 0.61519726;
const marsSec  = 1.8808158;
const jupiterSec  = 11.862615;
const saturnSec  = 29.447498;
const uranusSec  = 84.016846;
const neptuneSec  = 164.79132;

export default function spaceAge(planet, sec) {
    switch(planet) {
        case "Earth":
            return calculAge(sec, earthSec, true);
        case "Mercury":
            return calculAge(sec, mercurySec, false);
        case "Venus":
            return calculAge(sec, venusSec, false);
        case "Mars":
            return calculAge(sec, marsSec, false);
        case "Jupiter":
            return calculAge(sec, jupiterSec, false);
        case "Saturn":
            return calculAge(sec, saturnSec, false);
        case "Uranus":
            return calculAge(sec, uranusSec, false);
        case "Neptune":
            return calculAge(sec, neptuneSec, false);
        default:
            break;
    }
}

function calculAge(sec, planetSec, isEarth) {
    if(isEarth) return roundToTwo(sec/planetSec)

    return  roundToTwo(sec / (60 * 60 * 24 * 365.25) / planetSec);
}

function roundToTwo(num) {    
    return Number(num.toFixed(2));
}