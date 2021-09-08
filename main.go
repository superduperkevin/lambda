package main

import (
    "fmt"
    "lambda/bootstrap"
    "github.com/shirou/gopsutil/v3/process"
    "os/exec"
)

func main() {


   // KillProcess("lambda-starter")




    lambda := bootstrap.Set()
    lambda.Start()
  //  CallLambdaStarter()
}
func CallLambdaStarter(){


    bytes, err1 := exec.Command("./lambda-starter", "").Output()
    output := string(bytes)
    fmt.Println(output)
    if err1 != nil {
        fmt.Println(err1)
    }
}
func KillProcess(name string) error {
    processes, err := process.Processes()
    if err != nil {
        return err
    }
    for _, p := range processes {
        n, err := p.Name()
        if err != nil {
            return err
        }

        if n == name{

            if n == name{

               return p.Kill()
            }
        }


    }
    return fmt.Errorf("process not found")
}
