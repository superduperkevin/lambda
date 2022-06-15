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

func Customer3Dataform() dataform.Dataform {
	return dataform.Dataform{
		Name:     "Хэрэглэгч",
		Identity: "id",
		Table:    "customer",
		Model:    new(formModels.Customer3),
		FieldTypes: map[string]string{
			"id":            "Text",
			"first_name":    "Text",
			"last_name":     "Text",
			"province_id":   "Select",
			"region_id":     "Select",
			"sub_region_id": "Select",
			"birthday":      "Date",
			"phone":         "Text",
		},
		Formulas: []models.Formula{},
		ValidationRules: govalidator.MapData{

			"first_name":    []string{},
			"last_name":     []string{},
			"province_id":   []string{},
			"region_id":     []string{},
			"sub_region_id": []string{},
			"birthday":      []string{}},
		ValidationMessages: govalidator.MapData{

			"first_name":    []string{},
			"last_name":     []string{},
			"province_id":   []string{},
			"region_id":     []string{},
			"sub_region_id": []string{},
			"birthday":      []string{}},
		SubForms:         []map[string]interface{}{},
		AfterInsert:      nil,
		AfterUpdate:      nil,
		BeforeInsert:     nil,
		BeforeUpdate:     nil,
		TriggerNameSpace: "",
	}
}
