package caller

import "lambda/lambda/models/form"
import "github.com/lambda-platform/lambda/dataform"

func GetMODEL(schema_id string) dataform.Dataform {

	switch schema_id {

	case "crud_form":
		return form.KrudDataform()

	case "notification_target_form":
		return form.NotificationTargetsDataform()

	case "menu_form":
		return form.MenuFormDataform()

	case "user_form":
		return form.UserFormDataform()

	case "user_profile":
		return form.UserProfile()

	case "user_password":
		return form.UsersDataform()

	case "1":
		return form.Category1Dataform()

	case "2":
		return form.Product2Dataform()

	case "3":
		return form.Customer3Dataform()

	case "23":
		return form.CustomerOrder23Dataform()

	case "24":
		return form.CustomerOrder24Dataform()

	}
	return dataform.Dataform{}

}
