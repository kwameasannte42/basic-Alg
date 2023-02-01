//falsy bouncer

function bouncer(arr) {

    function truthy(value) {
    return value;
    }
 
    var filtered = arr.filter(truthy);
    return filtered;
  }
 
  bouncer([7, "ate", "", false, 9]);

  //monkey chunky

  function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);