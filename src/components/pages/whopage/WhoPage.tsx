'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Who() {
 return (
  <div>
   <Link href='/src/components/pages/ncadastro'><Button className="w-full" type="button" >Nutricionista</Button></Link>

   <Link href="Localhost:3000\\wsl.localhost\Ubuntu\home\whisper\prototipos\next\forms-test\src\components\pages\pcadastro">
    <Button variant={"link"}><a>Paciente</a></Button>
   </Link>
  </div>
 );
}