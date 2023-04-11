function compareArrays(arr1, arr2) {
    return arr1.every((element, index, array) => element === arr2[index] && array.length === arr2.length); 
  }

  function getUsersNamesInAgeRange(users, gender) {
    let arrayGender = users.filter((element) => element.gender === gender);
    let sumAge = (arrayGender.reduce((acc, element) => acc + element.age, 0)) / arrayGender.length;
    let result = isNaN(sumAge) === true ? 0 : sumAge;
    return result;
}