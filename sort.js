// Sorting function (same logic as your original)
function sort(list, sortOrder) {
    var output = [];

    for (var i = 0; i < list.length; i++) {
        for (var j = 0; list[i] > output[j]; j++) {}
        output.splice(j, 0, list[i]);
    }

    if (sortOrder === "descending") {
        for (var k = 0; k < Math.floor(output.length / 2); k++) {
            var leftIndex = k;
            var rightIndex = output.length - 1 - leftIndex;

            var swapTemp = output[rightIndex];
            output[rightIndex] = output[leftIndex];
            output[leftIndex] = swapTemp;
        }
    }

    return output;
}

// Function called when the user clicks the "Sort" button
function runSort() {
    const input = document.getElementById("numbers").value.trim();

    // Convert input string to array of numbers
    let userInput;
    try {
        userInput = input.split(",").map(x => {
            const n = Number(x.trim());
            if (isNaN(n)) throw new Error();
            return n;
        });

        if (userInput.length === 0) throw new Error();
    } catch {
        document.getElementById("result").textContent = 
            "Invalid input. Please enter a comma-separated list of numbers.";
        return;
    }

    const sortOrder = document.getElementById("order").value;
    const sorted = sort(userInput, sortOrder);

    document.getElementById("result").textContent = sorted.join(", ");
}
