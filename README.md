

# Full-Stack Video Conferencing App

## Overview

This is a **full-stack video conferencing application** built using modern web technologies like **Next.js**, **TypeScript**, and **ShadCN**. The app allows users to conduct real-time video calls with secure authentication and low-latency streaming, integrating the **Stream API** for seamless video communication.

## Features

- **Real-Time Video Conferencing**: Uses **Stream's third-party software** to enable real-time video and voice communication between users.
- **User Authentication**: Integrated with **Clerk** for secure and easy user sign-up, login, and session management.
- **Responsive UI**: Built using **ShadCN** to provide a clean and responsive design that works seamlessly across devices.
- **Next.js Server-Side Rendering (SSR)**: Utilized SSR for faster load times and better performance optimization.
- **Secure Communication**: Video streams and user data are encrypted for privacy and security.
- **Scalability and Performance**: Designed with a scalable architecture for handling multiple concurrent video calls efficiently.

## Tech Stack

- **Frontend**: 
  - **Next.js**: React framework with SSR for performance optimization.
  - **TypeScript**: Strongly-typed JavaScript for robust and maintainable code.
  - **ShadCN**: For UI components and responsive design.
  
- **Authentication**:
  - **Clerk**: Authentication system for managing user accounts and sessions.

- **Real-Time Communication**:
  - **Stream API**: Third-party service for low-latency, real-time video streaming and chat integration.

- **Deployment & Hosting**:
  - **Vercel**: Deployed and hosted on Vercel for fast and scalable infrastructure.

## Installation and Setup

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14+)
- **npm** or **yarn**
- **Vercel CLI** (optional, for deployment)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/yourusername/zoom-clone.git
```

2. Navigate to the project directory:

```bash
cd zoom-clone
```

3. Install dependencies:

```bash
npm install
```
or
```bash
yarn install
```

4. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add your API keys and secrets:

```bash
NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api>
CLERK_API_KEY=<your_clerk_api_key>
NEXT_PUBLIC_STREAM_API_KEY=<your_stream_api_key>
```

5. Run the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Project Structure

```bash
├── components   # Reusable UI components
├── pages        # Next.js pages (includes API routes for backend logic)
├── public       # Static files
├── styles       # Global and component-specific styles
├── utils        # Helper functions and utilities
├── .env.local   # Environment variables (not in repo)
└── README.md    # Project documentation
```

## Key Integrations

### Stream API

- The app integrates **Stream's API** for low-latency, real-time video and chat functionality. Stream provides highly optimized video handling, making it ideal for a smooth video conferencing experience.

### Clerk Authentication

- **Clerk** provides an easy-to-use, secure authentication system. It handles user registration, login, and session management without needing complex backend user logic.

### ShadCN for UI

- **ShadCN** offers a modern, flexible UI component library that makes it easy to create responsive and clean designs.

## Deployment

The app is deployed on **Vercel** for fast, scalable, and secure hosting. You can deploy your own version by running:

```bash
vercel
```

Ensure you set up your environment variables in Vercel for **Clerk** and **Stream**.

## Screenshots

![Landing Page](path-to-screenshot-1.png)
*Landing page with login/signup via Clerk.*

![Video Call](path-to-screenshot-2.png)
*Real-time video call using Stream API.*

## Future Improvements

- **Group Video Calls**: Implement group video calls for multiple users.
- **Screen Sharing**: Add the ability to share screens during a call.
- **Chat Functionality**: Enhance the app with a real-time messaging feature alongside video calls.
- **Recording**: Enable users to record video calls for future reference.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Contact

For any inquiries or issues, reach out to me at [your-email@example.com](mailto:your-email@example.com).

---

This README covers a detailed explanation of your app’s functionality, tech stack, setup instructions, and future improvements. Make sure to update the placeholder paths (e.g., image links, URLs) to match your project specifics!
