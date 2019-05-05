var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "garlic"
var ingredient6 = "tomato"
var ingredient7 = "garlic"

var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]
 
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(chocolateBars,twix)
  return  [twix, ...chocolateBars] 
}

function destructivelyAddElementToBeginningOfArray(chocolateBars)
  chocolateBars.unshift(twix)
  return chocolateBars
}
function addElementToEndOfArray (chocolateBars, twix)
  return [...chocolateBars, candyString]; return []