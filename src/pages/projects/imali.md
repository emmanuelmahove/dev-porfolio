# iMali — Budget Tracker

iMali is a mobile budgeting application that helps users log, track, and manage their expenses in a simple and intuitive way.

I built iMali as part of Varsity College's Computer Science faculty competition, where it went on to win **1st place**. The goal was to rethink how personal finance apps can work using tools that users already have access to.

What makes iMali unique is its unconventional backend, instead of a traditional server, it uses the user’s own **Google Workspace**:

- **Google Sheets** acts as the database  
- **Google Drive** stores receipts and invoices  

This approach removes the need for dedicated backend infrastructure while giving users full ownership and transparency over their data.

To further reduce friction, iMali integrates **OCR (Optical Character Recognition)** to automatically extract information from receipts, making expense logging fast and mostly hands-free.

## Features

- **Receipt scanning (OCR-powered)**  
  Scan receipts and automatically extract vendor, total amount, and category.

- **Smart expense logging**  
  Reduce manual input with auto-filled fields based on scanned data.

- **Budget tracking**  
  Set budgets and monitor spending across categories.

- **Cloud-backed via Google Workspace**  
  Data is stored in your own Google Sheets and Drive, ensuring accessibility and ownership.

## Tech Stack

iMali is built using a cross-platform mobile stack:

- **Flutter** — cross-platform mobile development  
- **Dart** — application logic 
- **Google Sheets API** — used as a lightweight database  
- **Google Drive API** — file storage for receipts and invoices  
- **Google ML Kit** — OCR for extracting data from receipts  

## Screenshots

<div class="project-mobile-screenshots">
  <img src="/projects/imali/app-screenshot-1.png" alt="iMali Screenshot 1">

  <img src="/projects/imali/app-screenshot-2.png" alt="iMali Screenshot 2">

  <img src="/projects/imali/app-screenshot-3.png" alt="iMali Screenshot 3">

  <img src="/projects/imali/app-screenshot-4.png" alt="iMali Screenshot 4">

  <img src="/projects/imali/app-screenshot-5.png" alt="iMali Screenshot 5">

  <img src="/projects/imali/app-screenshot-6.png" alt="iMali Screenshot 6">
</div>

## Video Demo

Watch the demo submitted for the competition:

[iMali Presentation - YouTube](https://www.youtube.com/watch?v=1q3mVzK4inE)

<iframe class="youtube-iframe" width="560" height="315" src="https://www.youtube.com/embed/1q3mVzK4inE?si=Uk_eQSV3hZr6jIHT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>