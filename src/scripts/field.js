let plantsArray = []

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const cornSeed of seedObject) {
            plantsArray.push(cornSeed)
        }
    } else {
    plantsArray.push(seedObject)
    }
}

export const usePlants = () => {
    return plantsArray
}
