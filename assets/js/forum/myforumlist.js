document.addEventListener('DOMContentLoaded', function() {
    // Dummy data for forum posts
    var myForumPosts = [
        {
            image: "assets/images/event/Ado.jpeg",
            title: "Can't wait for the Ado concert!",
            description: "Super excited to finally meet her! Who else is going?",
            author: "Rudzaidan",
            date: "12 Dec 2020",
            lastReplyDate: "14 Dec 2020",
            upvotes: 20,
            replies: 7
        },
        {
            image: "assets/images/event/Taylor.jpeg",
            title: "Day 2 of Taylor Swift's Eras Tour!",
            description: "First day was a total blast! Can't wait for today's show!",
            author: "Rudzaidan",
            date: "13 Dec 2020",
            lastReplyDate: "15 Dec 2020",
            upvotes: 25,
            replies: 10
        },
        {
            image: "assets/images/event/Run.jpg",
            title: "How do I claim KL Marathon 2020 medal?",
            description: "I completed the marathon but I'm not sure how to claim the medal. Can someone help?",
            author: "Rudzaidan",
            date: "14 Dec 2020",
            lastReplyDate: "16 Dec 2020",
            upvotes: 30,
            replies: 15
        },
        // Add more posts as needed
    ];

    // Function to populate "My Posts" section
// Function to populate "My Posts" section
function populateMyForumPosts() {
    var forumContainer = document.querySelector('.containerForum');
    // Clear existing posts
    forumContainer.innerHTML = '';
    var myPostsHeader = document.createElement('h4');
    myPostsHeader.textContent = "My Posts";
    myPostsHeader.classList.add('most-popular');
    forumContainer.appendChild(myPostsHeader);

    // Loop through each post
    myForumPosts.forEach(function(post) {
        // Create HTML for each post
        var postHTML = `
        
            <div class="subforum-row">
                <div class="subforum-icon subforum-column center">
                    <img src="${post.image}" alt="Event Image" class="forum-image">
                </div>
                <div class="subforum-description subforum-column-text">
                    <h4><a href="forumdetail.html">${post.title}</a></h4> <!-- Include the <h4> tag here -->
                    <p>${post.description}</p>
                </div>
                <div class="subforum-info subforum-column-text">
                    <small>Last Reply: ${post.lastReplyDate}</small>
                </div>
                <div class="subforum-info subforum-column-text">
                    by <a class="forum" href="">${post.author}</a> 
                    <br><small>${post.date}</small>
                </div>
            </div>
        `;

        // Append the post HTML to the forum container
        forumContainer.innerHTML += postHTML;
    });
}


    // Call the function to populate "My Posts" section
    populateMyForumPosts();
});
