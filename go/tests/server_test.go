package tests

import (
	"errors"
	"testing"
)

func hello(a string) (string, error) {
	if a != "hello world" {
		return "", errors.New("emply name")
	}

	return a, nil
}

func TestHello(t *testing.T) {
	esperado := "hello world"
	resultando, err := hello("hello wol")

	if err != nil || resultando == "" {
		t.Errorf("Resultando inesperado! esperava %s, obtido %s", esperado, resultando)
	}
}

