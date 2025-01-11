import { users } from "./users.js";

function listUsersByCountry(users, country) {
  let filteredUsers = users.filter((user) => user.nat === country);
  console.log(filteredUsers);
  return filteredUsers;
}
console.log(listUsersByCountry(users, "NO"));

function listUsersByEmail (users) {
  return users.map((user) => user.email);
}
console.log(listUsersByEmail(users));

function reformatEmails(users) {
  
  return users.map((user) => {
    let lowerCaseDomain = user.nat.toLowerCase();
    
    return (user.email.replace('com', `${lowerCaseDomain}`));
    
  })
}
console.log(reformatEmails(users));