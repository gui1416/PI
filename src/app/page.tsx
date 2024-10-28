import { AccountPassword } from "@/components/pages/accountpassword/Account-Password";
import { Formulario } from "@/components/pages/pcadastro/page";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Who } from "@/components/pages/whopage/WhoPage";


export default function Home() {
  return (
    <ScrollArea className="w-full h-screen flex items-center justify-center">
      <AccountPassword />
    </ScrollArea>
  );
}
