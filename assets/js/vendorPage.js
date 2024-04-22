const vendors = [
    { id: 1, image: "https://d21bklzz9tc7ug.cloudfront.net/shrine/vendors/163/1697774750/15027879202_c7af2f185d_o-medium.jpg", name: "Tasty Touch Catering", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.", address: "Kuala Lumpur", phone: "0123456789", service: "Catering", availability: "Weekends", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15936.16926988104!2d101.6937238!3d3.0833809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcb8bc76e6557%3A0x674d8f222c4ff246!2sTasty%20Touch%20Catering!5e0!3m2!1sen!2smy!4v1713781974323!5m2!1sen!2smy" },
    { id: 2, image: "https://d21bklzz9tc7ug.cloudfront.net/shrine/vendors/157/1696952579/2nd%20page-medium.jpg", name: "VH Photobooth", description: "VH Photobooth provides high quality photo booth services for all types of events. We ensure a memorable experience for you and your guests.", address: "Central Area", phone: "0123456789", service: "Photo Booth", availability: "Weekdays", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4075643.239404355!2d102.0870606!3d3.9956688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb50528af80cf%3A0xe968cbe16475ee27!2sVH%20Photobooth!5e0!3m2!1sen!2smy!4v1713784041476!5m2!1sen!2smy" },
    { id: 3, image: "https://d21bklzz9tc7ug.cloudfront.net/shrine/vendors/untitled_design__1__1673519641/untitled_design__1_.png", name: "The Original Sliders", description: "The Original Sliders offers a variety of delicious sliders for your events. We cater to all dietary preferences.", address: "Kuala Lumpur", phone: "0123456789", service: "Catering", availability: "Anytime", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15934.97751252623!2d101.7419931!3d3.1619246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc53ee5d5149c9%3A0xdd39a2631f3c4b71!2sThe%20Original%20Sliders!5e0!3m2!1sen!2smy!4v1713784149931!5m2!1sen!2smy" },
    { id: 4, image: "https://s3-ap-southeast-1.amazonaws.com/merchant.giftr.my/store_profile%2FEDGE%20PROJECT_logo.jpg", name: "Edge Project", description: "Edge Project specializes in unique and personalized gifts for all occasions. We believe in making every gift special.", address: "Kuala Lumpur", phone: "0123456789", service: "Gift", availability: "Anytime", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.68825018161!2d101.60458736583523!3d3.138502660668178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b2f1c287d!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1713784242823!5m2!1sen!2smy" },
];

function populatePopularVendors() {
    const pVCard = document.getElementById("popularVendors");
    pVCard.innerHTML = "";
    var i = 0;

    vendors.forEach(vendor => {
        const vendorCard = document.createElement("div");
        vendorCard.className = "vendor-card";
        vendorCard.innerHTML = `
            <img src="${vendor.image}" alt="${vendor.name}">
            <div class="vendor-card.content">
                <h2>${vendor.name}</h2>
                <p><strong>Address:</strong> ${vendor.address}</p>
                <a href="vendor-booking.html?id=${vendor.id}" class="btn">Book Now</a>
            </div>
        `;
        if (i < 3) {
            pVCard.appendChild(vendorCard);
            i++;
        }
    });
}

function populateAvailableVendors() {
    const aVCard = document.getElementById("availableVendors");
    aVCard.innerHTML = "";

    vendors.forEach(vendor => {
        const vendorCard = document.createElement("div");
        vendorCard.className = "vendor-card";
        vendorCard.innerHTML = `
            <img src="${vendor.image}" alt="${vendor.name}">
            <div class="vendor-card.content">
                <h2>${vendor.name}</h2>
                <p><strong>Address:</strong> ${vendor.address}</p>
                <a href="vendor-booking.html?id=${vendor.id}" class="btn">Book Now</a>
            </div>
        `;
        aVCard.appendChild(vendorCard);
    });
}

function searchVendors() {
    const searchInput = document.getElementById("vendorSearch").value;
    const aVCard = document.getElementById("availableVendors");
    aVCard.innerHTML = "";

    const filteredVendors = vendors.filter(vendor =>
        vendor.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        vendor.service.toLowerCase().includes(searchInput.toLowerCase())
    );

    filteredVendors.forEach(vendor => {
        const vendorCard = document.createElement("div");
        vendorCard.className = "vendor-card";
        vendorCard.innerHTML = `
            <img src="${vendor.image}" alt="${vendor.name}">
            <div class="vendor-card content">
                <h2>${vendor.name}</h2>
                <p><strong>Address:</strong> ${vendor.address}</p>
                <a href="vendor-booking.html?id=${vendor.id}" class="btn">Book Now</a>
            </div>
        `;
        aVCard.appendChild(vendorCard);
    });
}

function goBack() {
    window.history.back();
}

function populateVendorDetails(vendorId) {
    const vendor = vendors.find(vendor => vendor.id == vendorId);

    if (vendor) {
        const vDetailsContainer = document.getElementById("vendorDetails");
        vDetailsContainer.className = "vendor-details";
        vDetailsContainer.innerHTML = `
            <img src="${vendor.image}" alt="${vendor.name}">
            <div class="vendorDetails content">
                <h2>${vendor.name}</h2>
                <p>${vendor.description}</p>
                <div class="details-grid">
                    <p><strong>Address:</strong> ${vendor.address}</p>
                    <p><strong>Phone:</strong> ${vendor.phone}</p>
                    <p><strong>Service:</strong> ${vendor.service}</p>
                    <p><strong>Availability:</strong> ${vendor.availability}</p>
                </div>
            </div>
        `;

        const mapContainer = document.getElementById("vendorMap");
        mapContainer.innerHTML = `
            <iframe src="${vendor.map}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        `;
    } else {
        document.getElementById("vendor-details").innerHTML = "<p>Vendor not found</p>";
    }
}

function handleBookingForm(event) {
    event.preventDefault();
    
    const form = document.getElementById("booking-form");
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const date = formData.get("date");
    const time = formData.get("time");
    const notes = formData.get("notes");

    console.log("Booking data:", {
        name,
        email,
        date,
        time,
        notes
    });

    alert("Your booking has been submitted successfully!")
    form.reset();
}