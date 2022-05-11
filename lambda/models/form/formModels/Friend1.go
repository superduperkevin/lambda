package formModels

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type Friend1 struct {
	ID   int     `gorm:"column:id;primary_key" json:"id"`
	Name *string `gorm:"column:name" json:"name"`
}

//  TableName sets the insert table name for this struct type
func (f *Friend1) TableName() string {
	return "friend"
}
