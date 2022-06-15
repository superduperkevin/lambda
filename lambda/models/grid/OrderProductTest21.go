package grid

import "github.com/lambda-platform/lambda/datagrid"

import "github.com/lambda-platform/lambda/models"

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type OrderProductTest21 struct {
	CustomerID *int    `gorm:"column:customer_id" json:"customer_id"`
	FirstName  *string `gorm:"column:first_name" json:"first_name"`
	ID         int     `gorm:"column:id" json:"id"`
	LastName   *string `gorm:"column:last_name" json:"last_name"`
	Name       *string `gorm:"column:name" json:"name"`
	Price      float32 `gorm:"column:price" json:"price"`
	Qty        *int    `gorm:"column:qty" json:"qty"`
}

type OrderProductMainTable21 struct {
	CategoryID *int `gorm:"column:category_id" json:"category_id"`
	ID         int  `gorm:"column:id;primary_key" json:"id"`
	OrderID    *int `gorm:"column:order_id" json:"order_id"`
	ProductID  *int `gorm:"column:product_id" json:"product_id"`
	Qty        *int `gorm:"column:qty" json:"qty"`
}

func (o *OrderProductMainTable21) TableName() string {
	return "order_product"
}

//  TableName sets the insert table name for this struct type
func (o *OrderProductTest21) TableName() string {
	return "order_product_test"
}

var OrderProductTest21Datagrid datagrid.Datagrid = datagrid.Datagrid{
	Name:      "Захиалгийн бүтээгдэхүүн",
	Identity:  "id",
	DataTable: "order_product_test",
	MainTable: "order_product",
	DataModel: new(OrderProductTest21),
	Data:      new([]OrderProductTest21),
	MainModel: new(OrderProductMainTable21),
	Columns: []datagrid.Column{
		datagrid.Column{Model: "qty", Label: "Тоо, ширхэг"},
		datagrid.Column{Model: "name", Label: "Бүтээгдэхүүн"},
		datagrid.Column{Model: "price", Label: "Үнэ"},
		datagrid.Column{Model: "customer_id", Label: "customer_id"},
		datagrid.Column{Model: "first_name", Label: "ner"},
		datagrid.Column{Model: "last_name", Label: "ovog"},
	},
	ColumnList: []string{"id", "qty", "name", "price", "customer_id", "first_name", "last_name"},
	Filters: map[string]string{
		"id": "",

		"category_id": "Select",

		"product_id": "Select",

		"order_id": "",

		"qty": "",

		"name": "",

		"price": "",

		"customer_id": "",

		"first_name": "",

		"last_name": "",
	},
	Relations:   []models.GridRelation{},
	Condition:   "",
	Aggergation: "",
	BeforeFetch: nil,

	AfterFetch: nil,

	BeforeDelete: nil,

	AfterDelete: nil,

	BeforePrint:        nil,
	TriggerNameSpace:   "",
	FillVirtualColumns: fillVirtualColumnsOrderProductTest21,
}

func fillVirtualColumnsOrderProductTest21(rowsPre interface{}) interface{} {
	return rowsPre
}
