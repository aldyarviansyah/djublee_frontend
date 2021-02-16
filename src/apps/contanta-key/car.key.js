function createCar(count) {
  const car = []

  for (let index = 0; index < count; index++) {
    const year = 1980 + index + 5
    car.push({
      key: index,
      merk: `Toyota - ${index + 1}`,
      groupModel: `Avansa - ${index + 1}`,
      model: `GL44${index + 1}`,
      year: `${year}`,
      name: `Toyota - ${index + 1} Avansa - ${index + 1} GL44${index + 1}`,
    })
  }

  return car
}

const carKey = createCar(20)

export default carKey
