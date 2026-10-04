/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const arr = s.split("");
    const arr2 = t.split("");

    if (arr.length !== arr2.length) {
        return false;
    }

    arr.sort();
    arr2.sort();

    return arr.map((e, i) => e === arr2[i])
              .every((e) => e);
};