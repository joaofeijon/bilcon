import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import moment from "moment"
import { Search } from "./components/Search";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Mensagem } from "./components/Mensagem";
import { EllipsisVertical, SendIcon } from "lucide-react";

function NovasMensagens() {
  moment.locale('pt-br');

  return (
    <div className="flex justify-between h-10/12 overflow-hidden">
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
          <CardContent className="flex flex-col h-10/12 overflow-auto">
            <Mensagem 
              isMe={false}
              messagem="Olá Marco, gostaria de fala com voce sobre a situacao da wbuy, poderiamos conversa?" 
              time="20231010"
            />
            <Mensagem 
              isMe={true}
              messagem="fala o vagabunda" 
              time="20231010"
            />
            <Mensagem 
              isMe={true}
              messagem="fala o vagabunda" 
              time="20231010"
            />
            <Mensagem 
              isMe={true}
              messagem="fala o vagabunda" 
              time="20231010"
            />
            <Mensagem 
              isMe={true}
              messagem="fala o vagabunda" 
              time="20231010"
            />
            <Mensagem 
              isMe={true}
              messagem="fala o vagabunda" 
              time="20231010"
            />
          </CardContent>
          <CardFooter>
            <Button className="mr-2"><EllipsisVertical /></Button>
            <Input placeholder="Escreva..."/>
            <Button className="ml-2"> <SendIcon /></Button>
          </CardFooter>
        </Card>
      </div>
    </div>

  )
}

export default NovasMensagens