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

func CustomerOrder24Dataform() dataform.Dataform {
	return dataform.Dataform{
		Name:     "customer_order",
		Identity: "id",
		Table:    "customer_order",
		Model:    new(formModels.CustomerOrder24),
		FieldTypes: map[string]string{
			"id":            "Text",
			"customer_id":   "Select",
			"created_at":    "Text",
			"updated_at":    "Text",
			"order_product": "SubForm",
		},
		Formulas: []models.Formula{},
		ValidationRules: govalidator.MapData{

			"customer_id": []string{}},
		ValidationMessages: govalidator.MapData{

			"customer_id": []string{}},
		SubForms: []map[string]interface{}{
			map[string]interface{}{
				"connection_field": "order_id",
				"tableTypeColumn":  "",
				"tableTypeValue":   "",
				"table":            "order_product",
				"parentIdentity":   "id",
				"subIdentity":      "id",
				"subForm":          OrderProductCustomerOrder24Dataform(),
				"subFormArray":     new([]formModels.OrderProductCustomerOrder24),
			}},
		AfterInsert:      nil,
		AfterUpdate:      nil,
		BeforeInsert:     nil,
		BeforeUpdate:     nil,
		TriggerNameSpace: "",
	}
}

func OrderProductCustomerOrder24Dataform() dataform.Dataform {
	return dataform.Dataform{
		Name:     "Product ",
		Identity: "id",
		Table:    "order_product",
		Model:    new(formModels.OrderProductCustomerOrder24),
	}
}
