package formModels

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type Customer3 struct {
	Birthday    *DB.Date `gorm:"column:birthday" json:"birthday"`
	FirstName   *string  `gorm:"column:first_name" json:"first_name"`
	ID          int      `gorm:"column:id;primary_key" json:"id"`
	LastName    *string  `gorm:"column:last_name" json:"last_name"`
	PhoneNumber *string  `gorm:"column:phone_number" json:"phone_number"`
	ProvinceID  *int     `gorm:"column:province_id" json:"province_id"`
	RegionID    *int     `gorm:"column:region_id" json:"region_id"`
	SubRegionID *int     `gorm:"column:sub_region_id" json:"sub_region_id"`
}

//  TableName sets the insert table name for this struct type
func (c *Customer3) TableName() string {
	return "customer"
}
