let templateElement = document.querySelector('#elt_new');
let formElement = document.querySelector('.form_comment');
let blockComments = document.querySelector('.block_comments');

function createElement(uName, uComment){
    let clone = templateElement.content.cloneNode(true);
    let user = clone.querySelector('.nameU');
    let userComment = clone.querySelector('.userC');
    user.textContent = uName;
    userComment.textContent = uComment;

    blockComments.prepend(clone);
};


formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    createElement(e.target.name.value, e.target.message.value);
});