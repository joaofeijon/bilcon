import { Button } from "@/components/ui/button"
import { Card,  CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { Smartphone, QrCode } from "lucide-react";

function Conectar() {
  return (
    <div className="flex justify-center items-center h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Smartphone className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold ">
            Conectar WhatsApp
          </CardTitle>
        </CardHeader>
        
        <CardContent className="text-center space-y-6">
          <div className="space-y-3">
            <p className=" text-sm leading-relaxed">
              Para conectar seu WhatsApp, siga os passos abaixo:
            </p>
            
            <div className="space-y-2 text-left">
              <div className="flex items-start space-x-2">
                <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <p className="text-sm ">Abra o WhatsApp no seu celular</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <p className="text-sm ">Toque em Mais opções (⋮) e depois em "Aparelhos conectados"</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <p className="text-sm ">Toque em "Conectar um aparelho"</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <p className="text-sm ">Escaneie o código QR abaixo</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* QR Code Placeholder */}
          <div className="flex justify-center">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
              <div className="flex flex-col items-center space-y-3">
                <QrCode className="h-32 w-32 text-gray-400" />
                <p className="text-sm ">QR Code será exibido aqui</p>
              </div>
            </div>
          </div>

          <p className="text-xs ">
            Mantenha seu telefone conectado à internet para que a conexão funcione corretamente.
          </p>
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <Button variant="outline" className="w-full">
            Atualizar QR Code
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Conectar;