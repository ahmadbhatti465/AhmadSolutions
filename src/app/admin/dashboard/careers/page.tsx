"use client";

import CrudManager, { FieldDef } from "@/components/admin/CrudManager";

const fields: FieldDef[] = [
  { key: "id", label: "ID", type: "text", required: true },
  { key: "title", label: "Title", type: "text", required: true },
  { key: "department", label: "Department", type: "text", required: true },
  { key: "location", label: "Location", type: "text", required: true },
  { key: "type", label: "Type", type: "text", required: true },
  { key: "experience", label: "Experience", type: "text", required: true },
  { key: "description", label: "Description", type: "textarea", required: true },
  { key: "responsibilities", label: "Responsibilities", type: "json", required: true },
  { key: "requirements", label: "Requirements", type: "json", required: true },
];

export default function CareersAdmin() {
  return <CrudManager title="Careers" apiEndpoint="/api/admin/careers" fields={fields} />;
}
