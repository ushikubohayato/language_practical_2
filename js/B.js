const name = document.getElementById("name");
const description = document.getElementById("description");
const job = document.getElementById("job");
const resultButton = document.getElementById("resultButton");

resultButton.addEventListener("click", () => {

    document.getElementById("nameResult").textContent =
        name.value.trim() || "未入力です";

    document.getElementById("descriptionResult").textContent =
        description.value.trim() || "未入力です";

    const selectedGender = document.querySelector(
        'input[name="gender"]:checked'
    );

    document.getElementById("genderResult").textContent =
        selectedGender ? selectedGender.value : "未選択です";

    const selectedHobbies = document.querySelectorAll(
        'input[name="hobby"]:checked'
    );

    const hobbies = Array.from(selectedHobbies).map(item => item.value);

    document.getElementById("hobbyResult").textContent =
        hobbies.length > 0 ? hobbies.join("、") : "未選択です";

    document.getElementById("jobResult").textContent =
        job.value || "未選択です";

});
