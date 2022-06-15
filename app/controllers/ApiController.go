package controllers

import (
	"fmt"
	"lambda/app/models"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/lambda-platform/lambda/DB"
)

func Users(c echo.Context) error {

    users := []models.Users{}
    DB.DB.Find(&users)

    return c.JSON(http.StatusOK, users)
}

func CallHistory(c echo.Context) error {
  data := new(models.OrderRequest)
    if err := c.Bind(data); err != nil {
      return echo.NewHTTPError(http.StatusBadRequest, err.Error())
    }

	fmt.Println(data.Model.CustomerID)

	lastOrder := models.CustomerOrder{}
//go gorm
	DB.DB.Where("customer_id = ?", data.Model.CustomerID).Order("id DESC").Find(&lastOrder)

	if lastOrder.ID >= 1 {
		orderItems :=	[]models.OrderProduct{}
		DB.DB.Where("order_id = ?", lastOrder.ID).Find(&orderItems)


		schemas := models.FieldTriggerResponse{}

		orderItemsFeild := models.Field{}
		orderItemsFeild.Field = "order_product"
		orderItemsFeild.Value = orderItems
		schemas.Schema = append(schemas.Schema, orderItemsFeild)
	
		fmt.Println(len(orderItems))


return c.JSON(http.StatusOK, schemas)

	}

	return c.JSON(http.StatusOK, nil)
}
