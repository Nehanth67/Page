/*SWE642 Nehanth Chowdary Pavuluri G01413928*/
    // Function to calculate the average
    function calculateAverage(numbers) {
      var sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
      }
      return sum / numbers.length;
    }

    // Function to calculate the maximum
    function calculateMaximum(numbers) {
      var max = parseInt(numbers[0]);
      for (var i = 1; i < numbers.length; i++) {
        var num = parseInt(numbers[i]);
        if (num > max) {
          max = num;
        }
      }
      return max;
    }

    // Function to handle data input change
    function handleDataInputChange() {
      var dataInput = document.getElementById("dataInput");
      var data = dataInput.value;
      var numbers = data.split(",").map(function (item) {
        return item.trim();
      });

      if (numbers.length !== 10) {
        document.getElementById("averageOutput").textContent = "";
        document.getElementById("maximumOutput").textContent = "";
        return;
      }

      var isValid = numbers.every(function (number) {
        return number >= 1 && number <= 100;
      });

      if (isValid) {
        var average = calculateAverage(numbers);
        var maximum = calculateMaximum(numbers);

        document.getElementById("averageOutput").textContent = "Average: " + average.toFixed(2);
        document.getElementById("maximumOutput").textContent = "Maximum: " + maximum;
      } else {
        document.getElementById("averageOutput").textContent = "";
        document.getElementById("maximumOutput").textContent = "";
        alert("Please enter ten comma-separated numbers between 1 and 100.");
      }
    }

