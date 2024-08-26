# Full Stack Food Delivery Web App

This project is a full stack food ordering web application built using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the database. The application allows users to browse food items, add them to their cart, place orders, and proceed to payment. The project also includes an admin panel for managing food items, orders, and user data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication (Login/Signup)
- Browse and filter food items
- Add food items to cart
- Place orders with Stripe payment integration
- Admin panel to manage food items and orders
- Responsive design with smooth scroll and fade-in effects
- JWT-based authentication for securing API endpoints
- Real-time cart and order management

## Technologies Used

- **Frontend**: React.js, Context API, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe
- **Authentication**: JWT, bcrypt

## Setup and Installation

### Prerequisites

- Node.js (v18.19.1 or higher)
- MongoDB
- Stripe Account

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://git@github.com:odhiambow2354/FoodDelivery.git
   cd FoodDelivery
   ```

2. **Install backend dependencies**:

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**:

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env` file in the `backend` folder with the following variables:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

5. **Start the development server**:

   - **Backend**:

     ```bash
     cd backend
     npm run server
     ```

   - **Frontend**:

     ```bash
     cd frontend
     npm run dev
     ```

   - **Frontend Admin**:

     ```bash
     cd admin
     npm run dev
     ```

6. **Access the application**:

   - Frontend: `http://localhost:5174`
   - Admin: `http://localhost:5173`
   - Backend: `http://localhost:4000/api`

## Folder Structure

```plaintext
FoodDelivery/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   └── package.json
│
└── README.md


Usage

    User Registration and Login:
        Users can register and log in to access the food ordering features.
    Browse and Add to Cart:
        Users can browse available food items and add them to their cart.
    Place Orders:
        Users can proceed to the checkout page, enter their details, and place an order using Stripe.
    Admin Panel:
        Admins can manage food items, view orders, and update order statuses.

API Endpoints

    User Authentication:
        POST /api/users/register - Register a new user
        POST /api/users/login - Login a user
    Food Items:
        GET /api/foods - Get all food items
        POST /api/foods - Add a new food item (Admin)
        DELETE /api/foods/:id - Delete a food item (Admin)
    Orders:
        POST /api/orders - Place a new order
        GET /api/orders - Get all orders (Admin)
        GET /api/orders/user - Get orders by a specific user
    Cart:
        POST /api/cart - Add to cart
        GET /api/cart - Get cart items
        DELETE /api/cart/:id - Remove an item from the cart


Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

Deployment
Use render.com

Contact

    GitHub: odhiambow2354
    Email: odhiambow2354@gmail.com
```
