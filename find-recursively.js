'use strict';

module.exports = findRecursive;

/**
 * Depth-first recursively find a property,
 * this function handles arrays and objects
 * @param {object} obj
 * @param {string} key  property name
 * @return {any} 
 */
function findRecursive(obj, key)
{
    let result;
    for (let k in obj)
    {
        if (!obj.hasOwnProperty(k))
            continue;       // skip this property
        else if(k===key){
            return obj[k];
        }
        if (typeof obj[k] == "object" && obj[k] !== null)
            result = findRecursive(obj[k], key);
    }
    return result;
};