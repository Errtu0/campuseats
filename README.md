# 🍔 CampusEats Monorepo

Welcome to the **CampusEats** project! This is a full-stack mobile application architecture designed for team collaboration.

## 🚀 Tech Stack
* **Frontend:** React Native (Expo Go)
* **Backend:** Node.js Express
* **Database:** PostgreSQL (Docker)
* **ORM:** Prisma 7

---

## 🛠️ Setup Instructions (For New Teammates)

### 1. Prerequisites
* Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and keep it running.
* **Windows Users:** Stop any local PostgreSQL service in `services.msc`.
* Install **Expo Go** on your phone.

### 2. Initialization
From the **root folder**:

npm install
npm run docker:up
npm run db:migrate



3. Start Developing
Bash
npm run dev
Backend: http://localhost:3000

Frontend: Scan the QR code in your terminal.

🤝 Collaboration & Tooling Guide
To work effectively as a team, we use the following tools for specific tasks. Please follow this workflow:

📡 1. API Documentation (Postman)
Goal: Frontend needs to know what the Backend is building.

Tool: Postman Workspace

Workflow: Backend devs must create/update the collection in our shared Postman workspace before finishing the code. Frontend devs use this to mock data.

🎨 2. UI/UX Design (Figma)
Goal: Consistent design across all screens.

Tool: Figma

Workflow: Refer to the Figma link (insert link here) for colors, spacing, and component logic. Don't guess the UI!

📊 3. Database Visualization (Prisma Studio)
Goal: View or edit the data in your local database without SQL.

Command: npm run db:studio

Workflow: Use this to check if your API POST requests actually saved data correctly.

🛡️ 4. GitHub Workflow (The "Safety Net")
Goal: Prevent broken code from reaching the main app.

Branch: git checkout -b feat/feature-name

Pull Request (PR): Push your branch and open a PR on GitHub.

Peer Review: At least one teammate must review and click Approve before you can merge to main.

📝 5. Task Management (Trello/Linear)
Goal: Know who is doing what.

Workflow: Move your ticket to "In Progress" when you start and "Done" after the PR is merged.

📁 Directory Map
Plaintext
/apps/client      # Frontend (React Native) - Work here for UI/Screens
/apps/server      # Backend (Node.js) - Work here for API/Logic
/packages/database # Database Schema - Work here for Data Models
💡 Troubleshooting
Docker Port Error: Ensure port 5432 is not being used by another app.

Prisma Error: If you pull new code and it breaks, run npm install and npm run db:migrate.




---

## Final Push to GitHub

Once you've saved this file, push it so your team can see the guide:

```bash
git add README.md
git commit -m "docs: add comprehensive team collaboration guide to README"
git push origin main