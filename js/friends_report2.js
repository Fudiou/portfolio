//Create an event listener for the html button
document.getElementById('searchButton').addEventListener('click', getFriendReport);
// Create Message function for the output div.
function printMessage (friendReportDiv) 
let outputDiv = document.getElementById('output');
outputDiv.innerHTML = friendReportDiv;
// Create a function that loops through the array on friends.js and uses a conditional statement to return the specfic friends object if a name is found.
function findFriend (name) {
    for (let i = 0; i < friends.length; i++)
        if (friends.name === name) {
            return friends.name[i];
        }
}
// Create Friend Report function which populates the data from the 2D array
function createFriendReport (friend) {
    let report = '<h2>Name: ' + friend.name + '</h2>';
    report += '<p>Age: ' + friend.age + '</p>';
    report += '<p>Skill: ' + friend.skill + '</p>';
    report += '<p>Job: ' + friend.job + '</p>';
    report += '<p>Hobby: ' + friend.hobby + '</p>';
}
//Create a function to create a prompt when the searchButton is clicked. A while loop is created to ensure the prompt doesn't disappear until a correct name is entered
function searchBox () {
    //Need a friend variable to store the friends data in from the array
    let friend;
    //Need a variable to store the name entered in the prompt
    let friendName;
    do {
      friendName = prompt ("Enter friend's name here");
      friend = findFriend(friendName);
    } while (!friend || friend === 'quit');
    let friendReport = createFriendReport (friend);
    printMessage(friendReport);
}