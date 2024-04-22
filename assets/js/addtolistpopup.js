// Function to generate HTML for the popup header
function generateListPopupHeader() {
    return `
      <div class="popup-header">
        <h2>Add to Your List</h2>
      </div>
    `;
  }
  
  // Function to generate HTML for each group in the list
  function generateGroupHtml(groupName) {
    return `
      <div class="group-item">
        <span>${groupName}</span>
        <button class="main-button"><a href="#">Add</a></button>
      </div>
    `;
  }
  
  // Function to append the list popup content to the container
  function appendListPopupContent(containerId) {
    var container = document.getElementById(containerId);
    if (container) {
      var popupHeader = generateListPopupHeader();
      container.innerHTML = popupHeader; // Replace existing content with the header
  
      // Dummy data for groups
      var userGroups = ["Group 1", "Group 2", "Group 3"];
  
      userGroups.forEach(function(groupName) {
        var groupHtml = generateGroupHtml(groupName);
        container.innerHTML += groupHtml;
      });
    }
  }
  
// Event listener for the "Add to your list" button
document.getElementById("collabLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default action of the link
    openListPopup();
});

// Function to open the list popup
function openListPopup() {
    var listPopup = document.getElementById("listPopup");
    if (listPopup) {
        listPopup.style.display = "block";
        appendListPopupContent("listPopupContent");
    }
}

// Function to close the list popup when the close button is clicked
document.querySelector("#listPopup .close").addEventListener("click", function() {
    closeListPopup();
});

// Function to close the list popup when the overlay area outside the popup is clicked
window.onclick = function(event) {
    var listPopup = document.getElementById("listPopup");
    if (event.target == listPopup) {
        closeListPopup();
    }
};

// Function to close the list popup
function closeListPopup() {
    var listPopup = document.getElementById("listPopup");
    if (listPopup) {
        listPopup.style.display = "none";
    }
}

  