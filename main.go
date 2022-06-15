package main

import (
	"lambda/bootstrap"

	"github.com/lambda-platform/lambda/DBSchema"
)

func main() {

    lambda := bootstrap.Set()

		DBSchema.GetStruct("customer_order")

		DBSchema.GetStruct("order_product")
    lambda.Start()

}
