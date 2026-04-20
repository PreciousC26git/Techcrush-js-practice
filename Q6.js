// createa profile properties and write a function to display a person profile using the properties
const myProfile = {
name : "Precious",
age : 28,
country :"Nigeria",
hobby :"singing",
};

const displayProfile = (person) => {
    console.log('my name is ${person.name}, I am $ {person.age} years old, from ${person.country}, and I love ${person.hobby}.');
    };

    displayProfile(myProfile);