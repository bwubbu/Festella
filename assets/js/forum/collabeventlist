const events = [
    {
      id: 2,
      name: "Coldplay",
      category: "Concert",
      image: "assets/images/event/Cold.jpg",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event2.html",
      addedBy: "Rudzaidan"
    },
    {
      id: 3,
      name: "Comiket",
      category: "Convention",
      image: "assets/images/event/Comiket.png",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event3.html",
      addedBy: "Farhan"
    },
    {
      id: 5,
      name: "E3 2023",
      category: "Convention",
      image: "assets/images/event/E3.jpeg",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event5.html"
      ,
      addedBy: "Rudzaidan"
    },
    {
      id: 7,
      name: "CAFKL",
      category: "Convention",
      image: "assets/images/event/Cafkl.jpeg",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event7.html",
      addedBy: "Farhan"
    },
    {
      id: 8,
      name: "Genshin Melody",
      category: "Orchestra",
      image: "assets/images/event/Genshin.jpg",
      rating: 4.8,
      downloads: "2.3M",
      detailsPage: "details_event8.html",
      addedBy: "Farhan"
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
          <h4>${events[i].name}<br><span>
          <p>${events[i].addedBy}</p>
          <br>${events[i].category}</span></h4>
          
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
                  