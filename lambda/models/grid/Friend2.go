package grid

import "github.com/lambda-platform/lambda/datagrid"

import "github.com/lambda-platform/lambda/models"

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type Friend2 struct {
	ID   int     `gorm:"column:id;primary_key" json:"id"`
	Name *string `gorm:"column:name" json:"name"`
}

type FriendMainTable2 struct {
	ID   int     `gorm:"column:id;primary_key" json:"id"`
	Name *string `gorm:"column:name" json:"name"`
}

func (f *FriendMainTable2) TableName() string {
	return "friend"
}

//  TableName sets the insert table name for this struct type
func (f *Friend2) TableName() string {
	return "friend"
}

var Friend2Datagrid datagrid.Datagrid = datagrid.Datagrid{
	Name:      "friend",
	Identity:  "id",
	DataTable: "friend",
	MainTable: "friend",
	DataModel: new(Friend2),
	Data:      new([]Friend2),
	MainModel: new(FriendMainTable2),
	Columns: []datagrid.Column{
		datagrid.Column{Model: "name", Label: ""},
	},
	ColumnList: []string{"id", "name"},
	Filters: map[string]string{
		"id": "",

		"name": "",
	},
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
	FillVirtualColumns: fillVirtualColumnsFriend2,
}

func fillVirtualColumnsFriend2(rowsPre interface{}) interface{} {
	return rowsPre
}
