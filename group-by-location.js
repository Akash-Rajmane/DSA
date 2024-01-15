const arr = [
  { name: "Sunil", birthPlace: "Mumbai" },
  { name: "Anil", birthPlace: "Pune" },
  { name: "Asha", birthPlace: "Ahmednagar" },
  { name: "Rohan", birthPlace: "Pune" },
  { name: "Rohit", birthPlace: "Mumbai" },
  { name: "Rajesh", birthPlace: "Pune" },
];

function groupByLocation(arr, key) {
  let ans = arr.reduce((result, obj) => {
    const value = obj[key];
    result[value] = (result[value] || []).concat(obj.name);

    return result;
  }, {});

  let count = Object.values(ans).map((el) => el.length);

  Object.values(ans).map((el, id) => el.push(count[id]));
  console.log(ans);
}

groupByLocation(arr, "birthPlace");
