import { createClient } from "@/lib/supabase/server"

// Tool de ejemplo: crea un diagnóstico del usuario autenticado.
// El alumno solo escribe execute(); el registry hace el resto.
export const crearItem = {
  name: "crear_diagnostico",
  description: "Crea un diagnóstico de comunicación para una organización.",
  parameters: {
    type: "object",
    properties: {
      organization: { type: "string", description: "Nombre de la organización." },
      challenge: { type: "string", description: "Reto de comunicación." },
      area: {
        type: "string",
        enum: ["integral", "institucional", "interna", "comercial", "digital", "politica"],
      },
      notes: { type: "string", description: "Contexto o próximos pasos." },
    },
    required: ["organization", "challenge"],
    additionalProperties: false,
  },
  async execute({ organization, challenge, area = "integral", notes = null }) {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) throw new Error("No autenticado")

    const { data, error } = await supabase
      .from("core_items")
      .insert({ user_id: user.id, organization, challenge, area, notes })
      .select()
      .single()
    if (error) throw new Error(error.message)
    return { ok: true, item: data }
  },
}
