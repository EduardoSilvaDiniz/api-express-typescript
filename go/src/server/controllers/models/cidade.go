package models

type Cidade struct {
	ID    int    `json:"id" binding:"required"`
	Title string `json:"title" binding:"required,min=3,max=20"`
}

var (
	Cidades = []Cidade{}
)
