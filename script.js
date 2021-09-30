// DATA STRUCTURES EXERCISE

// 1a
const jedi = [];

// 1b
jedi[0] = "Luke";

// 1c
jedi.push("Obi-Wan Kenobi");

// 1d
jedi.unshift("Yoda");

// 1e
console.log(jedi[1]);

// 1f
jedi.pop();

// 1g
jedi.shift();
console.log(jedi);


// 2a
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];

// 2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];

// 2c
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

// 2d
console.log(sithLords.slice(0, 2));


// 3a
const droids = {
    astromech: "R2-D2",
    protocol: "C-3P0",
    assassin: "IG-88"
};

// 3b
console.log(droids[`astromech`]);

// 3c
droids.assassin = "IG-11";
console.log(droids);

// BONUS SECTION:
// 4
console.log("Darth Vader"[6]);

// 5
console.log(sithLords.slice(-2, -1));

// 6a
const starWarsMovies = [
    {
        episodeOne: "The Phantom Menace",
        episodeTwo: "Attack of the Clones",
        episodeThree: "Revenge of the Sith"
    },
    {
        episodeFour: "A New Hope",
        episodeFive: "The Empire Strikes Back",
        episodeSix: "Return of the Jedi"
    },
    {
        episodeSeven: "The Force Awakens",
        episodeEight: "The Last Jedi",
        episodeNine: "The Rise of Skywalker"
    }
]

// 6b
starWarsMovies.splice(1, 0, ["Solo", "Rogue One"]);
console.log(starWarsMovies);
