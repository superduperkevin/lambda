package form

import (
	"github.com/lambda-platform/lambda/DB"
	"github.com/lambda-platform/lambda/dataform"
	"github.com/lambda-platform/lambda/models"
	"github.com/thedevsaddam/govalidator"
	"lambda/lambda/models/form/formModels"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

func CustomerOrder23Dataform() dataform.Dataform {
	return dataform.Dataform{
		Name:     "Захиалга",
		Identity: "id",
		Table:    "customer_order",
		Model:    new(formModels.CustomerOrder23),
		FieldTypes: map[string]string{
			"order_product": "SubForm",
			"id":            "Text",
			"customer_id":   "Select",
			"created_at":    "Text",
			"updated_at":    "Text",
		},
		Formulas:           []models.Formula{},
		ValidationRules:    govalidator.MapData{},
		ValidationMessages: govalidator.MapData{},
		SubForms: []map[string]interface{}{
			map[string]interface{}{
				"connection_field": "order_id",
				"tableTypeColumn":  "",
				"tableTypeValue":   "",
				"table":            "order_product",
				"parentIdentity":   "id",
				"subIdentity":      "id",
				"subForm":          OrderProductCustomerOrder23Dataform(),
				"subFormArray":     new([]formModels.OrderProductCustomerOrder23),
			}},
		AfterInsert:      nil,
		AfterUpdate:      nil,
		BeforeInsert:     nil,
		BeforeUpdate:     nil,
		TriggerNameSpace: "",
	}
}

func OrderProductCustomerOrder23Dataform() dataform.Dataform {
	return dataform.Dataform{
		Name:     "Бүтээгдэхүүн",
		Identity: "id",
		Table:    "order_product",
		Model:    new(formModels.OrderProductCustomerOrder23),
	}
}
