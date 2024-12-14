🥤  **Greatest Beverage Landing Page (Jarrito) Implementation/Submission**
**Overview**
This PR introduces a landing page for the world's greatest beverage **Jarrito**, featuring a privacy-focused ordering system with local storage persistence. The implementation prioritizes component reusability, best UI/UX practices, clean code organization, and a modular  architecture.

**Key Features**
* 🌐 Interactive landing page with beverage details and imagery.
* 📝 Privacy-focused order form with optional and required fields.
* 🔄 Order confirmation set up with unique URLs.
* 🎲 Random name and quantity generation for privacy.
* 💾 Local storage for data persistence.
* 🔍 Optional Orders page to view Searchable order history using a my orders button with a filterable table (This was a choice made factoring best user experience.).
* 🧪 Unit test coverage for core features.

**Technical Implementation and Decisions**
  **UI Framework & Dependencies**
  * Leveraged heavily on Tailwind CSS due to it's easy-to-use Utility classes and how it shines in responsive design and general styling. I also combined it with @nextui-org/react due to it's wide array of customizable and reusable components.Framer-motion is also leveraged on for smooth animations.
  * To test one of my components i had to install the @testing-library/user-event react Library to fire specific user events.

**Libraries/Frameworks used**

  * Next.js 15
  * React 19
  * NextUI
  * TailwindCss
  * FramerMotion






## Installation Instructions

Follow the steps below to install and run the project:

### Prerequisites
- Ensure that you have [Node.js](https://nodejs.org/) installed on your machine.
- Install [Yarn](https://classic.yarnpkg.com/en/docs/install) if it's not already installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/project-name.git

2. Navigate to the project directory:
   ```bash 
      cd project-name
3. Install the project dependencies:
   ```bash
      yarn install --legacy-peer-deps
      ```
  
  This will start the local development server. You can now open the application in your browser at http://localhost:3000.
  
  Note: Due to React peer dependency issues as a result of React-19 not being totally in tune with @nextui-org/react, installation requires the following command: 

yarn install --legacy-peer-deps



**Code Organization & Best Practices**
📂 Modular File Structure
  *  Small, focused components with single responsibilities.
  * Utility functions separated into dedicated files.
  * Clear separation between business logic and UI components.
  * Reusable UI elements abstracted into common components.
🔐 **Privacy-First Implementation**
  * Random name generation from a predefined list when the user opts out.
  * Random quantity assignment from reasonable defaults.
  * Unique confirmation numbers in the format BEV-XXXXXX.
* Clear separation between user-provided and generated data.
```typescript
const RANDOM_NAMES = ['John Doe', 'Mary Sloan', ...]
const DEFAULT_QUANTITIES = [2, 4, 6, 10, 12]
```

Requirements Checklist
-[x] Tells the visitor what your drink is called
-[x] Includes an image (or images) that has your drink in it.
-[x] Describe the drink so everyone understands why it’s the greatest beverage ever.
-[x] A privacy focused “pay me later” order form that contains the following:
    Customers name
    Quantity of drinks to purchase
    City
    State/Province
    Country
    An order button
-[x] After ordering
 Confirmation that the order succeeded
 Provide order confirmation number
 Provide unique URL to see order confirmation & details

 N.B: X indicates the requirement has been marked as done

**Coding Considerations**
1. **Code Organization**
* Each file has a single, clear responsibility.
Reusable logic extracted into utility files.
* Consistent naming conventions.
* Clear separation of concerns between UI and business logic.
2. **Code Quality**
* Code is written with maintainability and * readability in mind.
Comprehensive unit tests are written to cover core features.
3. **Performance Optimization and considerations**
* Efficient state updates with minimal re-renders.
Optimized image loading to enhance performance.
* Lazy loading implemented where appropriate to reduce initial load time.
* Optimized image loading for faster page rendering.
* Minimal dependencies to keep the project lightweight.
* Efficient use of local storage operations for data persistence.
* Lightweight random generation utilities to reduce computational overhead by the component.

**Privacy Features**
* Random name generation when the user opts out.
* Reasonable quantity defaults for order privacy.
* Clear distinction between user-provided and generated data.
* Unique confirmation numbers for order tracking.

**Future Improvements**
* Implement proper backend integration for data storage and processing.
* Add data encryption for stored information to further enhance privacy.
* Enhance form validation for a smoother user experience.
* Integrate analytics in a privacy-focused manner.
* Integrate Pagination to improve order page view performance.
* Improve search capabilities and add advanced filtering options for the order history.

