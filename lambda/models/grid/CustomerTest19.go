package grid

import "github.com/lambda-platform/lambda/datagrid"

import "github.com/lambda-platform/lambda/models"

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type CustomerTest19 struct {
	Birthday    *DB.Date `gorm:"column:birthday" json:"birthday"`
	FirstName   *string  `gorm:"column:first_name" json:"first_name"`
	ID          int      `gorm:"column:id" json:"id"`
	LastName    *string  `gorm:"column:last_name" json:"last_name"`
	PhoneNumber *string  `gorm:"column:phone_number" json:"phone_number"`
	Province    *string  `gorm:"column:province" json:"province"`
	Region      *string  `gorm:"column:region" json:"region"`
}

type CustomerMainTable19 struct {
	Birthday    *DB.Date `gorm:"column:birthday" json:"birthday"`
	FirstName   *string  `gorm:"column:first_name" json:"first_name"`
	ID          int      `gorm:"column:id;primary_key" json:"id"`
	LastName    *string  `gorm:"column:last_name" json:"last_name"`
	PhoneNumber *string  `gorm:"column:phone_number" json:"phone_number"`
	ProvinceID  *int     `gorm:"column:province_id" json:"province_id"`
	RegionID    *int     `gorm:"column:region_id" json:"region_id"`
	SubRegionID *int     `gorm:"column:sub_region_id" json:"sub_region_id"`
}

func (c *CustomerMainTable19) TableName() string {
	return "customer"
}

//  TableName sets the insert table name for this struct type
func (c *CustomerTest19) TableName() string {
	return "customer_test"
}

var CustomerTest19Datagrid datagrid.Datagrid = datagrid.Datagrid{
	Name:      "Хэрэглэгч",
	Identity:  "id",
	DataTable: "customer_test",
	MainTable: "customer",
	DataModel: new(CustomerTest19),
	Data:      new([]CustomerTest19),
	MainModel: new(CustomerMainTable19),
	Columns: []datagrid.Column{
		datagrid.Column{Model: "last_name", Label: "Овог"},
		datagrid.Column{Model: "first_name", Label: "Нэр"},
		datagrid.Column{Model: "phone_number", Label: "Утас"},
		datagrid.Column{Model: "birthday", Label: "Төрсөн өдөр"},
		datagrid.Column{Model: "province", Label: "Аймаг, хот"},
		datagrid.Column{Model: "region", Label: "Сум, дүүрэг"},
	},
	ColumnList: []string{"id", "last_name", "first_name", "phone_number", "birthday", "province", "region"},
	Filters: map[string]string{
		"id": "",

		"last_name": "",

		"first_name": "",

		"phone_number": "",

		"province_id": "Select",

		"region_id": "Select",

		"sub_region_id": "",

		"birthday": "",

		"province": "",

		"region": "",
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
	FillVirtualColumns: fillVirtualColumnsCustomerTest19,
}

func fillVirtualColumnsCustomerTest19(rowsPre interface{}) interface{} {
	return rowsPre
}
