package formModels

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type Category1 struct {
	Category *string `gorm:"column:category" json:"category"`
	ID       int     `gorm:"column:id;primary_key" json:"id"`
}

//  TableName sets the insert table name for this struct type
func (c *Category1) TableName() string {
	return "category"
}
