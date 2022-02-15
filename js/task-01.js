const categoriesIt = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesIt.length}`);
categoriesIt.forEach(function (category) {
    console.log(`Category: `, category.firstElementChild.textContent);
    console.log(`Elements: `, category.lastElementChild.children.length);
});