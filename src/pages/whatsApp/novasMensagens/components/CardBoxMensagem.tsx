import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import moment from "moment"

export const CardBoxMensagem = () => {

  return (

    
    <Card className="mb-2">
    <CardHeader className="flex justify-between items-center  pb-2" >
      <div  className="flex items-center space-x-4 pb-2">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={"https://github.com/shadcn.png"} alt={"Agua de Sal"} />
          <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
        <CardTitle>Agua de Sal</CardTitle>
      </div>
      <div>
        <CardDescription>{moment("20111031", "YYYYMMDD").fromNow()}</CardDescription>
      </div>
      

    </CardHeader>
    <CardContent>
      <p>Olá Marco, gostaria de fala com voce sobre a situacao da wbuy, poderiamos conversa?</p>
    </CardContent>
    <CardFooter>
      <Button>Ir para mensagem</Button>
    </CardFooter>
  </Card>

  )
}
