package formModels

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type CustomerOrder24 struct {
	CreatedAt  *DB.Date `gorm:"column:created_at" json:"created_at"`
	CustomerID *int     `gorm:"column:customer_id" json:"customer_id"`
	ID         int      `gorm:"column:id;primary_key" json:"id"`
	UpdatedAt  *DB.Date `gorm:"column:updated_at" json:"updated_at"`
}

type OrderProductCustomerOrder24 struct {
	CategoryID *int `gorm:"column:category_id" json:"category_id"`
	ID         int  `gorm:"column:id;primary_key" json:"id"`
	OrderID    *int `gorm:"column:order_id" json:"order_id"`
	ProductID  *int `gorm:"column:product_id" json:"product_id"`
	Qty        *int `gorm:"column:qty" json:"qty"`
}

func (o *OrderProductCustomerOrder24) TableName() string {
	return "order_product"
}

//  TableName sets the insert table name for this struct type
func (c *CustomerOrder24) TableName() string {
	return "customer_order"
}
