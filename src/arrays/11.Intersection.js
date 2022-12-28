function intersection(arr1, arr2) {
  const arr = [...arr1, ...arr2].sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      console.log(arr[i]);
      i++;
    }
  }
}

intersection([5, 3, 2, 8, 9], [1, 9, 12, 8, 3, 4]);
