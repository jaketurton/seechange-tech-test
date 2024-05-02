package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

// Define structs to match the structure of the JSON objects
type Rating struct {
	Rate  float64 `json:"rate"`
	Count int     `json:"count"`
}

type Product struct {
	ID          int     `json:"id"`
	Title       string  `json:"title"`
	Price       float64 `json:"price"`
	Description string  `json:"description"`
	Category    string  `json:"category"`
	Image       string  `json:"image"`
	Rating      Rating  `json:"rating"`
}

var products []Product

// Function to read the data from the JSON file
func ReadDataFromFile(filename string) ([]Product, error) {
	var data []Product

	file, err := os.Open(filename)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	decoder := json.NewDecoder(file)
	if err := decoder.Decode(&data); err != nil {
		return nil, err
	}

	return data, nil
}

func main() {
	// Load data from JSON file
	dataFromFile, err := ReadDataFromFile("data.json")
	if err != nil {
		panic(err)
	}
	products = dataFromFile

	// Serve static files
	http.Handle("/", http.FileServer(http.Dir("static")))

	// API endpoint to serve JSON data
	http.HandleFunc("/data", func(w http.ResponseWriter, r *http.Request) {
		// Log when the endpoint is accessed
		log.Println("User accessed /data endpoint")

		// Disable CORS - TEST PURPOSES ONLY
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// Encode and return JSON data
		json.NewEncoder(w).Encode(products)
	})

	// Start server
	http.ListenAndServe(":8080", nil)
}
