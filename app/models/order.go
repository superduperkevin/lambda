package models

import (
	"github.com/lambda-platform/lambda/DB"
)

type OrderRequest struct {
	Model struct {
		CustomerID   int           `json:"customer_id"`
		OrderProduct []interface{} `json:"order_product"`
	} `json:"model"`
	EditMode bool `json:"editMode"`
}


  
type CustomerOrder struct {
	CreatedAt  *DB.Date `gorm:"column:created_at" json:"created_at"`
	CustomerID *int     `gorm:"column:customer_id" json:"customer_id"`
	ID         int      `gorm:"column:id;primary_key" json:"id"`
	UpdatedAt  *DB.Date `gorm:"column:updated_at" json:"updated_at"`
}

func (c *CustomerOrder) TableName() string {
	return "customer_order"
}


type OrderProduct struct {
	CategoryID *int `gorm:"column:category_id" json:"category_id"`
	ID         int  `gorm:"column:id;primary_key" json:"id"`
	OrderID    *int `gorm:"column:order_id" json:"order_id"`
	ProductID  *int `gorm:"column:product_id" json:"product_id"`
	Qty        *int `gorm:"column:qty" json:"qty"`
}

func (o *OrderProduct) TableName() string {
	return "order_product"
}

type FieldTriggerResponse struct {
	Schema []Field `json:"schema"`
	// Message struct {
	// 	Type    string `json:"type"`
	// 	Message string `json:"message"`
	// } `json:"message"`
	// Info []struct {
	// 	Target string `json:"target"`
	// 	HTML   string `json:"html"`
	// } `json:"info"`
}
type Field struct {
	Field string `json:"field"`
	Value interface{} `json:"value"`
}