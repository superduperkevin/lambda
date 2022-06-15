package formModels

import (
	"github.com/lambda-platform/lambda/DB"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

type Product2 struct {
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

//  TableName sets the insert table name for this struct type
func (p *Product2) TableName() string {
	return "product"
}
