package caller

import "lambda/lambda/models/grid"
import "github.com/lambda-platform/lambda/datagrid"

func GetMODEL(schema_id string) datagrid.Datagrid {

	switch schema_id {

	case "crud_grid":
		return grid.KrudGridDatagrid

	case "crud_log":
		return grid.CrudLogDatagrid

	case "analytic_grid":
		return grid.AnalyticGridDatagrid

	case "menu_grid":
		return grid.MenuGridDatagrid

	case "notification_target_grid":
		return grid.NotificationTargetDatagrid

	case "17":
		return grid.Category17Datagrid

	case "18":
		return grid.ProductTest18Datagrid

	case "19":
		return grid.CustomerTest19Datagrid

	case "20":
		return grid.OrderTest20Datagrid

	case "21":
		return grid.OrderProductTest21Datagrid

	}
	return datagrid.Datagrid{}

}
