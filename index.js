// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(el){
    return el.toLowerCase()
  });
}

function nameToAttributes(drivers){

  return drivers.map(function(el){
      const first = el.split(" ")[0];
      const last = el.split(" ")[1];
      return {firstName: first, lastName: last}
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
