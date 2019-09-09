var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"] ;
function addElementToBeginningOfArray(chocolateBars,foo){
return ["foo",...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars,foo){
  chocolateBars.unshift("foo");
  return chocolateBars;
}
 function addElementToEndOfArray (chocolateBars,foo){
  return[...chocolateBars,"foo"];
 }
function destructivelyAddElementToEndOfArray(chocolateBars,foo){
chocolateBars.push("foo");
}
function accessElementInArray(chocolateBars,2){
  var chocolateBars= ["snickers", "hundred grand", "kitkat", "skittles"] ;
 return chocolateBars[2];
}
