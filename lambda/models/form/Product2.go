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

func Product2Dataform() dataform.Dataform {
	return dataform.Dataform{
		Name:     "Бүтээгдэхүүн",
		Identity: "id",
		Table:    "product",
		Model:    new(formModels.Product2),
		FieldTypes: map[string]string{
			"id":          "Text",
			"category_id": "Select",
			"name":        "Text",
			"description": "Textarea",
			"price":       "Money",
			"created_at":  "Text",
			"updated_at":  "Text",
			"noat":        "Number",
			"has_nhat":    "Checkbox",
			"nhat":        "Text",
		},
		Formulas: []models.Formula{
			models.Formula{
				Targets: []models.Target{
					models.Target{
						Field: "noat",
						Prop:  "value",
					},
				},
				Template: "({price}/110)*10",
				Model:    "",
				Form:     "main",
			}, models.Formula{
				Targets: []models.Target{
					models.Target{
						Field: "nhat",
						Prop:  "hidden",
					},
				},
				Template: "'{has_nhat}' != '1'",
				Model:    "",
				Form:     "main",
			},
		},
		ValidationRules: govalidator.MapData{

			"category_id": []string{},
			"name":        []string{},
			"description": []string{},
			"price":       []string{}},
		ValidationMessages: govalidator.MapData{

			"category_id": []string{},
			"name":        []string{},
			"description": []string{},
			"price":       []string{}},
		SubForms:         []map[string]interface{}{},
		AfterInsert:      nil,
		AfterUpdate:      nil,
		BeforeInsert:     nil,
		BeforeUpdate:     nil,
		TriggerNameSpace: "",
	}
}
