import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import moment from "moment"
interface IMessagem {
  isMe: boolean, 
  messagem: string
  time:string
}

export const Mensagem = ({isMe, messagem, time}: IMessagem) => {
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-3`}>
      <Card className="w-1/3">
        <CardContent>{messagem}</CardContent>
        <CardFooter className="justify-end">
          <CardDescription>{moment(time, "YYYYMMDD").fromNow()}</CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}