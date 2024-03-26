// Code your solution here

function findMatching(drivers, name){
   const lowerCaseName= name.toLowerCase()
  return drivers.filter((name)=> name.toLowerCase()===lowerCaseName)

}
function fuzzyMatch(drivers,letters){
    return drivers.filter(driver=>driver.startsWith(letters))


}
function matchName(drivers,name){
    return drivers.filter((drivers) => drivers.name === name)

}
