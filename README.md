# Panic API + Frontend

## Tech stack

### Server

- Node.js (Express)
- PostgreSQL
- Prisma
- Docker/Docker Compose
- Google Maps API (Reverse Geocoding)

### Client

- React.js
- Redux.js
- Sass
- Vite (Bundler)

## App Flow

### General User

- Register/Login
  - Uses from-scratch JWT authentication
  - JWT stored in local storage
- Panic
  - Users can click on either type of panic (Crime/Health) to instantly send their location to the server
  - Location stored as latitude & longitude via the Geolocation API (enable location services in browser)

### Service Provider

- Register/Login
  - Uses from-scratch JWT authentication
  - JWT stored in local storage
- Panic response
  - Can view incoming panics and relevant data (not real-time)
  - Can effectively change the status of panics as they deal with the situation

## Flaws + Improvements

- Validation on input forms
  - I would either do this manually or use `yup`
- Server-side testing
  - I would use jest with supertest, and mock my Prisma client in a local database (Prisma provides methods to mock a db)
- Deployment
  - I could set the react app as the view engine in the express app, and essentially host it together as one bundle
  - I could also deploy the server on a cloud platform like Heroku and deploy the react app separately as a static site, and treat the server as an external API
- Visuals
  - Given more time, I would display a map of locations nearest to service providers and vice-versa for clients
