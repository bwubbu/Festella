document.addEventListener('DOMContentLoaded', function() {
    // Dummy data for forum posts organized by time categories
    var forumPostsByTime = {
        Future: [
            {
                image: "assets/images/event/Ado.jpeg",
                title: "Can't wait for the Ado concert!",
                description: "Description of Future Post 1",
                author: "User 1",
                date: "12 Dec 2020",
                upvotes: 20,
                replies: 7
            },
            // Add more future posts as needed
        ],
        Ongoing: [
            {
                image: "assets/images/event/Taylor.jpeg",
                title: "Day 2 of Taylor Swift's Eras Tour!",
                description: "Description of Ongoing Post 1",
                author: "User 2",
                date: "13 Dec 2020",
                upvotes: 25,
                replies: 10
            },
            // Add more ongoing posts as needed
        ],
        Past: [
            {
                image: "assets/images/event/Run.jpg",
                title: "How do I claim KL Marathon 2020 medal?",
                description: "Description of Past Post 1",
                author: "User 3",
                date: "14 Dec 2020",
                upvotes: 30,
                replies: 15
            },
            // Add more past posts as needed
        ]
    };

    // Function to populate forum posts under different time categories
    function populateForumPostsByTime() {
        var forumContainer = document.querySelector('.containerForum');
        // Clear existing posts
        forumContainer.innerHTML = '';

        // Loop through each time category
        for (var time in forumPostsByTime) {
            if (forumPostsByTime.hasOwnProperty(time)) {
                // Create a div for the time category
                var timeCategoryDiv = document.createElement('div');
                timeCategoryDiv.classList.add('subforum');

                // Create HTML for the time category heading
                timeCategoryDiv.innerHTML = `
                    <div class="most-popular">
                        <div class="heading-section">
                            <h4><em>${time}</em> events</h4>
                        </div>
                        <div class="row" id="${time}EventsHeader">
                        </div>
                    </div>
                `;

                // Loop through each post in the current time category
                forumPostsByTime[time].forEach(function(post) {
                    // Create HTML for each post
                    var postHTML = `
                        <div class="subforum-row">
                            <div class="subforum-icon subforum-column center">
                                <img src="${post.image}" alt="Create Post" class="forum-image">
                            </div>
                            <div class="subforum-description subforum-column-text">
                                <h4><a href="forumdetail.html">${post.title}</a></h4>
                                <p>${post.description}</p>
                            </div>
                            <div class="subforum-stats subforum-column center">
                                <span>${post.upvotes} 🔺<br /> ${post.replies} 💬</span>
                            </div>
                            <div class="subforum-info subforum-column-text">
                                by <a class="forum" href="">${post.author}</a> 
                                <br><small>${post.date}</small>
                            </div>
                        </div>
                    `;

                    // Append the post HTML to the time category div
                    timeCategoryDiv.innerHTML += postHTML;
                });

                // Append the time category div to the forum container
                forumContainer.appendChild(timeCategoryDiv);
            }
        }
    }

    // Call the function to populate forum posts by time categories
    populateForumPostsByTime();
});
