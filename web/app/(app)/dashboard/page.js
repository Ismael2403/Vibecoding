import { Pencil, Trash2 } from "lucide-react"
import config from "@/config"
import { createClient } from "@/lib/supabase/server"
import { createDiagnosis, deleteDiagnosis, updateDiagnosis } from "./actions"

export const metadata = { title: config.diagnostics.title }

function SelectField({ name, label, options, defaultValue }) {
  return (
    <label className="form-control w-full">
      <span className="label-text mb-2 text-sm font-medium">{label}</span>
      <select name={name} defaultValue={defaultValue} className="select select-bordered w-full">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

function DiagnosisFields({ diagnosis = {} }) {
  const { fields, areas, statuses } = config.diagnostics

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <label className="form-control w-full">
        <span className="label-text mb-2 text-sm font-medium">{fields.organization.label}</span>
        <input
          name="organization"
          required
          maxLength={120}
          defaultValue={diagnosis.organization}
          placeholder={fields.organization.placeholder}
          className="input input-bordered w-full"
        />
      </label>
      <SelectField
        name="area"
        label={fields.area.label}
        options={areas}
        defaultValue={diagnosis.area || "integral"}
      />
      <label className="form-control md:col-span-2">
        <span className="label-text mb-2 text-sm font-medium">{fields.challenge.label}</span>
        <textarea
          name="challenge"
          required
          maxLength={600}
          defaultValue={diagnosis.challenge}
          placeholder={fields.challenge.placeholder}
          className="textarea textarea-bordered min-h-28 w-full"
        />
      </label>
      <SelectField
        name="status"
        label={fields.status.label}
        options={statuses}
        defaultValue={diagnosis.status || "nuevo"}
      />
      <label className="form-control w-full">
        <span className="label-text mb-2 text-sm font-medium">{fields.notes.label}</span>
        <textarea
          name="notes"
          maxLength={1200}
          defaultValue={diagnosis.notes || ""}
          placeholder={fields.notes.placeholder}
          className="textarea textarea-bordered min-h-24 w-full"
        />
      </label>
    </div>
  )
}

export default async function DashboardPage() {
  const copy = config.diagnostics
  const supabase = await createClient()
  const { data: diagnoses, error } = await supabase
    .from("core_items")
    .select("id, organization, challenge, area, status, notes, created_at")
    .order("created_at", { ascending: false })

  const areaLabels = Object.fromEntries(copy.areas.map((item) => [item.value, item.label]))
  const statusLabels = Object.fromEntries(copy.statuses.map((item) => [item.value, item.label]))

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">{copy.title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-base-content/70">{copy.subtitle}</p>
      </header>

      <section className="rounded-box border border-base-200 bg-base-100 p-5 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold">{copy.createTitle}</h2>
        <form action={createDiagnosis} className="space-y-5">
          <DiagnosisFields />
          <button type="submit" className="btn btn-primary">{copy.actions.create}</button>
        </form>
      </section>

      {error && (
        <div className="rounded-lg border border-error/40 bg-error/10 px-4 py-3 text-sm text-error">
          {copy.loadError} {error.message}
        </div>
      )}

      {!diagnoses?.length ? (
        <div className="rounded-box border border-dashed border-base-300 bg-base-100 px-4 py-12 text-center">
          <p className="font-medium">{copy.emptyTitle}</p>
          <p className="mt-1 text-sm text-base-content/60">{copy.emptyBody}</p>
        </div>
      ) : (
        <ul className="grid gap-4 xl:grid-cols-2">
          {diagnoses.map((diagnosis) => (
            <li key={diagnosis.id} className="rounded-box border border-base-200 bg-base-100 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold">{diagnosis.organization}</h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="badge badge-primary badge-outline">
                      {areaLabels[diagnosis.area] || diagnosis.area}
                    </span>
                    <span className="badge badge-ghost">
                      {statusLabels[diagnosis.status] || diagnosis.status}
                    </span>
                  </div>
                </div>
                <form action={deleteDiagnosis}>
                  <input type="hidden" name="id" value={diagnosis.id} />
                  <button
                    type="submit"
                    className="btn btn-ghost btn-sm btn-square text-error"
                    title={copy.actions.delete}
                    aria-label={`${copy.actions.delete}: ${diagnosis.organization}`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </form>
              </div>

              <p className="mt-4 whitespace-pre-wrap text-sm text-base-content/80">{diagnosis.challenge}</p>
              {diagnosis.notes && (
                <p className="mt-3 border-l-2 border-primary/30 pl-3 text-sm text-base-content/60">
                  {diagnosis.notes}
                </p>
              )}

              <details className="mt-5 border-t border-base-200 pt-4">
                <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-primary">
                  <Pencil className="size-4" />
                  {copy.actions.edit}
                </summary>
                <form action={updateDiagnosis} className="mt-5 space-y-5">
                  <input type="hidden" name="id" value={diagnosis.id} />
                  <DiagnosisFields diagnosis={diagnosis} />
                  <button type="submit" className="btn btn-primary btn-sm">{copy.actions.save}</button>
                </form>
              </details>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
