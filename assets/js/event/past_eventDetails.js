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

  
// Function to fetch ticket details based on event ID
function fetchTicketDetails(eventId) {
    // Assuming you have an API endpoint to fetch ticket details based on event ID
    // You can replace this with your actual API call
    // For demonstration purposes, I'll use a simple array lookup
    const event = events.find(event => event.id === eventId);
    if (event) {
        return {
            ticketsSold: event.ticketSold || 0,
            totalTickets: event.totalTicket || 1000000
        };
    } else {
        // If event with given ID is not found, return default values
        return {
            ticketsSold: 0,
            totalTickets: 1000000
        };
    }
}

// Function to update ticket availability status
function updateTicketAvailability(eventId) {
    // Fetch ticket details based on the event ID
    const { ticketsSold, totalTickets } = fetchTicketDetails(eventId);

    // Determine if tickets are sold out or canceled
    const ticketsAvailable = ticketsSold < totalTickets;

    // Get the ticket button element
    const ticketButton = document.getElementById('ticketLink');

    // If tickets are sold out or canceled, update button text and make it not clickable
    if (!ticketsAvailable) {
        ticketButton.classList.add('border-no-active'); // Add the border-no-active class
        ticketButton.textContent = 'Ticket Sold Out!';
        ticketButton.style.pointerEvents = 'none'; // Make the button not clickable
    }
}


// Update ticket availability based on the event ID
updateTicketAvailability(eventId);