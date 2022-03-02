// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘


function isAdmin(user){
    if (user.userRole === 'ADMIN'){
        return true;
    }
    return false;
}

function getPlaylistLength(name){
    let playlist = name.songs.length;


return playlist
}
function getEmail(user){
let email = user.firstName.toLowerCase() + "." + user.
lastName.toLowerCase() + "@codeimmersives.com";
return email;
}
function createPhonebook(names, numbers){
let phonebook = {

};

for (let i = 0; i < names.length; i++){
    phonebook[names[i]] = numbers[i];
}
return phonebook;
}
function getHardestHomework(homeworks){
    if (homeworks.length === 0){
        return "";
    }

let lowerScore = homeworks[0].averageScore
let lowestName = homeworks[0].name

for(let i = 0; i < homeworks.length; i++){
    if(homeworks[i].averageScore < lowerScore){
        lowestScore = homeworks[i].averageScore;
        lowestName = homeworks[i].name;
    }
 }
  return lowestName;
}


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};