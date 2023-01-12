import { createPlan } from "./plan.js";
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";

console.log("Welcome to the main module")

const yearlyPlan = createPlan()

for (const plan of yearlyPlan) {
    console.log(plan)
}

import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()

console.log(Array.isArray(cornSeed))

addPlant(cornSeed)

const plantTest = usePlants()

console.log(plantTest)

