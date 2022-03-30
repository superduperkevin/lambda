package grid

import "github.com/lambda-platform/datagrid"

import "github.com/lambda-platform/lambda/models"

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type Company2 struct {
	Desc22 string `gorm:"column:desc22" json:"desc22"`
	ID     int    `gorm:"column:id;primary_key" json:"id"`
	Title  string `gorm:"column:title" json:"title"`
}

type CompanyMainTable2 struct {
	Desc22 string `gorm:"column:desc22" json:"desc22"`
	ID     int    `gorm:"column:id;primary_key" json:"id"`
	Title  string `gorm:"column:title" json:"title"`
}

func (c *CompanyMainTable2) TableName() string {
	return "company"
}

//  TableName sets the insert table name for this struct type
func (c *Company2) TableName() string {
	return "company"
}

var Company2Datagrid datagrid.Datagrid = datagrid.Datagrid{
	Name:      "company",
	Identity:  "id",
	DataTable: "company",
	MainTable: "company",
	DataModel: new(Company2),
	Data:      new([]Company2),
	MainModel: new(CompanyMainTable2),
	Columns: []datagrid.Column{
		datagrid.Column{Model: "title", Label: ""},
		datagrid.Column{Model: "desc22", Label: ""},
	},
	ColumnList:  []string{"id", "title", "desc22"},
	Filters:     map[string]string{},
	Relations:   []models.GridRelation{},
	Condition:   "",
	Aggergation: "",
	Triggers: map[string]interface{}{
		"beforeFetch":        "",
		"beforeFetchStruct":  new(interface{}),
		"afterFetch":         "",
		"afterFetchStruct":   new(interface{}),
		"beforeDelete":       "",
		"beforeDeleteStruct": new(interface{}),
		"afterDelete":        "",
		"afterDeleteStruct":  new(interface{}),
		"beforePrint":        "",
		"beforePrintStruct":  new(interface{}),
	},
	TriggerNameSpace:   "",
	FillVirtualColumns: fillVirtualColumnsCompany2,
}

func fillVirtualColumnsCompany2(rowsPre interface{}) interface{} {
	return rowsPre
}
