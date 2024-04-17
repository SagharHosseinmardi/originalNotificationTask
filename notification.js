fetch(
  "https://api.smartrecruiters.com/v1/companies/PublicisGroupe/postings?custom_field.59510507e4b073b05d32008a=ce66ba16-fee6-4f31-8f11-5004e98c64a4&limit=100&offset=0&country=gb"
)
  .then((response) => response.json())
  .then((data) => {
    const jobs = data.content.slice(0, 3); // Get the first three jobs

    const notificationBox = document.createElement("div");
    notificationBox.id = "notification-box";
    notificationBox.style.position = "fixed";
    notificationBox.style.bottom = "20px"; // Adjusted to be at the bottom
    notificationBox.style.left = "20px"; // Moved to the left
    notificationBox.style.width = "400px";
    notificationBox.style.height = "150px";
    notificationBox.style.backgroundColor = "#ffffff"; // White background
    notificationBox.style.padding = "10px";
    notificationBox.style.border = "1px solid #007bff"; // Blue border
    notificationBox.style.borderRadius = "5px";
    notificationBox.style.display = "flex"; // Use flexbox
    notificationBox.style.flexDirection = "column"; // Arrange children vertically
    notificationBox.style.alignItems = "center"; // Center children horizontally
    notificationBox.style.justifyContent = "center"; // Center children verticall
    document.body.appendChild(notificationBox);

    const titleElement = document.createElement("div");
    titleElement.textContent = "Engineering Openings";
    titleElement.style.fontWeight = "bold";
    titleElement.style.marginBottom = "5px"; // Add margin between title and job titles
    titleElement.style.fontSize = "14px"; 
    notificationBox.appendChild(titleElement);

    const jobListElement = document.createElement("div");
    notificationBox.appendChild(jobListElement);

    let currentIndex = 0; // Keep track of the current job index

    function displayJob() {
      const job = jobs[currentIndex];
      const jobTitle = job.name;
      const jobLink = `https://www.epsilon.com/jobs?id=${job.id}`;

      jobListElement.innerHTML = ""; // Clear existing job titles

      const jobLinkElement = document.createElement("a");
      jobLinkElement.href = jobLink;
      jobLinkElement.target = "_blank";
      jobLinkElement.textContent = jobTitle;
      jobLinkElement.style.textDecoration = "none"; // Remove underline
      jobLinkElement.style.cursor = "pointer"; // Change cursor to pointer
      jobLinkElement.style.color = "black"; // Set text color to black
      jobLinkElement.style.fontWeight = "normal"; 
      jobLinkElement.style.fontSize = "15px"; 
      jobListElement.appendChild(jobLinkElement);

      // Increment index, or reset to 0 if it exceeds the length of jobs array
      currentIndex = (currentIndex + 1) % jobs.length;
    }

    // Display the first job immediately
    displayJob();

    // Change job every 5 seconds
    setInterval(displayJob, 5000);
  })
  .catch((error) => console.error("Error fetching data:", error));