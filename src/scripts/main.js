import { usePlants } from "./field.js";
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";

console.log("Welcome to the main module")

const yearlyPlan = createPlan()

for (const plan of yearlyPlan) {
    console.log(plan)
}


// const cornSeed = createCorn()

// console.log(Array.isArray(cornSeed))

// addPlant(cornSeed)

// const plantTest = usePlants()

// console.log(plantTest)

//console.log(usePlants(addPlant(createCorn())))

plantSeeds(yearlyPlan)
console.log(usePlants())