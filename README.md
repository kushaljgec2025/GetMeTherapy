## GetMeTherapy
![image](https://github.com/user-attachments/assets/1d5ed9fc-a31b-4a79-af0c-9dcf46210405)
# Web App Features and Requirements

## Overview

This project is a web application with a focus on login and authentication features and a unique tracking screen with interactive components. The tracking screen includes an analog clock, a speed control slider, and a share button. Optional features include displaying random quotes.

## Features

### Login and Authentication

- **Email and Password Login:**
  - Allow users to log in using their email and password.
  
- **Google Login:**
  - Implement the option for users to log in with Google.
  
- **Email and Password Sign-Up:**
  - Provide a sign-up form for users to create an account using email and password.
  
- **Google Sign-Up:**
  - Enable users to sign up and create an account using Google.

### Tracking/Post-Login Screen

- **Design Guidelines:**
  - Design the screen based on the UI provided for previous screens.
  - Maintain the same style, colors, and overall look and feel.
  
- **Components to Develop:**
  
  1. **Analog Clock:**
     - An analog clock running anticlockwise.
     - Counts down from the current time (when the screen is opened) to 120 minutes earlier.
  
  2. **Speed Control Slider:**
     - A slider to control the speed of the clock hands.
     - Allows users to increase or decrease the speed of the clock hands.
  
  3. **Share Button:**
     - Generates a unique URL when clicked.
     - The URL allows another user to view the clock and the slider on the same page with the exact same slider configuration as when the share button was clicked.
  
  - **User Experience:**
    - Ensure the clock, slider, and share button are prominently displayed and easy to use.
    - The clock should visibly respond to adjustments made using the slider.
# Image Gallery

<div style="display: flex; flex-wrap: nowrap; overflow-x: auto; gap: 10px; padding: 10px;">
    <img src="https://github.com/user-attachments/assets/5728507b-6063-46e5-9e70-137fe400d352" alt="IMG-20240723-WA0031" style="width: 120px; height: auto; border-radius: 8px;">
    <img src="https://github.com/user-attachments/assets/1dc8314b-321a-4683-94b0-45d75a277c7e" alt="IMG-20240723-WA0032" style="width: 120px; height: auto; border-radius: 8px;">
    <img src="https://github.com/user-attachments/assets/9a024c34-9f58-48f1-89b2-f2822fbe0df1" alt="IMG-20240723-WA0027" style="width: 120px; height: auto; border-radius: 8px;">
    <img src="https://github.com/user-attachments/assets/412d0012-e20e-42be-801f-655b276cc7b8" alt="IMG-20240723-WA0029" style="width: 120px; height: auto; border-radius: 8px;">
    <img src="https://github.com/user-attachments/assets/6902f22f-2aba-4124-9fe7-b6dee531cbd6" alt="IMG-20240723-WA0028" style="width: 120px; height: auto; border-radius: 8px;">
    <img src="https://github.com/user-attachments/assets/7394f5bc-d2dd-4116-9c6a-3ffac1a16aa9" alt="IMG-20240723-WA0025" style="width: 120px; height: auto; border-radius: 8px;">
    <img src="https://github.com/user-attachments/assets/7e587a5b-96f1-49a0-8475-8e0ec6384c6d" alt="IMG-20240723-WA0026" style="width: 120px; height: auto; border-radius: 8px;">
</div>


# Vite React Project Setup

## Overview

This project template provides a minimal setup for a React application using Vite. It includes Hot Module Replacement (HMR) and ESLint rules to help maintain code quality and consistency. You can choose between two official Vite plugins for React: one using Babel and the other using SWC for Fast Refresh.

## Features

- **Fast Refresh** for React components
- **Hot Module Replacement (HMR)** for a faster development experience
- **ESLint** for maintaining code quality

## Installation

## Requirements

- [NodeJS 18+](https://nodejs.org/en)
- [pnpm](https://pnpm.io) (or equivalent)

If you'd like to use the included Dockerfile then [Docker](https://www.docker.com) is required as well:

## Getting Started

Getting started is a simple as cloning the repository

```
git clone git@github.com:kushaljgec2025/GetMeTherapy.git
```

Changing into the new directory

```
cd GetMeTherapy
```

Removing the .git folder (and any additional files, folders or dependencies you may not need)

```
rm -rf .git
```

Installing dependencies

```
npm install
```
Start Localhost 

```
npm run dev
```
Start Localhost (For Mobile View )

```
npm run dev -- --host 
```
Sample Output

```
  VITE v5.3.4  ready in 643 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.xxx.xxx.1:5173/
  ➜  Network: http://192.xxx.xxx.103:5173/
  ➜  press h + enter to show help
```

Paste the Network link in your mobile
# Note :
Mobile and Local machine should be connected to same network.


```
git clone git@github.com:kushaljgec2025/GetMeTherapy.git &&\
cd GetMeTherapy &&\
rm -rf .git &&\
pnpm install &&\
pnpm run setup
```
