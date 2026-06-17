"use client";

import CrudManager, { FieldDef } from "@/components/admin/CrudManager";

const fields: FieldDef[] = [
  { key: "id", label: "ID", type: "text", required: true },
  { key: "name", label: "Name", type: "text", required: true },
  { key: "role", label: "Role", type: "text", required: true },
  { key: "department", label: "Department", type: "text", required: true },
  { key: "bio", label: "Bio", type: "textarea", required: true },
  { key: "expertise", label: "Expertise", type: "json", required: true },
  { key: "image", label: "Image", type: "image" },
];

export default function TeamAdmin() {
  return <CrudManager title="Team Members" apiEndpoint="/api/admin/team" fields={fields} />;
}
