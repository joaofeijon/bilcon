import { Button } from "@/components/ui/button"
import moment from "moment"
import { CardBoxMensagem } from "./CardBoxMensagem";
import { Input } from "@/components/ui/input";
import { SearchCodeIcon, SearchIcon } from "lucide-react";

export const Search = () => {
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
        <CardBoxMensagem/>
        <CardBoxMensagem/>
      </div>
    </>

  )
}
