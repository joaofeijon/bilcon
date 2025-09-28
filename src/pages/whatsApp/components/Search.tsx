import { Button } from "@/components/ui/button"
import moment from "moment"
import { CardBoxMensagem } from "./CardBoxMensagem";
import { Input } from "@/components/ui/input";
import { SearchCodeIcon, SearchIcon } from "lucide-react";

interface SearchProps {
  showDate?: boolean;
}

export const Search = ({ showDate }: SearchProps) => {
  moment.locale('pt-br');

  return (
    <>
      <div className="flex items-center space-x-4 pb-2">
        <Input type="text" placeholder="Buscar"/>
        <Button>
          <SearchIcon />
        </Button>
      </div>
      <div className="max-h-100dvh overflow-auto">
        <CardBoxMensagem 
          img={"https://github.com/shadcn.png"}
          name={"Agua de Sal"}
          date={"20231010"}
          message={"Olá Marco, gostaria de fala com voce sobre a situacao da wbuy, poderiamos conversa?"}
          showDate={showDate || false}
        />
        <CardBoxMensagem
          img={"https://github.com/shadcn.png"}
          name={"Agua de Sal"}
          date={"20231010"}
          message={"Olá Marco, gostaria de fala com voce sobre a situacao da wbuy, poderiamos conversa?"}
          showDate={showDate || false}
        />
      </div>
    </>

  )
}
