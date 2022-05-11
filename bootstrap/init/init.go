package main

import (
	"github.com/lambda-platform/lambda/DB"
	"github.com/lambda-platform/lambda/DBSchema"
	"github.com/lambda-platform/lambda/generator"
	genertarModels "github.com/lambda-platform/lambda/generator/models"
)

func main() {

	var FormSchemas []genertarModels.ProjectSchemas
	var GridSchemas []genertarModels.ProjectSchemas
	var GraphqlSchemas []genertarModels.ProjectSchemas

	DB.DB.Where("type = ?", "form").Table("vb_schemas").Find(&FormSchemas)
	DB.DB.Where("type = ?", "grid").Table("vb_schemas").Find(&GridSchemas)
	DB.DB.Where("type = ?", "graphql").Table("vb_schemas").Find(&GraphqlSchemas)

	dbSchema := DBSchema.GetDBSchema()
	/*
	   Generate Form, Grid
	*/
	generator.ModelInit(dbSchema, FormSchemas, GridSchemas, true, "false")
	/*
	   Generate GRAPHQL
	*/
	generator.GQLInit(dbSchema, GraphqlSchemas)

}
