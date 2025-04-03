package cidades

import (
	"example/web-service-gin/src/server/controllers/models"
	"net/http"

	"github.com/gin-gonic/gin"
)


func Create(c *gin.Context) {
	var newCidade models.Cidade

	if err := c.ShouldBindJSON(&newCidade); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	models.Cidades = append(models.Cidades, newCidade)
	c.IndentedJSON(http.StatusCreated, models.Cidades)
}
