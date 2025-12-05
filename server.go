// server.go
package main

import "fmt"

func startServer(port int) {
	fmt.Println("Server running on port", port)
}

func stopServer() {
	fmt.Println("Server stopped")
}

func main() {
	startServer(8080)
}
