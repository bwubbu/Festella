const events = [
    {
      id: 1,
      name: "Ado Wish",
      category: "Concert",
      image: "assets/images/event/Ado.jpeg",
      rating: 250,
      downloads: "1000",
      detailsPage: "details_event1.html"
    },
    {
      id: 2,
      name: "Coldplay",
      category: "Concert",
      image: "assets/images/event/Cold.jpg",
      rating: 141,
      downloads: "10, 000",
      detailsPage: "details_event2.html"
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
      name: "KL Marathon",
      category: "Sport",
      image: "assets/images/event/Run.jpg",
      rating: 78,
      downloads: "3000",
      detailsPage: "details_event4.html"
    },
    {
      id: 5,
      name: "E3 2023",
      category: "Convention",
      image: "assets/images/event/E3.jpeg",
      rating: 632,
      downloads: "50,000",
      detailsPage: "details_event5.html"
    },
    {
      id: 6,
      name: "Football",
      category: "Sport",
      image: "assets/images/event/Balls.jpg",
      rating: 1223,
      downloads: "0.5M",
      detailsPage: "details_event6.html"
    },
    {
      id: 7,
      name: "CAFKL",
      category: "Convention",
      image: "assets/images/event/Cafkl.jpeg",
      rating: 91,
      downloads: "10, 000",
      detailsPage: "details_event7.html"
    },
    {
      id: 8,
      name: "Genshin Melody",
      category: "Orchestra",
      image: "assets/images/event/Genshin.jpg",
      rating: 420,
      downloads: "500",
      detailsPage: "details_event8.html"
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
            <li><i class="fa fa-eye"></i> ${events[i].rating}</li>
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




function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function randomAssign() {
  const shuffledEvents = shuffleArray([...events]); // Clone and shuffle the events array
  const mostPopularContainer = document.getElementById('eventContainer');
  mostPopularContainer.innerHTML = ''; // Clear the container before populating

  let row = document.createElement('div');
  row.className = 'row';
  mostPopularContainer.appendChild(row);

  // Loop through shuffled events array
  shuffledEvents.forEach((event, i) => {
    // Create a new column for every event
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-sm-6';
    col.innerHTML = `
      <div class="item" onclick="redirectToEventDetails(${event.id})">
        <img src="${event.image}" alt="${event.name}">
        <h4>${event.name}<br><span>${event.category}</span></h4>
        <ul>
          <li><i class="fa fa-eye"></i> ${event.rating}</li>
          <li><i class="fa fa-download"></i> ${event.downloads}</li>
        </ul>
      </div>
    `;

    // Append column to row
    row.appendChild(col);

    // Check if the row is filled with 4 events, create a new row
    if ((i + 1) % 4 === 0 && i + 1 < shuffledEvents.length) {
      row = document.createElement('div');
      row.className = 'row';
      mostPopularContainer.appendChild(row);
    }
  });
}




function initPageEvents() {
  // This could also be a hidden input or a meta tag if you prefer
  const isRandomPage = document.body.classList.contains('random-events-page');

  if (isRandomPage) {
    randomAssign();
  } else {
    populateEvents();
  }
}

// Call this function on DOMContentLoaded event or at the end of the body tag in HTML
initPageEvents();

                  