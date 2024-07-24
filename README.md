# Ellty Task - Frontend React Application

This project is a React-based frontend application that demonstrates a checkbox system with a summary display feature. It's designed to showcase state management, component structure, and user interaction in a React environment.

## Live Demo

Check out the live demo of the application [here](https://ellty-task-fe-react.netlify.app/).

## Features

- Checkbox system with "All Pages" and individual page selections
- Dynamic update of checkbox states
- Summary display of selected and unselected pages
- Responsive design

## Tech Stack

- React
- Context API for state management
- CSS for styling

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LoordhuJeyakumar/ellty-task-fe-react.git
```
2. Navigate to the project directory:
```bash
cd ellty-task-fe-react
```
3. Install the dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
The application should now be running on [http://localhost:5173/](http://localhost:5173/).

## Project Structure
```
ellty-task-fe-react/
├── public/
├── src/
│   ├── components/
│   │   ├── ButtonComponent.jsx
│   │   ├── CheckBox.jsx
│   │   ├── DisplayResult.jsx
│   │   └── PageWithCheckBox.jsx
│   ├── assets/
│   │   └── icons/
│   ├── App.jsx
│   ├── CheckboxContext.jsx
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Usage

- The main page displays a list of checkboxes representing different pages.
- The "All Pages" checkbox at the top allows selection/deselection of all pages at once.
- Individual page checkboxes can be toggled independently.
- Clicking the "Done" button displays a summary of selected and unselected pages.
- The summary is hidden when any checkbox state changes, requiring another button click to view the updated result.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Loordhu Jeyakumar
- GitHub: [LoordhuJeyakumar](https://github.com/LoordhuJeyakumar)
- LinkedIn: [Loordhujeyakumar](https://www.linkedin.com/in/loordhujeyakumar/)
- Email: loordhujeyakumar@gmail.com
- Phone: +91 9600693684

Project Link: [https://github.com/LoordhuJeyakumar/ellty-task-fe-react](https://github.com/LoordhuJeyakumar/ellty-task-fe-react)