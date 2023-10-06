// code your solution here
function saturdayFun (activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

const mondayWork = function(defaultAct = "go to the office") {
    return(`This Monday, I will ${defaultAct}.`)
};

function wrapAdjective (str = "*") {

    return function (obje = "special") {
        return `You are ${str}${obje}${str}!`
    }
}