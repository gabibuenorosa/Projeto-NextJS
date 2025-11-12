import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="grid h-screen w-screen lg:grid-cols-2 overflow-hidden">
      {/* Coluna esquerda */}
      <div className="relative flex flex-col justify-center items-center p-6 md:p-10">
        {/* Logo */}
        <div className="absolute top-6 left-6 flex items-center gap-2 font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <span>Acme Inc.</span>
        </div>

        {/* Formulário */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-full max-w-xs overflow-hidden">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Coluna direita */}
      <div className="bg-muted relative hidden lg:block overflow-hidden h-screen">
        <img
          src="/placeholder.svg"
          alt="Imagem"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
