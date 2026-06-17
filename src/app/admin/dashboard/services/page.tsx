"use client";

import CrudManager, { FieldDef } from "@/components/admin/CrudManager";

const fields: FieldDef[] = [
  { key: "id", label: "ID", type: "text", required: true },
  { key: "title", label: "Title", type: "text", required: true },
  { key: "description", label: "Description", type: "textarea", required: true },
  { key: "features", label: "Features", type: "json", required: true },
  { key: "icon", label: "Icon", type: "text", required: true },
];

export default function ServicesAdmin() {
  return <CrudManager title="Services" apiEndpoint="/api/admin/services" fields={fields} />;
}
