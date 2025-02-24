document.getElementById('btn-post-test').addEventListener('click', function(){
    const textArea = document.getElementById('btn-textArea');
    const postText = textArea.value;
    const commentDisply = document.getElementById('container');
    const commenteliment =document.createElement('p');
    commenteliment.classList.add('containt');
    commenteliment.innerText = postText;
    commentDisply.appendChild(commenteliment);
    textArea.value ='';
})