package grid

import "github.com/lambda-platform/lambda/datagrid"

import "github.com/lambda-platform/lambda/models"

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type OrderTest20 struct {
	CreatedAt *DB.Date `gorm:"column:created_at" json:"created_at"`
	FirstName *string  `gorm:"column:first_name" json:"first_name"`
	ID        int      `gorm:"column:id" json:"id"`
	LastName  *string  `gorm:"column:last_name" json:"last_name"`
	UpdatedAt *DB.Date `gorm:"column:updated_at" json:"updated_at"`
}

type CustomerOrderMainTable20 struct {
	CreatedAt  *DB.Date `gorm:"column:created_at" json:"created_at"`
	CustomerID *int     `gorm:"column:customer_id" json:"customer_id"`
	ID         int      `gorm:"column:id;primary_key" json:"id"`
	UpdatedAt  *DB.Date `gorm:"column:updated_at" json:"updated_at"`
}

func (c *CustomerOrderMainTable20) TableName() string {
	return "customer_order"
}

//  TableName sets the insert table name for this struct type
func (o *OrderTest20) TableName() string {
	return "order_test"
}

var OrderTest20Datagrid datagrid.Datagrid = datagrid.Datagrid{
	Name:      "Захиалга",
	Identity:  "id",
	DataTable: "order_test",
	MainTable: "customer_order",
	DataModel: new(OrderTest20),
	Data:      new([]OrderTest20),
	MainModel: new(CustomerOrderMainTable20),
	Columns: []datagrid.Column{
		datagrid.Column{Model: "created_at", Label: "Огноо"},
		datagrid.Column{Model: "first_name", Label: "Нэр"},
		datagrid.Column{Model: "last_name", Label: "Овог"},
	},
	ColumnList: []string{"id", "created_at", "first_name", "last_name"},
	Filters: map[string]string{
		"id": "",

		"customer_id": "Select",

		"created_at": "",

		"updated_at": "",

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
	FillVirtualColumns: fillVirtualColumnsOrderTest20,
}

func fillVirtualColumnsOrderTest20(rowsPre interface{}) interface{} {
	return rowsPre
}
