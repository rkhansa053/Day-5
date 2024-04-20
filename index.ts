// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ['car','motorcycle','bus'];
transportation.forEach(transportation => {
    console.log(`I would like to own a ${transportation}`);
})

// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guests: string[] = ["Ayesha", "Sanam", "Hania"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join dinner with me?`);
})

// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

let unableToAttend = "Hania";
console.log(`${unableToAttend},can't make it to the dinner.`);

// changed guest
let newGuest = "Aizal";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);

});


