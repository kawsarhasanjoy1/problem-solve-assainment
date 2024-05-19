const cars = [
    { make: "Toyota", model: "Corolla", year: 2015 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Ford", model: "Mustang", year: 2018 },
    { make: "Chevrolet", model: "Malibu", year: 2013 },
    { make: "Tesla", model: "Model 3", year: 2020 }
  ];

  const sortCars =(car) => {
    const sort = car.sort((a,b) => a.year - b.year)
    return sort
  }

  const sortYear =  sortCars(cars)
  console.log(sortYear)