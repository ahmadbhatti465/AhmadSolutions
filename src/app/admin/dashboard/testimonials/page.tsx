"use client";

import CrudManager, { FieldDef } from "@/components/admin/CrudManager";

const fields: FieldDef[] = [
  { key: "id", label: "ID", type: "text", required: true },
  { key: "content", label: "Content", type: "textarea", required: true },
  { key: "author", label: "Author", type: "text", required: true },
  { key: "role", label: "Role", type: "text", required: true },
  { key: "company", label: "Company", type: "text", required: true },
  { key: "rating", label: "Rating", type: "number", required: true },
];

export default function TestimonialsAdmin() {
  return <CrudManager title="Testimonials" apiEndpoint="/api/admin/testimonials" fields={fields} />;
}
