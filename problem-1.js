// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const persons = [
  {
    name: "kawsar",
    age: 20,
    gender: "male",
  },
  {
    name: "norjahan",
    age: 60,
    gender: "female",
  },
  {
    name: "anwar",
    age: 60,
    gender: "male",
  },
  {
    name: "jobayear",
    age: 24,
    gender: "male",
  },
  {
    name: "borno",
    age: 14,
    gender: "female",
  },
];

const FilterOutFemale = (person) => {
  const filter = person.filter((person) => person.gender !== "female");
  const maleName = filter.map((name) => name.name);
  return maleName;
};


const allMaleName = FilterOutFemale(persons)
console.log(allMaleName)