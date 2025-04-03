package server

import (
	"example/web-service-gin/src/server/routes"

	"github.com/gin-gonic/gin"
)

func StartServer() *gin.Engine {
	r := gin.Default()

	routes.SetupRoutes(r)
	return r
}
