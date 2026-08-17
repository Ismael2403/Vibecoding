"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"
import config from "@/config"

// CRUD de core_items vía Server Actions. La RLS de Supabase ya
// garantiza que cada quien solo toca sus filas; aun así filtramos
// por user_id como defensa en profundidad.

async function requireUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error("No autenticado")
  return { supabase, user }
}

const validAreas = new Set(config.diagnostics.areas.map(({ value }) => value))
const validStatuses = new Set(config.diagnostics.statuses.map(({ value }) => value))

function diagnosisFrom(formData) {
  const organization = formData.get("organization")?.toString().trim()
  const challenge = formData.get("challenge")?.toString().trim()
  const requestedArea = formData.get("area")?.toString()
  const requestedStatus = formData.get("status")?.toString()
  if (!organization || !challenge) return null

  return {
    organization,
    challenge,
    area: validAreas.has(requestedArea) ? requestedArea : "integral",
    status: validStatuses.has(requestedStatus) ? requestedStatus : "nuevo",
    notes: formData.get("notes")?.toString().trim() || null,
  }
}

export async function createDiagnosis(formData) {
  const diagnosis = diagnosisFrom(formData)
  if (!diagnosis) return

  const { supabase, user } = await requireUser()
  const { error } = await supabase
    .from("core_items")
    .insert({ user_id: user.id, ...diagnosis })
  if (error) throw new Error(error.message)
  revalidatePath("/dashboard")
}

export async function updateDiagnosis(formData) {
  const id = formData.get("id")?.toString()
  const diagnosis = diagnosisFrom(formData)
  if (!id || !diagnosis) return

  const { supabase, user } = await requireUser()
  const { error } = await supabase
    .from("core_items")
    .update(diagnosis)
    .eq("id", id)
    .eq("user_id", user.id)
  if (error) throw new Error(error.message)
  revalidatePath("/dashboard")
}

export async function deleteDiagnosis(formData) {
  const id = formData.get("id")?.toString()
  if (!id) return

  const { supabase, user } = await requireUser()
  const { error } = await supabase
    .from("core_items")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id)
  if (error) throw new Error(error.message)
  revalidatePath("/dashboard")
}
