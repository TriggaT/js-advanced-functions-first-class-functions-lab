// Code your solution in this file!
// // 
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(){
    newDrivers = drivers.slice(0,2)
    return newDrivers
}

const returnLastTwoDrivers = function(){
    newDrivers = drivers.slice(-2)
    return lastDrivers
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(m){
    return function(fare){
        return fare * m
    }
}

const fareDoubler = function(fare){return createFareMultiplier(2)(fare)}
const fareTripler = function(fare){return createFareMultiplier(3)(fare)}

function selectDifferentDrivers(drivers, selectedDrivers){
    if (selectedDrivers === selectingDrivers[0]){ 
        return returnFirstTwoDrivers(drivers)
    }

    if (selectedDrivers === selectingDrivers[1]){
       return  returnLastTwoDrivers(drivers)
    }
}