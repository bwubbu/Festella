const events = [
    {
      id: 1,
      name: "Ado Wish",
      category: "Concert",
      image: "assets/images/event/Ado.jpeg",
      rating: 4.8,
      downloads: "1000",
      detailsPage: "details_event1.html"
    },
    {
        id: 2,
        name: "CAFKL",
        category: "Convention",
        image: "assets/images/event/Cafkl.jpeg",
        rating: 3.5,
        downloads: "10, 000",
        detailsPage: "details_event7.html"
      },
    {
      id: 3,
      name: "Comiket",
      category: "Convention",
      image: "assets/images/event/Comiket.png",
      rating: 4.8,
      downloads: "100, 000",
      detailsPage: "details_event3.html"
    },
    {
        id: 4,
        name: "E3 2023",
        category: "Convention",
        image: "assets/images/event/E3.jpeg",
        rating: 2.0,
        downloads: "50,000",
        detailsPage: "details_event5.html"
      }
];



function initSearchFunctionality() {
    const searchForm = document.getElementById('search');
    const searchText = document.getElementById('searchText');
    const searchResults = document.getElementById('searchResults');
    let searchTimeout;
  
    searchForm.addEventListener('input', function () {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = searchText.value.trim().toLowerCase();
            const filteredEvents = events.filter(event =>
                event.name.toLowerCase().includes(searchTerm)
            );
  
            if (filteredEvents.length > 0) {
                searchResults.innerHTML = filteredEvents.map(event =>
                    `<div onclick="redirectToEventDetails(${event.id})">${event.name}</div>`
                ).join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.style.display = 'none';
            }
        }, 300); // Delay for 300ms to avoid frequent updates
    });
  
    document.addEventListener('click', function (event) {
        if (!searchText.contains(event.target)) {
            searchResults.style.display = 'none';
        }
    });
  
    function redirectToEventDetails(eventId) {
        window.location.href = `details_event${eventId}.html`;
    }
  }
  
  // Call the function to initialize the search functionality
  initSearchFunctionality();
  
  
  
  function populateEvents() {
      const mostPopularContainer = document.getElementById('eventContainer');
  
      // Loop through events array
      for (let i = 0; i < events.length; i++) {
        // Create a new row for every 4 events
        if (i % 4 === 0) {
          var row = document.createElement('div');
          row.className = 'row';
          mostPopularContainer.appendChild(row);
        }
  
        // Create column for event
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-sm-6';
        col.innerHTML = `
          <div class="item" onclick="redirectToEventDetails(${events[i].id})">
            <img src="${events[i].image}" alt="">
            <h4>${events[i].name}<br><span>${events[i].category}</span></h4>
            <ul>
              <li><i class="fa fa-star"></i> ${events[i].rating}</li>
              <li><i class="fa fa-ticket"></i> ${events[i].downloads}</li>
            </ul>
          </div>
        `;
  
        // Append column to row
        row.appendChild(col);
      }
    }
  
    function redirectToEventDetails(eventId) {
      window.location.href = `event_details.html?id=${eventId}`;
  }
  
  
  populateEvents();
                    