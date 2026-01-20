# Brand-Store-Mobile-App-Design

Brand-Store-Mobile-App-Design is a modern, mobile-first e-commerce web application built to deliver a smooth and stylish shopping experience. It focuses on a clean UI, fast performance, and an intuitive product-to-checkout flow using the latest web technologies.

---

## 🚀 Tech Stack

* **Framework**: Next.js 16
* **Library**: React 19
* **Styling**: Tailwind CSS 4 + Lucide Icons
* **Language**: TypeScript 5.9
* **State Management**: React Context (CartContext)

---

## ✨ Key Features

* **Product Details Page**
  Browse products with a modern mobile layout, image gallery, size & color selectors, and a sticky **Add to Cart** button.

* **Smart Cart System**
  Add, remove, and review items easily. Cart data is handled through a session-based API.

* **Checkout Flow**
  Place orders with a simulated payment success experience.

* **Fully Responsive**
  Designed for mobile first, but works smoothly on tablets and desktops too.

* **Premium Feedback**
  Clean toast notifications replace boring browser alerts for a better user experience.

---

## 🛠️ Getting Started

### What You Need

* Node.js **18+** installed

### Setup Instructions

1. Clone the project:

   ```bash
   git clone <repository-url>
   cd fashion-hub
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to:
   **[http://localhost:3000](http://localhost:3000)**

---

## 📦 Build & Deploy

To build for production:

```bash
npm run build
```

To run the production version:

```bash
npm start
```

### Deploying on Vercel

FashionHub is optimized for **Vercel**.
Just import your GitHub repository into Vercel and it will automatically detect the Next.js setup.

---

## 💾 Data & Seeding

This project uses a simple **in-memory data store** for quick setup:

* **Products** are loaded from `src/lib/data.ts`
* **Cart data** is stored per server session
* No database setup is required

---

## 📝 Design Choices

* **In-Memory Storage**
  Keeps the project simple and easy to run without extra setup.

* **Sticky Add to Cart Button**
  Always visible on mobile for better usability.

* **Modern Toast Notifications**
  Uses `sonner` for a clean, app-like feel.

* **AI-Generated Images**
  All product images are stored locally in `/public/images`.

---

## 📂 Project Structure

* `src/app` – App Router pages & API routes
* `src/components` – Reusable UI components
* `src/lib` – Utilities & Context providers
* `src/types` – TypeScript types

---

## 📸 Demo Video

https://github.com/user-attachments/assets/08ac136f-fb32-48c5-b8ae-1046a5c822e6

---
