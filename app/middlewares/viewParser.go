package middlewares

import (
    "github.com/foolin/goview"
    "github.com/foolin/goview/supports/echoview-v4"
    "github.com/labstack/echo/v4"
    "html/template"
    "lambda/app/controllers"
)

func ViewParser() echo.MiddlewareFunc {
    //mix := utils.FrontMix("assets/app/manifest.json")
    viewMiddleware := echoview.NewMiddleware(goview.Config{
        Root:      "views", //template root path
        Extension: ".html",
        Funcs: template.FuncMap{
            "data": controllers.HomeData,
            //"assets": func(index string) string {
            //    return utils.CallMix(index, mix)
            //},
        },
    })

    return viewMiddleware
}
