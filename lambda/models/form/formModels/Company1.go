package formModels

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type Company1 struct {
	Desc22 string `gorm:"column:desc22" json:"desc22"`
	ID     int    `gorm:"column:id;primary_key" json:"id"`
	Title  string `gorm:"column:title" json:"title"`
}

//  TableName sets the insert table name for this struct type
func (c *Company1) TableName() string {
	return "company"
}
