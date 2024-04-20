const events = [
    {
      id: 1,
      name: "Ado Wish",
      category: "Concert",
      image: "assets/images/event/Ado.jpeg",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event1.html"
    },
    {
      id: 2,
      name: "Coldplay",
      category: "Concert",
      image: "assets/images/event/Cold.jpg",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event2.html"
    },
    {
      id: 3,
      name: "Comiket",
      category: "Convention",
      image: "assets/images/event/Comiket.png",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event3.html"
    },
    {
      id: 4,
      name: "KL Marathon",
      category: "Sport",
      image: "assets/images/event/Run.jpg",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event4.html"
    },
    {
      id: 5,
      name: "E3 2023",
      category: "Convention",
      image: "assets/images/event/E3.jpeg",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event5.html"
    },
    {
      id: 6,
      name: "Football",
      category: "Sport",
      image: "assets/images/event/Balls.jpg",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event6.html"
    },
    {
      id: 7,
      name: "CAFKL",
      category: "Convention",
      image: "assets/images/event/Cafkl.jpeg",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event7.html"
    },
    {
      id: 8,
      name: "Genshin Melody",
      category: "Orchestra",
      image: "assets/images/event/Genshin.jpg",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event8.html"
    }
];


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
            <li><i class="fa fa-download"></i> ${events[i].downloads}</li>
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
                  