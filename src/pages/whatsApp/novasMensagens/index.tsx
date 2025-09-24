import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import moment from "moment"
import { Search } from "./components/Search";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

function NovasMensagens() {
  moment.locale('pt-br');

  return (
    <div className="flex justify-between h-full">
      <div className="w-1/5 mr-5">
        <Search/>
      </div>
      <div className="w-4/5 " >
        <Card className="h-full">
          <CardHeader className="flex justify-between items-center pb-2 " >
            <div className="flex items-center ">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={"https://github.com/shadcn.png"} alt={"Agua de Sal"} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <CardTitle>Agua de Sal</CardTitle>
            </div>
            <div>
              <span>
                +55 (11) 99999-9999
              </span>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col ">
            <Card className="float-left w-1/3">
              <CardContent>
                <p>Olá Marco, gostaria de fala com voce sobre a situacao da wbuy, poderiamos conversa?</p>
              </CardContent>
              <CardFooter className="justify-end">
                <CardDescription>{moment("20111031", "YYYYMMDD").fromNow()}</CardDescription>
              </CardFooter>
            </Card>
            <Card className="float-right w-1/3">
              <CardContent>
                <p>Fala vagabunda</p>
              </CardContent>
              <CardFooter className="justify-end">
                <CardDescription>{moment("20111031", "YYYYMMDD").fromNow()}</CardDescription>
              </CardFooter>
            </Card>
          </CardContent>
          <CardFooter>
            <Button className="mr-2"></Button>
            <Input placeholder="Escreva..."/>
            <Button className="ml-2"> </Button>
          </CardFooter>
        </Card>
      </div>
    </div>

  )
}

export default NovasMensagens