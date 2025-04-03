package routes

import (
	"net/http"

	"example/web-service-gin/src/server/controllers/cidades"
	"example/web-service-gin/src/server/controllers/models"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"hello": "world"})
	})

	r.GET("/cidades", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"default": models.Cidades})
	})

	r.POST("/cidades", cidades.Create)

	r.DELETE("/cidades/:id", cidades.DeleteById)
}
