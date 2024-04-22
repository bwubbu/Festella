const events = [
    {
        id: 1,
        name: "Ado First Wish",
        category: "Concert",
        rating: 4.8,
        downloads: "2.3M",
        images: [
            "assets/images/details/Ado_Left.jpg",
            "assets/images/details/Ado_Wish.jpg",
            "assets/images/details/Ado_detail1.jpg",
            "assets/images/details/Ado_detail2.jpg",
            "assets/images/details/Ado_detail3.jpg"
        ],
        videoLink: "https://www.youtube.com/watch?v=AYjbDdsUPRI",
        description: "If you ever wanted to watch Ado, the Japanese superstar musician featured in One Piece Film Red and SPY x FAMILY, your time has come! Crunchyroll is announcing alongside Ado today that her first world tour, 'Wish' Powered by Crunchyroll, will head to the United States and Europe in early 2024. Crunchyroll fans can access the presale tickets here on December 11, 2023, at 7:00 a.m. PT with the code CRUNCHYROLL. General tickets will go on sale on December 15 at 7:00 a.m. PT.",
        ticketLink: "payment.html",
        ticketSold: "300",
        totalTicket: "500"

    },
    {
        id: 2,
        name: "Coldplay",
        category: "Concert",
        rating: 4.5,
        downloads: "1.8M",
        images: [
            "assets/images/details/Coldplay_Left.jpeg",
            "assets/images/details/Coldplay_Color.jpg",
            "assets/images/details/Coldplay_detail1.jpg",
            "assets/images/details/Coldplay_detail2.jpg",
            "assets/images/details/Coldplay_detail3.jpeg"
        ],
        videoLink: "https://www.youtube.com/watch?v=hZDJjSHHGok",
        description: "Coldplay is a British rock band formed in London in 1996. The band's members are vocalist/pianist/guitarist Chris Martin, bassist Guy Berryman, guitarist Jonny Buckland, and drummer Will Champion. Coldplay has been one of the world's best-selling music artists, with over 100 million records sold worldwide.",
        ticketLink: "payment.html"
    }
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
