const btn = document.getElementById('btn')

const text = document.getElementById('text')

btn.addEventListener('click', () => {
    const textChange = document.createElement('h2');

    textChange.textContent = 'ボタンをクリックしました';

    text.style.display='none';

    text.parentNode.insertBefore(textChange,text.nextSibling)
});