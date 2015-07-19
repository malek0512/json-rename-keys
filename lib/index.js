// Iterate recursively over a json object
var iterate = function(obj, trace, rename) {
    currentObj = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                trace.push({parentObj:currentObj, parentKey: key});
                iterate(obj[key], trace, rename);
            }
            var newNameKey = rename(key) || key;
            if (! currentObj.hasOwnProperty(newNameKey)) {
                currentObj[newNameKey] = obj[key];
            }
        }
    }
    var tracer = trace.pop();
    if (tracer !== undefined) {
        var parentObj = tracer.parentObj;
        var parentKey = tracer.parentKey;
        parentObj[rename(parentKey) || parentKey] = currentObj;
        currentObj = tracer.parentObj;
    } 
    else return currentObj;
}

module.exports = function(jsonObject, renameFunction) {
    return iterate(jsonObject, [], renameFunction);
}