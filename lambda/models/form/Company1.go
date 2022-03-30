package form

import (
	"github.com/lambda-platform/dataform"
	"github.com/lambda-platform/lambda/DB"
	"github.com/lambda-platform/lambda/models"
	"github.com/thedevsaddam/govalidator"
	"lambda/lambda/models/form/formModels"
	"time"
)

var _ = time.Time{}
var _ = DB.Date{}

func Company1Dataform() dataform.Dataform {
	return dataform.Dataform{
		Name:     "comp",
		Identity: "id",
		Table:    "company",
		Model:    new(formModels.Company1),
		FieldTypes: map[string]string{
			"id":     "Text",
			"title":  "Text",
			"desc22": "Textarea",
		},
		Formulas: []models.Formula{},
		ValidationRules: govalidator.MapData{

			"title": []string{"required"}},
		ValidationMessages: govalidator.MapData{

			"title": []string{"required:Талбарыг бөглөнө үү!"}},
		SubForms:         []map[string]interface{}{},
		AfterInsert:      nil,
		AfterUpdate:      nil,
		BeforeInsert:     nil,
		BeforeUpdate:     nil,
		TriggerNameSpace: "",
	}
}
