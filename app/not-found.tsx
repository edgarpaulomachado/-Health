import Link from "next/link";
import { Card, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Card className="max-w-2xl w-full mx-4 border-0">
        <CardContent className="flex flex-col items-center gap-6 text-center">
          <CircleAlert className="h-40 w-40" />

          <div>
            <CardTitle className="text-3xl">Página não encontrada</CardTitle>
            <CardDescription className="mt-2">
              Desculpe — não conseguimos encontrar a página que você procura.
              Talvez o link esteja quebrado ou a página foi removida.
            </CardDescription>
          </div>

          <div className="text-sm text-muted-foreground max-w-prose">
            Dica: verifique se o endereço está correto ou volte para a página inicial.
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-center gap-3">
          <Link href="/" aria-label="Voltar para o início">
            <Button variant="outline">Voltar ao Início</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Ir para o Painel</Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
