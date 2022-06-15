package grid

import "github.com/lambda-platform/lambda/datagrid"

import "github.com/lambda-platform/lambda/models"

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type Category17 struct {
	Category *string `gorm:"column:category" json:"category"`
	ID       int     `gorm:"column:id;primary_key" json:"id"`
}

type CategoryMainTable17 struct {
	Category *string `gorm:"column:category" json:"category"`
	ID       int     `gorm:"column:id;primary_key" json:"id"`
}

func (c *CategoryMainTable17) TableName() string {
	return "category"
}

//  TableName sets the insert table name for this struct type
func (c *Category17) TableName() string {
	return "category"
}

var Category17Datagrid datagrid.Datagrid = datagrid.Datagrid{
	Name:      "Ангилал",
	Identity:  "id",
	DataTable: "category",
	MainTable: "category",
	DataModel: new(Category17),
	Data:      new([]Category17),
	MainModel: new(CategoryMainTable17),
	Columns: []datagrid.Column{
		datagrid.Column{Model: "category", Label: "Ангилал"},
	},
	ColumnList: []string{"id", "category"},
	Filters: map[string]string{
		"id": "",

		"category": "",
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
	FillVirtualColumns: fillVirtualColumnsCategory17,
}

func fillVirtualColumnsCategory17(rowsPre interface{}) interface{} {
	return rowsPre
}
