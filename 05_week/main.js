console.log("js loaded");

const text = document.querySelector(".text-comment");
const commentBox = document.getElementById("comment-box");
const addBtn = document.querySelector(".add-comment");

let i = 0;

addBtn.addEventListener('click', function() {
    debugger
    if(text.value === ""){
        alert("Please add comment")
        return
    }

    const createDivforComment = document.createElement("div");
    const createDivforImgandEmail = document.createElement("div");
    const createDivforTextComment = document.createElement("div");
    const createimgProfile =  document.createElement('img');
    const crateEmail = document.createElement('h2');
    const cretateParagraph = document.createElement('p');

    // createDivforComment.classList.add("");
    createDivforComment.setAttribute('id', + i);
    commentBox.appendChild(createDivforComment);

    createDivforImgandEmail.classList.add(".imgAndEmail");
    createDivforComment.appendChild(createDivforImgandEmail);


    createimgProfile.setAttribute("src", "https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg");
    createimgProfile.setAttribute("height", "60px");
    createimgProfile.setAttribute("width", "60px");
    createDivforImgandEmail.appendChild(createimgProfile);

    crateEmail.innerHTML = "emailUser@stuff.com";
    createDivforImgandEmail.appendChild(crateEmail);


    commentBox.appendChild(createDivforTextComment);
    cretateParagraph.textContent = text.value;
    createDivforTextComment.appendChild(cretateParagraph);





})

++i 





