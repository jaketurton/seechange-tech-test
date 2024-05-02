# SeeChange Frontend Software Engineer Technical Test

# How to run:

**Build JSON Go Server**
- `cd api`
- `go build main.go`
- `./main` (bash) `main.exe` (windows)

**Build React App**
- `npm start` to run the app
- `npm test` to test the app
- `npm run build` to create production build

*Please note: I decided to host the JSON payload locally, this was so I was able to learn how to setup a basic JSON server in Go. The same payload URL for fakestoreapi is commented out next to `fetch` in `Products.tsx`, line 15.* 

![](https://imgur.com/uV6pL1Q)

# Original Brief:

Project Overview: You are tasked with creating a simple web application that displays a list of products fetched from a RESTful API and allows users to filter these products based on their categories.

Requirements:

    The web application should have two main pages: a homepage and a product listing page.
    The homepage should include a header with the company logo and navigation links to the product listing page.
    The product listing page should display a list of products fetched from https://fakestoreapi.com/.
    Each product should display its name, category, price, and an image if available.
    Users should be able to filter products by category using a dropdown menu or any other UI element of your choice.
    Implement responsive design to ensure the application works well on both desktop and mobile devices.

Technologies:

    You are free to choose any technologies you prefer to accomplish this task. However, you must use a reactive JavaScript framework such as Vue.js, React, or a similar framework. Feel free to utilize CSS frameworks like Tailwind CSS or equivalent for styling.

Submission:

    Include a README.md file with instructions on how to run your application locally.
    Please submit your solution by providing a link to a public repository or as an archive.
    Feel free to use an AI tool to assist but please be ready to answer any questions about your solution.
