str = "the assignment was to capitalize the first words in the string";
s = str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
console.log(s);