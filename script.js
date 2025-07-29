document.getElementById('nextBtn').addEventListener('click', function() {
  // Hide the form container and show the dashboard
  document.querySelector('.form-container').style.display = 'none';
  document.getElementById('dashboardContainer').style.display = 'flex';
  showTab('location'); // Default to Location tab
});

// Show the relevant tab content based on the clicked tab
function showTab(tabName) {
  // Hide all tabs first
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(tab => tab.style.display = 'none');
  
  // Show the selected tab
  document.getElementById(tabName).style.display = 'block';
  
  // If the Location tab is clicked, initialize the map
  if (tabName === 'location') {
    initMap();
  }
}

// Google Maps API Integration for Location Tab
function initMap() {
  const mapOptions = {
    center: { lat: 51.5074, lng: -0.1278 },  // Default to London
    zoom: 8,
  };
  
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
