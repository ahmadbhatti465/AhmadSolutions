"use client";

import CrudManager, { FieldDef } from "@/components/admin/CrudManager";

const fields: FieldDef[] = [
  { key: "id", label: "ID", type: "text", required: true },
  { key: "title", label: "Title", type: "text", required: true },
  { key: "client", label: "Client", type: "text", required: true },
  { key: "category", label: "Category", type: "text", required: true },
  { key: "description", label: "Description", type: "textarea", required: true },
  { key: "link", label: "Project Link", type: "text" },
  { key: "results", label: "Results", type: "json", required: true },
  { key: "technologies", label: "Technologies", type: "json", required: true },
  { key: "image", label: "Image", type: "image" },
  { key: "featured", label: "Featured", type: "boolean" },
];

export default function PortfolioAdmin() {
  return <CrudManager title="Portfolio" apiEndpoint="/api/admin/portfolio" fields={fields} />;
}
