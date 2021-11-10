module lambda

go 1.15

require (
	github.com/foolin/goview v0.3.0
	github.com/kr/pretty v0.1.0 // indirect
	github.com/labstack/echo/v4 v4.5.0
	github.com/lambda-platform/adminmodule v0.2.2
	github.com/lambda-platform/agent v0.2.2
	github.com/lambda-platform/chart v0.2.0
	github.com/lambda-platform/krud v0.2.5
	//github.com/lambda-platform/dataform v0.2.2
	github.com/lambda-platform/lambda v0.2.9
	github.com/lambda-platform/moqup v0.0.2
	github.com/lambda-platform/template v0.2.0
	github.com/shirou/gopsutil/v3 v3.21.8
	github.com/thedevsaddam/govalidator v1.9.10
	golang.org/x/net v0.0.0-20210428140749-89ef3d95e781 // indirect
	gopkg.in/check.v1 v1.0.0-20190902080502-41f04d3bba15 // indirect
)

////PRO MODULES
//replace github.com/lambda-platform/crudlogger v0.0.1 => ../../go/crudlogger
//replace github.com/lambda-platform/adminmodule v0.0.8 => ../../go/adminmodule

//replace github.com/lambda-platform/agent v0.0.2 => ../../go/agent
//replace github.com/lambda-platform/krud v0.2.4 => ../../go/krud
//replace github.com/lambda-platform/dataform v0.2.1 => ../../go/dataform
//replace github.com/lambda-platform/lambda v0.2.6 => ../../go/lambda

//replace github.com/lambda-platform/moqup v0.0.2 => ../../go/moqup
//replace github.com/lambda-platform/template v0.0.2 => ../../go/template
