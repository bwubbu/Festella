const events = [
    {
        id: 1,
        name: "HSR Party",
        category: "Night Out",
        rating: 4.0,
        downloads: "200",
        images: [
            "assets/images/pastEvent/HSR_Square.jpg",
            "assets/images/pastEvent/HSR_detail3.jpg",
            "assets/images/pastEvent/HSR_detail1.jpeg",
            "assets/images/pastEvent/HSR_detail2.png",
            "assets/images/pastEvent/HSR_Left.jpg"
        ],
        videoLink: "https://youtu.be/Cpq5uBSk434?si=dQHiUJNVO89Nr5oD",
        description: "Penacony is located in the Asdana, a star system brimming with memoria, which has historically been one of the Macro Voids that leaked out from the Memory Zone.",
        ticketLink: "payment.html",
        ticketSold: "200",
        totalTicket: "200"

    },
];

function populateEventDetails(eventId) {
    // Find the event with the matching ID
    const event = events.find(event => event.id === eventId);

    // Update the DOM elements with event details
    document.getElementById('image1').src = event.images[0];
    document.getElementById('image2').src = event.images[1];
    document.getElementById('videoLink').href = event.videoLink;
    document.getElementById('eventName').textContent = event.name;
    document.getElementById('eventName2').textContent = event.name;
    document.getElementById('eventCategory').textContent = event.category;
    //document.getElementById('eventRating').textContent = event.rating;
    //document.getElementById('eventDownloads').textContent = event.downloads;
    document.getElementById('eventRating2').textContent = event.rating;
    document.getElementById('eventDownloads2').textContent = event.downloads;
    document.getElementById('image3').src = event.images[2];
    document.getElementById('image4').src = event.images[3];
    document.getElementById('image5').src = event.images[4];
    document.getElementById('eventDescription').textContent = event.description;
    document.getElementById('ticketLink').href = event.ticketLink;

    // Update the progress bar
    const progressBar = document.getElementById('ticketProgress');
    const ticketsSold = event.ticketSold || 0; // Default to 0 if ticketsSold is not provided
    const totalTickets = event.totalTicket || 1000000; // Default to 1M if totalTickets is not provided
    const percentageSold = (ticketsSold / totalTickets) * 100;

    progressBar.style.width = `${percentageSold}%`;
    progressBar.textContent = `${percentageSold.toFixed(2)}%`;
}

// Function to get the value of a query parameter from a URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the eventId from the URL
const eventId = parseInt(getQueryParam('id'));

// Populate the event details using the eventId
populateEventDetails(eventId);

  


