import "./styles.css";

document.getElementById("app").innerHTML = `

`;

// Exercise 3 starts
if (document.readyState !== "loading") {
  console.log("Document is ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting");
    initializeCode();
  });
}

function initializeCode() {
  const addCommentButton = document.getElementById("add-text");

  addCommentButton.addEventListener("click", function () {
    const commentsList = document.getElementById("comments-list");
    console.log("working!");

    let newParagraph = document.createElement("li");
    newParagraph.innerHTML = newParagraph.innerHTML + "new list item";

    commentsList.appendChild(newParagraph);
  });
}
// Exercise 3 ends

// Exercise 4 starts
/*if (document.readyState !== "loading") {
  console.log("Document is ready");
  addToComments();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting");
    addToComments();
  });
}

function addToComments() {
  const addTextButton = document.getElementById("add-text");

  addTextButton.addEventListener("click", function () {
    const commentsList2 = document.getElementById("comments");
    console.log("working!");

    var newParagraph2 = document.createElement("li");
    newParagraph2.innerHTML = document.getElementById("big-text").value;
    let rmvbtn = document.createElement("button");
    rmvbtn.innerHTML = "Remove comment";
    newParagraph2.appendChild(rmvbtn);
    commentsList2.appendChild(newParagraph2);
    var systemON = false;
    if (systemON) {
      document.getElementsByClassName("remove-comment").style.visibility =
        "none";
    } else {
      document.getElementsByClassName("remove-comment").style = "block";
    }
  });
}*/
// Exercise 4 ends

// Week 2 Exercise 4 starts

if (document.readyState !== "loading") {
  console.log("Document is ready");
  addRating();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting");
    addRating();
  });
}

function addRating() {
  const addRatingButton = document.getElementById("add-comment");

  addRatingButton.addEventListener("click", function () {
    const ratingsList = document.getElementById("ratings-list");
    console.log("working!");

    let newRat = document.createElement("div");
    let rat = document.createElement("p");
    let com = document.createElement("p");
    let rmvbtn = document.createElement("button");
    rmvbtn.className = "remove-comment";
    rmvbtn.visibility = "hidden";
    rmvbtn.innerHTML = "Delete this comment";
    newRat.className = "comment";
    rat.className = "comment-rating";
    com.className = "comment-text";
    rat.innerHTML = document.getElementById("rating-menu").options[
      document.getElementById("rating-menu").selectedIndex
    ].text;
    com.innerHTML = document.getElementById("big-text").value;
    newRat.appendChild(rat);
    newRat.appendChild(com);
    newRat.appendChild(rmvbtn);
    ratingsList.appendChild(newRat);

    //const removeButton = document.getElementById("remove-comment");
    rmvbtn.onclick = function () {
      newRat.remove();
    };
    /*
    rmvbtn.addEventListener("click", function () {
      var response = confirm(
        "Are you sure that you want to delete this list item?"
      );
      if (response === true) {
        var item = document.getElementsByClassName("comment");
        item.remove();
        //item.parentNode.removeChild(item);
      } else {
        document.getElementById("output").innerHTML = "You canceled.";
      }
    });*/

    /*var newParagraph3 = new Rating();
    console.log(newParagraph3.newRat);
    ratingsList.append(newParagraph3.newRat);*/
    //newParagraph3.rating = document.getElementById("rating-menu").value;
    //ewParagraph3.comment = document.getElementById("big-text").value;
    //var newRating = document.createElement("p");
    //newRating.append(newParagraph3.rating);
    //ratingsList.append(newParagraph3.rating);
    //ratingsList.append(newParagraph3.comment);
    /*var newParagraph3 = document.createElement("div");
    newParagraph3.innerHTML = document.getElementById("rating-menu").value;
    ratingsList.appendChild(newParagraph3);
    var newParagraph3 = document.createElement("p");
    newParagraph3.innerHTML = document.getElementById("big-text").value;
    ratingsList.appendChild(newParagraph3);*/
  });
}
// Week 2 Exercise 4 ends

if (document.readyState !== "loading") {
  console.log("Document is ready");
  removeComments();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting");
    removeComments();
  });
}

function removeComments() {
  // Week 2 exercise 5 starts
  const removeCommentsButton = document.getElementById("remove-comments");
  removeCommentsButton.addEventListener("click", function () {
    var changeBtn = document.getElementsByClassName("remove-comment");
    for (var x = 0; x < changeBtn.length; x++) {
      changeBtn[x].style.visibility = "visible";
    }
    /*var editON = true;
    if (editON === true) {
      if (changeBtn) {
        for (var x = 0; x < changeBtn.length; x++) {
          changeBtn[x].style.visibility = "block";
        }
      }
    } else {
      if (changeBtn) {
        for (var x = 0; x < changeBtn.length; x++) {
          changeBtn[x].style.visibility = "none";
        }
      }
    }*/
  });

  // Week 2 exercise 5 ends

  /*const removeCommentsButton = document.getElementById("remove-comments");
  removeCommentsButton.addEventListener("click", function () {
    const removeButton = document.getElementById("remove-comment");

    removeButton.addEventListener("click", function () {
      var response = confirm(
        "Are you sure that you want to delete all list items?"
      );
      if (response === true) {
        document.getElementById("comments-list").innerHTML = "";
        document.getElementById("comments").innerHTML = "";
      } else {
        document.getElementById("output").innerHTML = "You canceled.";
      }
    });
  });*/
}
