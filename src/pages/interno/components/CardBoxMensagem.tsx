import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import moment from "moment"

interface CardBoxMensagemProps {
  img: string;
  name: string;
  date: string;
  message: string;
  showDate: boolean;
}

export const CardBoxMensagem = ({ img, name, date, message, showDate }: CardBoxMensagemProps) => {

  return (
    <Card className="mb-2">
    <CardHeader className="flex justify-between items-center  pb-2" >
      <div  className="flex items-center space-x-4 pb-2">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={img} alt={name} />
          <AvatarFallback className="rounded-lg">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle>{name}</CardTitle>
      </div>
      <div>
        {showDate && ( <CardDescription>{moment(date, "YYYYMMDD").fromNow()}</CardDescription> )}
      </div>
      

    </CardHeader>
    <CardContent>
      <p>{message}</p>
    </CardContent>
    <CardFooter>
      <Button>Ir para mensagem</Button>
    </CardFooter>
  </Card>

  )
}
