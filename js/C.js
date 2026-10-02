document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("tableBody");
  const addRowButton = document.getElementById("addRowButton");
  const deleteRowButton = document.getElementById("deleteRowButton");

  // 初期表示で3行作成
  addRow();
  addRow();
  addRow();

  addRowButton.addEventListener("click", () => {
    addRow();
  });

  deleteRowButton.addEventListener("click", () => {
    const checkedRows = tableBody.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    if (checkedRows.length === 0) {
      alert("削除する行を選択してください。");
      return;
    }

    checkedRows.forEach(checkbox => {
      checkbox.closest("tr").remove();
    });

    updateRowNumbers();
  });

  function addRow() {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="number-cell"></td>
      <td class="check-cell">
        <input type="checkbox" aria-label="この行を選択">
      </td>
      <td>
        <input
          type="text"
          class="table-input"
          placeholder="入力してください"
        >
      </td>
    `;

    tableBody.appendChild(row);
    updateRowNumbers();
  }

  function updateRowNumbers() {
    const rows = tableBody.querySelectorAll("tr");

    rows.forEach((row, index) => {
      row.querySelector(".number-cell").textContent = index + 1;
    });
  }
});
