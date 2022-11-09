// Write here the code challenge solution
class HashTable {
    constructor() {
      this.storage = {};
    }
  
    set(key, value) {
        if (!this.storage[key]) this.storage[key] = {value: value};
    }
  
}
function firstRepeated (string) {
    if (string === "") return "No Repetition";
    if (!string.includes(' ')) return 'No Repetition';
     let arr = string.split(' ');
     //console.log(arr);
     let hashTable = new HashTable();
     for (let i = 0; i < arr.length; i++) {
         if (hashTable.storage[arr[i]]) {
             return arr[i];
         } else {
             hashTable.set(arr[i], arr[i]);
         }
     }
     return 'No Repetition';
 }  
 module.exports = { HashTable, firstRepeated };