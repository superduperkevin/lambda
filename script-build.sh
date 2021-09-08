#!/bin/sh
echo "####################################" >> lambda.log
echo "########Starting new build log#######" >> lambda.log
echo "####################################" >>  lambda.log
TIMESTAMP=`date "+%Y-%m-%d %H:%M:%S"`
build_cmd="go build -o lambda-app"
#pkill -9 lambda-app
echo "Lambda build process started!!"
echo "$TIMESTAMP Lambda build process started!!" >> lambda.log
go build -o lambda-app >> lambda.log
echo "Set executable permission on compiled binary"

chmod +x lambda-app
echo "running $build_cmd"
echo "$TIMESTAMP $build_cmd" >> lambda.log
echo "$TIMESTAMP Starting server" >> lambda.log
echo "$TIMESTAMP Starting server"
#./lambda-app & nohup >> lambda.log
