const catRef = document.querySelector('#categories');
console.log('Number of categories:',catRef.children.length);
// method 2
// const itemRef = document.querySelectorAll('li.item');
// console.log('Number of categories:', itemRef.length);

const itemRef = document.querySelectorAll('.item');

itemRef.forEach(itemRef => {
    const list = [...itemRef.children];
    console.log('');
    list.forEach(elem => {
        if (elem.tagName === 'H2') {
            console.log('Elements:', elem.textContent);
        }
        if (elem.tagName === 'UL') {
            console.log('Category:', elem.children.length);
        }
        
    })
})

