// JavaScript code for dynamically populating group links with images
document.addEventListener("DOMContentLoaded", function() {
    // Dummy data for user's groups
    var userGroups = [
        { name: "apen & the gang", link: "collablist.html", image: "assets/images/icon-community.png" },
        { name: "2gether 4ever", link: "collablist.html", image: "assets/images/icon-community.png" },
        { name: "PEKOM", link: "collablist.html", image: "assets/images/icon-community.png" }
    ];

    // Get the UL element where group links will be populated
    var userGroupsList = document.getElementById("userGroups");

    // Loop through the user's groups and create list items with links and images
    userGroups.forEach(function(group) {
        var listItem = document.createElement("li");
        
        // Create image element
        var img = document.createElement("img");
        img.src = group.image;
        img.alt = group.name; // You can set alt text to the group name
        img.classList.add("icon-image"); // Add the class to the image
        listItem.appendChild(img);
        
        // Create link element
        var link = document.createElement("a");
        link.href = group.link;
        link.textContent = group.name;
        listItem.appendChild(link);
        
        // Append list item to the UL
        userGroupsList.appendChild(listItem);
    });
});