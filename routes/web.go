package routes

import (
	"lambda/app/controllers"
	"lambda/app/middlewares"

	"github.com/labstack/echo/v4"
	"github.com/lambda-platform/lambda/agent/agentMW"
)

func Web(e *echo.Echo) {

    //WEB ROUTE
    e.GET("/", controllers.HomeProduction, middlewares.ViewParser()) //production

    //ADMIN ROUTE
    e.GET("/admin", controllers.AdminIndex(true), agentMW.IsLoggedInCookie)
}
