document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const job = document.getElementById("job");

  document.getElementById("resultButton").addEventListener("click", () => {
    document.getElementById("nameResult").textContent =
      name.value.trim() || "未入力です";
  });

  document.getElementById("resultButton").addEventListener("click", () => {
    document.getElementById("descriptionResult").textContent =
      description.value.trim() || "未入力です";
  });

  document.getElementById("resultButton").addEventListener("click", () => {
    const selected = document.querySelector('input[name="gender"]:checked');

    document.getElementById("resultButton").textContent =
      selected ? selected.value : "未選択です";
  });

  document.getElementById("resultButton").addEventListener("click", () => {
    const selected = document.querySelectorAll('input[name="hobby"]:checked');

    const hobbies = Array.from(selected).map(item => item.value);

    document.getElementById("resultButton").textContent =
      hobbies.length > 0 ? hobbies.join("、") : "未選択です";
  });

  document.getElementById("resultButton").addEventListener("click", () => {
    document.getElementById("jobResult").textContent =
      job.value || "未選択です";
  });
});
