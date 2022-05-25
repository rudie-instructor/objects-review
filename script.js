const theObject = {
    name: "The Object",
    age: 25,
    hobbies: ["sportsball", "card game", "batteries"],
    languages: [
        {
            languageName: "Javascript",
            proficiency: 8,
            years: 5
        },
        {
            languageName: "Python",
            proficiency: 5,
            years: 1
        },
        {
            languageName: "C++",
            proficiency: 5,
            years: 3
        }
    ],
    displayLanguages: function() {
        const languageArr = [];
        this.languages.forEach(language => {
            languageArr.push(language.languageName);
        });
        console.log(`${this.name} knows these languages: ${languageArr.join(', ')}`);
    },
    addToHobbies: function() {
        let userInput = prompt("Please enter a hobby to add");
        this.hobbies.push(userInput);
        console.log(`${this.name} has these hobbies: ${this.hobbies.join(', ')}`);
    },
    incrementAge: function() {
        this.age++;
        console.log(`${this.name}'s age has increased to ${this.age}`);
    }
};

// theObject.displayLanguages();

// theObject.addToHobbies();

// theObject.incrementAge();

// const newObject = Object.create(theObject);

// const addMe = {
//     favoriteColor: "blue",
//     age: 35
// }

// const alsoAddMe = {
//     incrementAge: "Function removed."
// }

// console.log(Object.assign(newObject, addMe, alsoAddMe));


// theObject.name = "Mr. The Object";
// theObject.age++;
// console.log(theObject);

function makeMore(name) {
    this.name = name;
    this.tellMeMore = function() {
        let ageInput = prompt("Tell me your age, use a number please!", "42");
        this.age = parseInt(ageInput);
        let hobbiesInput = prompt("Tell me your hobbies! Separate them with a comma and a space, please.", "sportsball, card game, batteries");
        this.hobbies = hobbiesInput.split(", ");
        let didItRight = confirm(`${this.name}'s age is ${this.age} and their hobbies are ${this.hobbies.join(", ")}. Is this information correct?`);
        if (!didItRight) {
            this.tellMeMore();
        }
    }
    this.addToHobbies = function() {
        let userInput = prompt("Please enter a hobby to add");
        this.hobbies.push(userInput);
        console.log(`${this.name} has these hobbies: ${this.hobbies.join(', ')}`);
    }
};


const newNewObject = new makeMore("The New New");

newNewObject.tellMeMore();

newNewObject.addToHobbies();
