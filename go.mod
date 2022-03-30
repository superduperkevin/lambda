module lambda

go 1.15

require (
	github.com/99designs/gqlgen v0.17.2
	github.com/foolin/goview v0.3.0
	github.com/go-redis/redis v6.15.9+incompatible
	github.com/google/go-cmp v0.5.7 // indirect
	github.com/gorilla/websocket v1.5.0
	github.com/labstack/echo/v4 v4.7.2
	github.com/lambda-platform/agent v0.2.8
	github.com/lambda-platform/chart v0.2.1
	github.com/lambda-platform/dataform v0.3.2
	github.com/lambda-platform/datagrid v0.3.1
	github.com/lambda-platform/generator v0.0.2 // indirect
	github.com/lambda-platform/graphql v0.0.5
	github.com/lambda-platform/krud v0.3.4
	github.com/lambda-platform/lambda v0.4.4
	github.com/lambda-platform/moqup v0.0.6
	github.com/lambda-platform/puzzle v0.2.4
	github.com/lambda-platform/template v0.2.0
	github.com/lib/pq v1.10.4 // indirect
	github.com/onsi/ginkgo v1.16.5 // indirect
	github.com/onsi/gomega v1.19.0 // indirect
	github.com/thedevsaddam/govalidator v1.9.10
	github.com/vektah/gqlparser/v2 v2.4.1
	golang.org/x/sys v0.0.0-20220111092808-5a964db01320 // indirect
)

//replace github.com/lambda-platform/puzzle v0.2.2 => ../../go/puzzle
//replace github.com/lambda-platform/generator v0.0.1 => ../../go/generator
//
//replace github.com/lambda-platform/lambda v0.4.3 => ../../go/lambda
