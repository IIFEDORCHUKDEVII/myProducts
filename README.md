# 🛍️ React Native Products App

This is a mobile application built with **React Native + TypeScript** that allows users to browse a list of products and filter them by category using a bottom sheet interface.

---

## 📱 Features

- 🔄 Fetch and cache products using **React Query**
- 📂 Filter products by category
- 📜 Display categories in an **Action Sheet**
- 🖼 Product cards with image, title, and price
- ⚡ Clean MVVM architecture with hooks

---

## 🧠 Project Structure

```
└── 📁src
    └── 📁api
        └── apiClient.ts
    └── 📁constants
        └── colors.ts
    └── 📁features
        └── 📁products
            └── 📁constants
                └── categories.ts
            └── 📁models
                └── Product.ts
            └── 📁services
                └── productService.ts
            └── 📁viewmodels
                └── ProductViewModel.ts
            └── 📁views
                └── 📁components
                    └── CategoriesSheet.tsx
                    └── sheets.tsx
                └── 📁icons
                    └── filter.png
                └── 📁screens
                    └── ProductListScreen.tsx
   
```


---

## 🏗 Architecture

The app follows the **MVVM (Model-View-ViewModel)** pattern:

- **Model**: TypeScript interfaces in `models/`
- **View**: UI components and screens in `views/`
- **ViewModel**: Business logic and state management in `viewmodels/`

This ensures a clean separation of concerns, scalability, and easier maintenance.

---

## 📦 Dependencies

-  **@tanstack/react-query** – Data fetching and caching
-  **react-native-actions-sheet** – Bottom sheet for category filter
-  **axios** – Promise-based HTTP client

## 🚀 Getting Started

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/products-app.git
cd products-app

### 2. Install dependencies

npm install
# or
yarn install

### 3. Run on device/emulator

npx react-native run-android
# or
npx react-native run-ios
```
---

👤 Author
Artur Fedorchuk | React Native Developer
