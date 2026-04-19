function main(dtoIn) {
  // male names
  const maleNames = [
    "Jan", "Matěj", "Josef", "Tomáš", "Martin",
    "Lukáš", "David", "Jakub", "Michal", "Ondřej",
    "Jiří", "Pavel", "Marek", "Filip", "Adam",
    "Daniel", "Roman", "Radek", "Patrik", "Vojtěch",
    "Karel", "Jaroslav", "Petr", "Dominik", "Aleš"
  ];

  // female names
  const femaleNames = [
    "Jana", "Sára", "Marie", "Eva", "Lucie",
    "Tereza", "Anna", "Kateřina", "Veronika", "Martina",
    "Monika", "Barbora", "Nikola", "Klára", "Kristýna",
    "Lenka", "Alena", "Simona", "Denisa", "Adéla",
    "Eliška", "Zuzana", "Michaela", "Karolína", "Ivana"
  ];

  // sedond name
  const surnames = [
    "Novák", "Svoboda", "Novotný", "Dvořák", "Černý",
    "Procházka", "Kučera", "Veselý", "Horák", "Němec",
    "Marek", "Pospíšil", "Pokorný", "Hájek", "Král",
    "Jelínek", "Růžička", "Beneš", "Fiala", "Sedláček",
    "Doležal", "Zeman", "Kolář", "Navrátil", "Urban",
    "Kratochvíl", "Bartoš", "Vaněk", "Krejčí", "Konečný",
    "Malý", "Tichý", "Kadlec", "Šimek", "Polák",
    "Musil", "Blažek", "Staněk", "Soukup", "Šťastný",
    "Beran", "Kopecký", "Vlček", "Mach", "Kříž",
    "Švec", "Křížek", "Bureš", "Dušek", "Holub"
  ];

  // hours
  const workloads = [10, 20, 30, 40];


  const count = dtoIn.count;     
  const minAge = dtoIn.minAge;   
  const maxAge = dtoIn.maxAge;   

  
  const employeeList = [];

  
  for (let i = 0; i < count; i++) {
    
    const gender = getRandomItem(["male", "female"]);

    let name;

   
    if (gender === "male") {
      name = getRandomItem(maleNames);
    }
    
    else {
      name = getRandomItem(femaleNames);
    }

   
    const surname = getRandomItem(surnames);
    const workload = getRandomItem(workloads);
    const birthdate = generateBirthdate(minAge, maxAge);

    
    const employee = {
      name: name,
      surname: surname,
      gender: gender,
      birthdate: birthdate,
      workload: workload
    };

    
    employeeList.push(employee);
  }

  
  const dtoOut = {
    employeeList: employeeList
  };

  return dtoOut;
}


function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


function generateBirthdate(minAge, maxAge) {
  const today = new Date();

  

  const age =
    Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
  const year = today.getFullYear() - age;
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1;
  const birthdate = new Date(year, month, day);

  
  return birthdate.toISOString();
}




const dtoIn = {
  count: 50,
  minAge: 19,
  maxAge: 35
};

console.log(JSON.stringify(main(dtoIn), null, 2));