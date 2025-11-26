Based on your Google Drive, I found a few documents containing detailed information about **VowSuite**. The most comprehensive file appears to be a website draft titled **"Vowsuite - done"**, which outlines the product's features, pricing, and structure.

Here is a summary of the information saved in your documents:

### **1. Product Overview**
**VowSuite** is described as a **"White-Label Wedding App SaaS for Planners & Developers"**[cite: 1].
**Tagline:** "The Future of Weddings is Digital." [cite: 1]
**Core Value:** It is designed to replace manual spreadsheets and emails with a centralized digital hub, allowing planners to scale their business by automating client onboarding and app deployment[cite: 1].
**Target Audience:** UK-based wedding planners and developers[cite: 1].

### **2. Key Features**
The documents list the following core modules and capabilities:
**Automated Onboarding:** A digital questionnaire gathers client data in a standardized format[cite: 1].
**Streamlined Design:** Uses a templating engine to populate pre-built designs with client data[cite: 1].
**Automated Deployment:** A "CI/CD pipeline" that instantly generates a unique URL and QR code for each wedding[cite: 1].
**Post-Event Archiving:** Automatically compiles uploaded media (photos/videos) into a digital archive[cite: 1].
**Guest Features:** The app includes interactive schedules, digital menus (with dietary info), searchable seating plans, and a photo upload tool for guests[cite: 1].
**Planner Dashboard:** A view for planners to manage multiple client weddings (e.g., "Marie & John", "Sophie & Tom"), track to-do lists, and monitor invoices[cite: 1].

### **3. Pricing Structure**
Your saved document outlines three specific pricing tiers[cite: 1]:
* **Planner Pro:** **£99/event**
    * For individual planners.
    * Includes up to 5 custom events/year, full design customization, and digital photo archiving.
* **Agency (Most Popular):** **£499/month**
    * For established agencies.
    * Includes unlimited events, white-label solution, API access, and priority support.
* **Enterprise:** **"Let's Talk"**
    * For large-scale deployments.
    * Includes custom feature development, dedicated infrastructure, and on-premise deployment.

### **4. Technical & Portfolio Context**
]In your **"portfolio descriptions"** document, VowSuite is categorized as a **"SaaS Concept"**
**Role:** Full-Stack Web App Development (React & Firebase/Supabase)[cite: 2].
**System Architecture:** It is noted as a B2C application built to handle secure, high-traffic events using simple access methods like QR codes[cite: 2].
**Comparison:** A table in the draft compares VowSuite to "Traditional Methods," highlighting that VowSuite offers a "Centralised Digital Hub" versus "Scattered Emails & Group Chats"[cite: 1].

### **5. Source Files**
You can find this information in the following Google Docs:
**"Vowsuite - done"**: Contains the full HTML/CSS code and text for the landing page[cite: 1].
**"portfolio descriptions"**: Contains the revised portfolio entry for VowSuite[cite: 2].
VowSuite (SaaS Concept) 


Role: Full-Stack Web App Development (React & Firebase/Supabase) 

Description:

"The Value: A B2C application built to significantly enhance the client's guest experience and streamline wedding logistics. Key Features that drive value include: Interactive Schedules (instant updates if timelines shift), Digital Menu Display (handling dietary requirements), Searchable Seating Plans, and secure Photo/Video Sharing for guests. System Architecture is structured to manage user access via simple methods (like a QR code), demonstrating competence in handling secure, high-traffic events for specialized clients like wedding planners or direct couples." The app is custom-branded to match the event's theme and includes features like photo/video sharing, an interactive schedule, a digital menu, and a searchable seating plan, all accessible via a simple QR code

for my portfolio, i dont want to link to maries wedding app, becuase it is live and connected to firebase, i dont want any potential viewers testing it out and filling her album with photos. 
so vowsuite will be the demo version of the app, with a mockup of the database and a mockup of the app. with a twist! 

for the mockup we need to create 5 couples, i will find images to use as backgrounds and use them to design the colour palette. were acting as if vowsuite is owned by a wedding planner, the brides are her customers. each bride will have her own app, with her own events and her own style and flair and ideas.  use admin, client and clientid to keep them managed for when i connect it to firebase later. 

we need to create a wedding planning checklist, everything that needs to be arranged for a wedding, and a list of suppliers and venues. each supplier will have a profile, with a description, a list of services, a list of prices, and a list of reviews. each venue will have a profile, with a description, a list of services, a list of prices, and a list of reviews. each supplier and venue will have a list of events they have been booked for. 

please include for each bride photo uploads, menu, event schedule, seating plan, guest list, and a mock venue to get us started.

entry to each of the brides apps will be with their own login eventually, but for the sake of the demo, lets just have a view as bride for each one with a different background and style, view as guest keeping that brides background and style, view as planner with a different background and style. 


please ask quesitions if you need clarification or if you need more information.

### **6. VowSuite Demo App (Phase 2)**
**Status:** Completed Demo Application
**Tech Stack:** React, Vite, Tailwind CSS, TypeScript

**Project Highlights:**
-   **White-Label Architecture:** Designed a system where a single codebase supports multiple client themes (e.g., "Marie & John" vs. "Sophie & Tom") dynamically based on data.
-   **Role-Based Views:** Implemented distinct interfaces for Planners (Management), Brides (Planning), and Guests (Info).
-   **Complex State Logic:** Built a "Smart Calendar" that algorithmically generates a realistic schedule for a busy planner, including rotating client meetings, family activities, and business tasks.
-   **Mobile-First UX:** Developed a "Mobile View Toggle" that simulates a phone viewport on desktop, with conditional rendering logic to hide heavy media (videos) on smaller screens for better performance and usability.
-   **SaaS Features:** Included "Agency-Tier" features like a Global Checklist to manage multiple clients simultaneously and a Budget Tracker with payment status logic.