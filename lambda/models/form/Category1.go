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

func Category1Dataform() dataform.Dataform {
	return dataform.Dataform{
		Name:     "Ангилал",
		Identity: "id",
		Table:    "category",
		Model:    new(formModels.Category1),
		FieldTypes: map[string]string{
			"id":       "Text",
			"category": "Text",
		},
		Formulas: []models.Formula{},
		ValidationRules: govalidator.MapData{

			"category": []string{}},
		ValidationMessages: govalidator.MapData{

			"category": []string{}},
		SubForms:         []map[string]interface{}{},
		AfterInsert:      nil,
		AfterUpdate:      nil,
		BeforeInsert:     nil,
		BeforeUpdate:     nil,
		TriggerNameSpace: "",
	}
}
