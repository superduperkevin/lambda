package grid

import "github.com/lambda-platform/lambda/datagrid"

import "github.com/lambda-platform/lambda/models"

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type ProductTest18 struct {
	Category  *string  `gorm:"column:category" json:"category"`
	CreatedAt *DB.Date `gorm:"column:created_at" json:"created_at"`
	ID        int      `gorm:"column:id" json:"id"`
	Name      *string  `gorm:"column:name" json:"name"`
	Price     float32  `gorm:"column:price" json:"price"`
	UpdatedAt *DB.Date `gorm:"column:updated_at" json:"updated_at"`
}

type ProductMainTable18 struct {
	CategoryID  *int     `gorm:"column:category_id" json:"category_id"`
	CreatedAt   *DB.Date `gorm:"column:created_at" json:"created_at"`
	Description *string  `gorm:"column:description" json:"description"`
	HasNhat     *int     `gorm:"column:has_nhat" json:"has_nhat"`
	ID          int      `gorm:"column:id;primary_key" json:"id"`
	Name        *string  `gorm:"column:name" json:"name"`
	Nhat        float32  `gorm:"column:nhat" json:"nhat"`
	Noat        float32  `gorm:"column:noat" json:"noat"`
	Price       float32  `gorm:"column:price" json:"price"`
	UpdatedAt   *DB.Date `gorm:"column:updated_at" json:"updated_at"`
}

func (p *ProductMainTable18) TableName() string {
	return "product"
}

//  TableName sets the insert table name for this struct type
func (p *ProductTest18) TableName() string {
	return "product_test"
}

var ProductTest18Datagrid datagrid.Datagrid = datagrid.Datagrid{
	Name:      "Бүтээгдэхүүн",
	Identity:  "id",
	DataTable: "product_test",
	MainTable: "product",
	DataModel: new(ProductTest18),
	Data:      new([]ProductTest18),
	MainModel: new(ProductMainTable18),
	Columns: []datagrid.Column{
		datagrid.Column{Model: "category", Label: "Ангилал"},
		datagrid.Column{Model: "name", Label: "Нэр"},
		datagrid.Column{Model: "price", Label: "Үнэ"},
		datagrid.Column{Model: "created_at", Label: "Бүртгэсэн огноо"},
	},
	ColumnList: []string{"id", "category", "name", "price", "created_at"},
	Filters: map[string]string{
		"id": "",

		"category": "",

		"category_id": "Select",

		"name": "",

		"description": "",

		"price": "",

		"created_at": "",

		"updated_at": "",
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
	FillVirtualColumns: fillVirtualColumnsProductTest18,
}

func fillVirtualColumnsProductTest18(rowsPre interface{}) interface{} {
	return rowsPre
}
