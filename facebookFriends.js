// Directions:
// Create an object called facebookProfile. The object should have 3 properties:

// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:

// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1

let facebookProfile = {
  name : 'Carlos',
  friends : 4,
  messages : ['hello', 'bye', 'nice to see you'],
  
  postMessage: function (message){
      return facebookProfile.messages.push(message);
  },
  deleteMessage: function (index){
      return facebookProfile.messages.splice(index, 1);
      
  },
  addFriend: function(){
      return facebookProfile.friends++;
  
  },
  removeFriend: function(){
      return facebookProfile.friends--;
  }
  
};


facebookProfile.postMessage("fun quiz");
console.log(facebookProfile.messages);

facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);