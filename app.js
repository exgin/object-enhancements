/**Same keys & values */
function createInstructor (firstName, lastName){
    return {
        firstName,
        lastName,
    };
};

/**Computed Propety Names */
let favortieNumber = 42;

const instructor = {
    firstName: 'Colt',
    [favortieNumber]: `That is my favorite!`,
};

/**Object Methods */
const instructor = {
    firstName: 'Colt',
    sayHi () {
        return 'Hi!';
    },
    sayBye () {
        return `${this.firstName} says bye!`;
    }
}

/**createAnimal function */
function createAnimal (species, verb, noise) {
    return {
        species,
        [verb] () {
            return noise;
        },
    };
}