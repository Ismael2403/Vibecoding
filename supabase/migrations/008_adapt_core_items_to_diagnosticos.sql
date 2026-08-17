-- Adapta core_items al flujo de diagnósticos de SINCO.
-- Conservamos el nombre técnico para no romper integraciones existentes.

alter table public.core_items rename column title to organization;
alter table public.core_items rename column description to challenge;

alter table public.core_items
  add column area text not null default 'integral',
  add column notes text;

update public.core_items
set status = case
  when status in ('done', 'archived') then 'cerrado'
  else 'nuevo'
end;

alter table public.core_items
  alter column status set default 'nuevo',
  add constraint core_items_area_check
    check (area in ('integral', 'institucional', 'interna', 'comercial', 'digital', 'politica')),
  add constraint core_items_status_check
    check (status in ('nuevo', 'en_analisis', 'propuesta', 'en_ejecucion', 'cerrado'));

alter table public.core_items enable row level security;

comment on table public.core_items is 'Diagnósticos de comunicación asociados a cada usuario de SINCO.';
comment on column public.core_items.organization is 'Organización diagnosticada.';
comment on column public.core_items.challenge is 'Reto principal de comunicación.';
comment on column public.core_items.area is 'Área de comunicación prioritaria.';
comment on column public.core_items.status is 'Etapa actual del diagnóstico.';
comment on column public.core_items.notes is 'Contexto y próximos pasos del diagnóstico.';
