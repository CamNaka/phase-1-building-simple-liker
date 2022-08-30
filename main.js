// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
//Add the `.hidden` class to the error modal in the HTML so it does not appear when the page first loads

errorModal.classList.add("hidden")
console.log(errorModal)

//When a user clicks on an empty heart:
  //* Invoke `mimicServerCall` to simulate making a server request

//call function directly below
//findLikes()
clickListener()
});

function hideError(){
  errorModal.classList.add("hidden")
}

//first way
//adds eventListener to specific element
function findLikes() {
  const likeArr = document.querySelectorAll(".like-glyph")

  likeArr.forEach((singleLike) => {
    singleLike.addEventListener("click", () =>
     console.log("you found me")
     );
  });
}

//second way (event delegation)
//adds eventListener to entire page
function clickListener() {
  document.addEventListener("click", (event) => {
    //if i click on the hrear then cosole.log("you found me! like!") otherwise do nothing
    if(event.target.classList[0] === 'like-glyph') {
      //promise/async (we need a .then)
      mimicServerCall()
      .then((response) => {
        const activated = event.target.classList.contains("activated-heart");
        if(activated) {
          event.target.classList.remove("activated-heart")
          event.target.innerHTML = EMPTY_HEART
        }else{
          event.target.classList.add("activated-heart")
          event.target.innerHTML = FULL_HEART
        }
      })

      .catch(error => {
        console.log(error);
        errorModal.remove("hidden")
        setTimeout(() => {
          hideError()
        },3000)
        })
      }
  })
}







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
