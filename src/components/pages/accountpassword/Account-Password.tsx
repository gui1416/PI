import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import { ModeToggle } from "@/components/ui/theme-setting"

export function AccountPassword() {
 return (
  <ScrollArea>
   <div className="absolute top-2 right-2"><ModeToggle /></div>
   <div className="w-full h-screen flex items-center justify-center">
    <Tabs defaultValue="account" className="w-[400px]">
     <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="account">Conectar-se</TabsTrigger>
      <TabsTrigger value="password">Cadastrar-se</TabsTrigger>
     </TabsList>
     <TabsContent value="account">
      <Card>
       <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
         Coloque seu e-mail e senha para entrar.
        </CardDescription>
       </CardHeader>
       <CardContent className="space-y-2">
        <div className="space-y-1">
         <Label htmlFor="name">E-mail</Label>
         <Input id="email" type="email" />
        </div>
        <div className="space-y-1">
         <Label htmlFor="username">Senha</Label>
         <Input id="senha" type="password" />
        </div>
       </CardContent>
       <CardFooter>
        <CardDescription>Caso você não seja um nutricionista clique em <Link className="text-white" href=''>voltar.</Link></CardDescription>
        <Button>Entrar</Button>
       </CardFooter>
      </Card>
     </TabsContent>
     <TabsContent value="password">
      <Card>
       <CardHeader>
        <CardTitle>Cadastrar-se</CardTitle>
        <CardDescription>
         Caloque aqui suas informações para criar sua conta.
        </CardDescription>
       </CardHeader>
       <CardContent className="space-y-2">
        <div className="space-y-1">
         <Label htmlFor="new">Nome</Label>
         <Input id="name" placeholder="Digite seu nome" />
        </div>
        <div className="space-y-1">
         <Label htmlFor="new">CRN</Label>
         <Input id="CRN" placeholder="Digite seu CRN" />
        </div>
        <div className="space-y-1">
         <Label htmlFor="current">E-mail</Label>
         <Input id="email" type="email" placeholder="Digite seu e-mail" />
        </div>
        <div className="space-y-1">
         <Label htmlFor="new">Senha</Label>
         <Input id="senha" type="password" placeholder="Escolha uma senha" />
        </div>
       </CardContent>
       <CardFooter>
        <Button type="submit">
         Salvar
        </Button>
       </CardFooter>
      </Card>
     </TabsContent>
    </Tabs>
   </div>
  </ScrollArea>
 );
}