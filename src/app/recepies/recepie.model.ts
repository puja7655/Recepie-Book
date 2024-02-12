import { Ingredients } from "../shared/ingredients.model";

export class recepie {
    public name: string;
    public description: string;
    public imgPath: string
    public ingredient: Ingredients[]

    constructor(name: string, description: string, imgPath: string, ingredient: Ingredients[]) {
        this.name = name;
        this.description = description;
        this.imgPath = imgPath;
        this.ingredient = ingredient
    }
}
