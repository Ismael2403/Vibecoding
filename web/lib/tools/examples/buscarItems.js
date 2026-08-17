import { createClient } from "@/lib/supabase/server"

// Tool de ejemplo: busca diagnósticos por organización o reto.
export const buscarItems = {
  name: "buscar_diagnosticos",
  description: "Busca diagnósticos por organización o reto de comunicación.",
  parameters: {
    type: "object",
    properties: {
      query: { type: "string", description: "Organización o reto a buscar." },
    },
    required: ["query"],
    additionalProperties: false,
  },
  async execute({ query }) {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) throw new Error("No autenticado")

    const { data, error } = await supabase
      .from("core_items")
      .select("id, organization, challenge, area, status, notes")
      .eq("user_id", user.id)
      .or(`organization.ilike.%${query}%,challenge.ilike.%${query}%`)
    if (error) throw new Error(error.message)
    return { ok: true, items: data }
  },
}
