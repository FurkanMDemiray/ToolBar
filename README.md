# React Native Maps R&D (Expo)

R&D project focused on **working with maps in React Native (Expo)** and comparing **three practical ways** to show a map experience.

## Goal

- Explore the current “best” options for maps in an Expo-friendly workflow
- Compare trade-offs around **DX**, **maintenance**, **native linking**, and **user experience**
- Keep notes/opinions in one place as the ecosystem evolves

## The 3 ways to work with maps

- **1) `expo-maps` (Alpha / future direction)**
  - **What it is**: Expo’s newer map API (currently **alpha**) and likely the **main map API in the future**.
  - **Why I care**: It looks like the most “Expo-native” direction going forward.
  - **My opinion**:
    - Great to track early because it may become the default choice later.
    - Risky for production today because alpha can change and may have gaps/bugs.

- **2) `react-native-maps` (mature + maintained)**
  - **What it is**: The well-known, widely-used map library for React Native.
  - **Key point for this project**: It’s **updated and maintained**, and can work in an Expo workflow (i.e., I can open it in the app without doing manual native linking).
  - **My opinion**:
    - Best “stable” option when I want an in-app map today.
    - Big ecosystem + lots of examples makes development faster.

- **3) Linking to an external map (device app or browser)**
  - **What it is**: Instead of rendering a map in-app, I **open the phone’s maps app** (or a browser fallback if the app isn’t installed) using deep links / URLs.
  - **My opinion**:
    - Simplest and most reliable when I only need “open directions / view location”.
    - Not a full in-app map UI, but it’s great UX for navigation and reduces in-app complexity.

## Getting started

```bash
npm install
npx expo start
```

## Notes

- This repo is intentionally R&D-focused; expect experiments and comparisons over time.
