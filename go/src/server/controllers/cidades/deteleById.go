package cidades

import (
	"net/http"
	"strconv"

	"example/web-service-gin/src/server/controllers/models"

	"github.com/gin-gonic/gin"
)

func DeleteById(c *gin.Context) {
	id := c.Param("id")
	num, err := strconv.Atoi(id)

	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": "error type number"})
		return
	}

	for _, a := range models.Cidades {
		if a.ID == num {
			c.IndentedJSON(http.StatusOK, gin.H{"default": id})
			return
		}
	}

	c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": "id not found"})
}
