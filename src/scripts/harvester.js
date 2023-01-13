export const harvestPlants = (plantsArray) => {
    const foodArray = []
    for (const plant of plantsArray) {
        let plantAmount = plant.output
        if (plant.type === 'Corn'){
            let i = 0
            plantAmount = plantAmount / 2
            while (i < plantAmount){
                foodArray.push(plant)
                i++
            }
        } else {
            let i = 0
            while (i < plantAmount){
                foodArray.push(plant)
                i++
            }
        }
    }
    
    return foodArray
}

// export const harvestPlants = (plantsArray) => {
//     for (const plant of plantsArray) {
//         const plantAmount = plant.output

//         if (Array.isArray(plant)){
//             for (const corn of plant){
//                 let i = 0
//                 const cornAmount = corn.output
//                 while (i < (cornAmount / 2)){
//                     plantsArray.push(corn)
//                     i++
//                 }
//             }
            
//         }
//         let i = 0
//         while (i < plantAmount){
//             plantsArray.push(plant)
//             i++
//         }
//     }
    
//     return plantsArray
// }