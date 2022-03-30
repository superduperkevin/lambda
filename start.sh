sudo rm -R ./lambda

echo "INIT START"
sudo mkdir ./schemas/lambda/lambda/graph
sudo mkdir ./schemas/lambda/lambda/models/form
sudo mkdir ./schemas/lambda/lambda/models/grid
sudo chmod -R 777 ./schemas/lambda/lambda/graph
sudo chmod -R 777 ./schemas/lambda/lambda/models/form
sudo chmod -R 777 ./schemas/lambda/lambda/models/grid
go run ./bootstrap/init/init.go
sudo chmod -R 777 ./schemas/lambda/lambda/graph
sudo chmod -R 777 ./schemas/lambda/lambda/models/form
sudo chmod -R 777 ./schemas/lambda/lambda/models/grid
sudo chmod -R 755 ./schemas/lambda/lambda/graph
sudo chmod -R 755 ./schemas/lambda/lambda/models/form
sudo chmod -R 755 ./schemas/lambda/lambda/models/grid
sudo mv ./schemas/lambda/lambda ./
echo "Ready"
go run main.go
