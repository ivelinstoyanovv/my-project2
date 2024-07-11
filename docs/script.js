document.getElementById('compareBtn').addEventListener('click', function() {
    // Retrieve selected models
    let model1 = document.getElementById('model1').value;
    let model2 = document.getElementById('model2').value;
    let model3 = document.getElementById('model3').value;

    // Define model data (replace with actual data if available)
    let models = {
        'm3': {
            'Model': 'BMW M3',
            'Engine Type': '3.0L Inline-6',
            'Horsepower': '473 HP',
            'Price': '$70,000',
            'Features': 'High-performance sports sedan'
        },
        'x5': {
            'Model': 'BMW X5',
            'Engine Type': '3.0L Inline-6',
            'Horsepower': '335 HP',
            'Price': '$60,000',
            'Features': 'Versatile and luxurious SUV'
        },
        'z4': {
            'Model': 'BMW Z4',
            'Engine Type': '2.0L Inline-4',
            'Horsepower': '255 HP',
            'Price': '$50,000',
            'Features': 'Stylish and dynamic roadster'
        }
    };

    // Prepare comparison results HTML
    let comparisonHTML = `
        <table class="result-table">
            <tr>
                <th>Model</th>
                <th>Engine Type</th>
                <th>Horsepower</th>
                <th>Price</th>
                <th>Features</th>
            </tr>
            <tr>
                <td>${models[model1]['Model']}</td>
                <td>${models[model1]['Engine Type']}</td>
                <td>${models[model1]['Horsepower']}</td>
                <td>${models[model1]['Price']}</td>
                <td>${models[model1]['Features']}</td>
            </tr>
            <tr>
                <td>${models[model2]['Model']}</td>
                <td>${models[model2]['Engine Type']}</td>
                <td>${models[model2]['Horsepower']}</td>
                <td>${models[model2]['Price']}</td>
                <td>${models[model2]['Features']}</td>
            </tr>
            <tr>
                <td>${models[model3]['Model']}</td>
                <td>${models[model3]['Engine Type']}</td>
                <td>${models[model3]['Horsepower']}</td>
                <td>${models[model3]['Price']}</td>
                <td>${models[model3]['Features']}</td>
            </tr>
        </table>
    `;

    // Display comparison results
    document.getElementById('comparisonResults').innerHTML = comparisonHTML;
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all color options
    const colorOptions = document.querySelectorAll('.color-option');
    
    // Get the car image element
    const carImage = document.getElementById('car-image');
    
    // Add click event listeners to each color option
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Get the data-src attribute value (image URL) of the clicked color option
            const imageUrl = this.getAttribute('data-src');
            // Update the car image source with the new URL
            carImage.src = imageUrl;
        });
    });
});
