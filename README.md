# Fearless Store

Dark gaming-themed e-commerce static site scaffold using Firebase Auth, Firestore and Storage.

Setup:
1. Create a Firebase project and enable Email/Password auth, Firestore, Storage.
2. Replace `firebaseConfig` in `assets/js/firebase-config.js` with your project values.
3. Serve the folder with a static server: `npx http-server` or `python3 -m http.server 8080`.

Notes:
- Seed `products.json` into Firestore or keep local fallback.
- Secure admin access with Firestore rules or an `admins` collection.

Want me to wire admin-only rules or add Firebase Hosting config? I can do that next.
# fearless.github.io