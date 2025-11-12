import { GalleryVerticalEnd } from "lucide-react"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="grid h-screen w-screen lg:grid-cols-2 overflow-hidden">
      {/* Coluna esquerda */}
      <div className="flex flex-col justify-center items-center p-6 md:p-10">
        <div className="absolute top-6 left-6 flex items-center gap-2 font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <span>Acme Inc.</span>
        </div>

        <div className="flex flex-1 items-center justify-center w-full">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>

      {/* Coluna direita */}
      <div className="bg-muted relative hidden lg:block h-screen overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Imagem"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
