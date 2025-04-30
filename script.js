document.getElementById("searchButton").addEventListener("click", function() {
    let searchQuery = document.getElementById("carSearch").value;
    let carType = document.getElementById("carType").value;
    let price = document.getElementById("priceRange").value;
    let location = document.getElementById("location").value;
  
    // Implement search and filter functionality
    console.log(`Search: ${searchQuery}, Type: ${carType}, Price: ${price}, Location: ${location}`);
    alert("Search results are being processed.");
  });
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDt4XV2iqF1CCOINJbKipJaHFdG6BREbJA",
//   authDomain: "carrentx-6a2e7.firebaseapp.com",
//   projectId: "carrentx-6a2e7",
//   storageBucket: "carrentx-6a2e7.firebasestorage.app",
//   messagingSenderId: "593887114714",
//   appId: "1:593887114714:web:85997fe741062cbcbc3ce3"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

// Handle the form submission
document.getElementById('quote-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get values from the form
    const carType = document.getElementById('car-type').value;
    const rentalDays = parseInt(document.getElementById('rental-days').value);
    const insurance = document.getElementById('insurance').checked;
    const gps = document.getElementById('gps').checked;

    // Pricing based on car type (prices in INR)
    let basePrice = 0;
    switch (carType) {
        case 'sedan':
            basePrice = 2000; // ₹2000 per day for Sedan
            break;
        case 'suv':
            basePrice = 3000; // ₹3000 per day for SUV
            break;
        case 'hatchback':
            basePrice = 1500; // ₹1500 per day for Hatchback
            break;
    }

    // Calculate the cost for insurance and GPS
    const insuranceCost = insurance ? 1000 * rentalDays : 0; // ₹1000 per day for insurance
    const gpsCost = gps ? 500 * rentalDays : 0; // ₹500 per day for GPS

    // Total cost
    const totalCost = (basePrice * rentalDays) + insuranceCost + gpsCost;

    // Prepare the quote result message
    const quoteText = `Car Type: ${carType.charAt(0).toUpperCase() + carType.slice(1)}<br>
                       Number of Days: ${rentalDays}<br>
                       Insurance: ₹${insuranceCost}<br>
                       GPS: ₹${gpsCost}<br>
                       <strong>Total: ₹${totalCost}</strong>`;

    // Display the quote
    document.getElementById('quote').innerHTML = quoteText;
    document.getElementById('quote-result').style.display = 'block';
});


// 🔥 Firebase Configuration (replace with your real values)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "1234567890",
    appId: "APP_ID"
  };
  
  // 🔧 Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // ✅ Get Auth and Firestore Services
  const auth = firebase.auth();
  const db = firebase.firestore();
  