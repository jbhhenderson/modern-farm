export const harvestPlants = (plantsArray) => {
    for (const plant of plantsArray) {
        const plantAmount = plant.output
        if (plant.type === 'Corn'){
            let i = 0
            while (i < (plantAmount / 2)){
                plantsArray.push(plant)
                i++
            }
        }
        let i = 0
        while (i < plantAmount){
            plantsArray.push(plant)
            i++
        }
    }
    
    return plantsArray
}