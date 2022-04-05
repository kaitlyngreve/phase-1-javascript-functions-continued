// code your solution here
function saturdayFun(activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`
}
                        // this is the 'default arguement'
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
                        //this is the 'visual flair'
function wrapAdjective(style = '*') {
    return function innerFunction(adjective = 'special') {
        return `You are ${style}${adjective}${style}!`
    }
}