package main

import "example/web-service-gin/src/server"


func main() {
	server := server.StartServer()
	server.Run("localhost:8080")
}


