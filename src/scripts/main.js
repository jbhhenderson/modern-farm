import { createPlan } from "./plan.js";

console.log("Welcome to the main module")

const yearlyPlan = createPlan()

for (const plan of yearlyPlan) {
    console.log(plan)
}

// import { createAsparagus } from "./seeds/asparagus.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)