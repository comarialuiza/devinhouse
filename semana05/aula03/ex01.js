class Plant {
    constructor(name, hydration) {
        this.name = name;
        this.hydration = hydration;
        this.alive = hydration > 100 ? false : true;
    }

    waterPlant(waterAmount) {
        if (this.hydration > 100 || (this.hydration + waterAmount) > 100) {
            this.alive = false;
        }

        this.hydration += waterAmount;
    }

    checkHydration() {
        return 'The plant ' + this.name + ' has hydration of ' + this.hydration
    }
}

const succulent = new Plant('Succulent', 120);
const hydrangea = new Plant('Hydrangea', 30);
hydrangea.waterPlant(10);
console.log(hydrangea.checkHydration());
console.log(hydrangea.alive);