let plantsArray = []

export const addPlant = (seedObject) => {
    plantsArray.push(seedObject)
}

export const usePlants = () => {
    return plantsArray
}