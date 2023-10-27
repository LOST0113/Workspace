const arr = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995];

console.log(arr);

console.log(arr.length);

console.log(arr[6]);
console.log(arr[7]);

let string = arr.toString();

console.log(string);
console.log(typeof string);

console.log(string.replace(/,/g, "/"));

arr.unshift("IOS");
console.log(arr);

const arrB = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
];

console.log(arrB);

console.log(arrB.length);

console.log(arrB[2][1]);

arrB[1][2] = "Java Script";

delete arrB[2][2];

arrB[2].push("pipoca")

console.log(arrB);