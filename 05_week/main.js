console.log("js loaded");

const text = document.querySelector(".text-comment");
const commentBox = document.getElementById("comment-box");
const addBtn = document.getElementById("addBtn");

let i = 0;

addBtn.addEventListener('click', function () {
    debugger
    if (text.value === "") {
        alert("Please add comment")
        return
    }

    const createDivforComment = document.createElement("div");
    const createDivforImgandEmail = document.createElement("div");
    const createDivforTextComment = document.createElement("div");
    const createimgProfile = document.createElement('img');
    const createEmail = document.createElement('h2');
    const createParagraph = document.createElement('p');
    const createDeleteBtn = document.createElement("button");

    commentBox.classList.add("container");

    createDivforComment.setAttribute('id', "item" + i);
    commentBox.appendChild(createDivforComment);

    createDivforImgandEmail.classList.add("imgAndEmail");
    createDivforComment.appendChild(createDivforImgandEmail);


    createimgProfile.setAttribute("src", "https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg");
    createimgProfile.setAttribute("height", "60px");
    createimgProfile.setAttribute("width", "60px");
    createDivforImgandEmail.appendChild(createimgProfile);

    createEmail.innerHTML = "emailUser@stuff.com";
    createDivforImgandEmail.appendChild(createEmail);


    commentBox.appendChild(createDivforTextComment);
    createParagraph.textContent = text.value;
    createDivforTextComment.appendChild(createParagraph);

    createDeleteBtn.innerHTML = "Delete Comment";
    createDeleteBtn.setAttribute('id', i);
    createDeleteBtn.classList.add("add-delete-comment");
    createDivforTextComment.appendChild(createDeleteBtn);

})

++i;








