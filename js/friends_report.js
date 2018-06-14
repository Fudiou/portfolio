// Create Message function
const printFriendInfo = friendReport => {
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = friendReport;
}


// Create a function that finds a name from the 2D array on friends.js using a for loop
let findFriend = name => {
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].name === name) {
            return friends[i];
        }
    }
}

// Create Friend Report function which populates the data from the 2D array
let getFriendReport = friend => {
    let report = '<h2>Name: ' + friend.name + '</h2>';
    report+= '<p>Age: ' + friend.age + '</p>';
    report+= '<p>Skill: ' + friend.skill + '</p>';
    report+= '<p>Job: ' + friend.job + '</p>';
    report+= '<p>Hobby: ' + friend.hobby + '</p>';
    return report;
}

//Create a function to create a prompt when the searchButton is clicked. A while loop is created to ensure the prompt doesn't disappear until a correct name is entered
let printFriendsReport = () => {
    let friend;
    let friendName;
    do {
        friendName = prompt('Enter a name yo');
        if (friendName === null) {
            break;
        }
        friend = findFriend(friendName);
    } while (!friend)
    let friendReport = getFriendReport(friend);
    printFriendInfo(friendReport);
}

//Create an event listener for the html button
document.getElementById('searchButton').addEventListener("click", printFriendsReport);



