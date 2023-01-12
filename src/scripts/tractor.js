import { createCorn } from "./seeds/corn.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";

export const plantSeeds = (planArray) => {
    for (const row of planArray){
        for (const plant of row) {
            if (plant === 'Asparagus'){
                addPlant(createAsparagus())
                
            } 
            if (plant === 'Potato'){
                addPlant(createPotato())
            } 
            if (plant === 'Soybean'){
                addPlant(createSoybean())
            } 
            if (plant === 'Corn'){
                addPlant(createCorn())
            } 
            if (plant === 'Wheat'){
                addPlant(createWheat())
            } 
            if (plant === 'Sunflower'){
                addPlant(createSunflower())
            }               
        }
    }
}