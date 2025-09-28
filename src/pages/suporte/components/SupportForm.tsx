import * as React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input, Textarea } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectItem } from '../../../components/ui/select'

export default function SupportForm() {
  const [subject, setSubject] = React.useState<string>('')
  const [replyTo, setReplyTo] = React.useState('')
  const [message, setMessage] = React.useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: integrar com backend de envio de e-mail
    console.log('Enviar suporte', { subject, replyTo, message })
    alert('Mensagem de suporte enviada (simulada)')
    setSubject('')
    setReplyTo('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Enviar mensagem de suporte</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Assunto</label>
              <Select value={subject} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSubject(e.target.value)}>
                <SelectItem value="">Selecione um assunto</SelectItem>
                <SelectItem value="bug">Erro / Bug</SelectItem>
                <SelectItem value="doubt">Dúvida</SelectItem>
                <SelectItem value="feature">Solicitar funcionalidade</SelectItem>
              </Select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">E-mail de resposta</label>
              <Input placeholder="seu-email@exemplo.com" value={replyTo} onChange={(e) => setReplyTo(e.target.value)} />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Mensagem</label>
              <Textarea placeholder="Descreva seu problema ou dúvida" value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} className="h-40" />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end space-x-2">
          <Button variant="ghost" type="button" onClick={() => { setSubject(''); setReplyTo(''); setMessage('') }}>Cancelar</Button>
          <Button type="submit">Enviar</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
