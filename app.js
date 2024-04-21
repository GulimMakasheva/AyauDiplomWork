function search() {
    const input = document.getElementById('search-item');
    const filter = input.value.toLowerCase();
    const productList = document.getElementsByClassName('product');

    for (let i = 0; i < productList.length; i++) {
        let product = productList[i];
        if (product.textContent.toLowerCase().includes(filter)) {
            product.style.display = ""; // Show the product
        } else {
            product.style.display = "none"; // Hide the product
        }
    }
}

document.getElementById('show-all-categories').addEventListener('click', function() {
    // Показать все скрытые категории
    document.querySelectorAll('.category-buttons button.hidden').forEach(btn => {
        btn.classList.remove('hidden');
    });
    // Скрыть кнопку "Показать все категории" после ее использования
    this.style.display = 'none';
});


function showCategory(category) {
    // Скрыть все пословицы
    document.querySelectorAll('.product').forEach(p => p.style.display = 'none');

    // Показать пословицы выбранной категории
    document.querySelectorAll(`.product[data-category="${category}"]`).forEach(p => p.style.display = 'block');
}

function showAllCategories() {
    // Убрать класс 'hidden' со всех кнопок, чтобы показать все категории
    document.querySelectorAll('.hidden').forEach(btn => btn.classList.remove('hidden'));
    document.getElementById('show-all-categories').style.display = 'none'; // Скрыть кнопку "Барлығы"
}
