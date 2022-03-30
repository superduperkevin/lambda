package main

import (
    "github.com/lambda-platform/generator"
    "github.com/lambda-platform/lambda/DB"
    "github.com/lambda-platform/lambda/DBSchema"
    genertarModels "github.com/lambda-platform/generator/models"

)

func main() {


    FormSchemas := []genertarModels.ProjectSchemas{}
    GridSchemas := []genertarModels.ProjectSchemas{}

    GraphqlSchemas := []genertarModels.ProjectSchemas{}

    cruds := []genertarModels.ProjectCruds{}

    DB.DB.Where("type = ?", "form").Table("vb_schemas").Find(&FormSchemas)
    DB.DB.Where("type = ?", "grid").Table("vb_schemas").Find(&GridSchemas)
    DB.DB.Where("type = ?", "graphql").Table("vb_schemas").Find(&GraphqlSchemas)


    dbSchema := DBSchema.GetDBSchema()

    /*
       Generate Form, Grid
    */
    generator.ModelInit(dbSchema, FormSchemas, GridSchemas, cruds, "lambda", "lambda", true)

    /*
       Generate GRAPHQL
    */
    generator.GQLInit(dbSchema, GraphqlSchemas, "lambda", "lambda")

}
