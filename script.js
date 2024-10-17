const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');
const addItemBtn = document.getElementById('addItemBtn');

addItemBtn.addEventListener('click', () => {
    const itemText = itemInput.value;
    if (itemText === "") return;

    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `
        <span>${itemText}</span>
        <div>
            <button class="btn btn-success btn-sm purchaseBtn">Köp</button>
            <button class="btn btn-danger btn-sm removeBtn">Ta bort</button>
        </div>
    `;

    itemList.appendChild(itemDiv);
    itemInput.value = '';

    // Hantera köp och ta bort
    const purchaseBtn = itemDiv.querySelector('.purchaseBtn');
    const removeBtn = itemDiv.querySelector('.removeBtn');

    purchaseBtn.addEventListener('click', () => {
        itemDiv.classList.toggle('purchased');
    });

    removeBtn.addEventListener('click', () => {
        itemList.removeChild(itemDiv);
    });
});