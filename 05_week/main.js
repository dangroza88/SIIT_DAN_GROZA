console.log("js loaded");

var text = document.querySelector(".text-comment");
var commentBox = document.getElementById("comment-box");
var addBtn = document.getElementById("addBtn");

let i = 0;

addBtn.addEventListener('click', function () {
    // debugger
    if (text.value === "") {
        alert("Please add comment")
        return
    }

    var createDivforComment = document.createElement("div");
    var createDivforImgandEmail = document.createElement("div");
    var createDivforTextComment = document.createElement("div");
    var createimgProfile = document.createElement('img');
    var createEmail = document.createElement('h2');
    var createParagraph = document.createElement('p');
    var createDeleteBtn = document.createElement("button");

    commentBox.classList.add("container");

    createDivforComment.setAttribute('id', "item" + i);
    commentBox.appendChild(createDivforComment);

    createDivforImgandEmail.classList.add("imgAndEmail");
    createDivforComment.appendChild(createDivforImgandEmail);


    createimgProfile.setAttribute("src", "https://easyappicon.com/image/favicon/ms-icon-310x310.png");
    createimgProfile.setAttribute("height", "60px");
    createimgProfile.setAttribute("width", "60px");
    createDivforImgandEmail.appendChild(createimgProfile);

    createEmail.innerHTML = " emailUser@stuff.com";
    createDivforImgandEmail.appendChild(createEmail);


    createDivforComment.appendChild(createDivforTextComment);
    createParagraph.textContent = text.value;
    createDivforTextComment.appendChild(createParagraph);

    createDeleteBtn.innerHTML = "Delete Comment";
    createDeleteBtn.setAttribute('id', "item" + i);
    createDeleteBtn.classList.add("add-delete-comment");
    createDivforTextComment.appendChild(createDeleteBtn);

    text.value = "";

    createDeleteBtn.addEventListener('click', function(){
        debugger;
        var key  = this.getAttribute('id');
        document.getElementById(key).remove();
        
        
        var isEmpty = document.getElementById('comment-box');
        if (isEmpty.innerHTML === "\n    "){
            commentBox.classList.remove("container");
        }
    })
    
    ++i;
})












// addBtn.addEventListener('click', function() {
//     var div = document.createElement('div');
//     div.id = 'container';
//     div.innerHTML = 'Hi there!';
//     div.className = 'border pad';
 
//     document.body.appendChild(div);
// }, false);













