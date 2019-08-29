var Animals;
(function (Animals) {
    Animals[Animals["cat"] = 1] = "cat";
    Animals[Animals["lion"] = 2] = "lion";
    Animals[Animals["dog"] = 11] = "dog";
    Animals[Animals["cow"] = 12] = "cow";
    Animals[Animals["monkey"] = 13] = "monkey";
})(Animals || (Animals = {}));
var c = Animals.cat;
console.log(Animals[3]); // undefined 
console.log(Animals.monkey); // 13
