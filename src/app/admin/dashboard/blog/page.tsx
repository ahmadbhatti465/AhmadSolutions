"use client";

import CrudManager, { FieldDef } from "@/components/admin/CrudManager";

const fields: FieldDef[] = [
  { key: "id", label: "ID", type: "text", required: true },
  { key: "title", label: "Title", type: "text", required: true },
  { key: "slug", label: "Slug", type: "text", required: true },
  { key: "excerpt", label: "Excerpt", type: "textarea", required: true },
  { key: "content", label: "Content", type: "textarea", required: true },
  { key: "author", label: "Author", type: "text", required: true },
  { key: "category", label: "Category", type: "text", required: true },
  { key: "tags", label: "Tags", type: "json", required: true },
  { key: "publishedAt", label: "Published At", type: "text", required: true },
  { key: "readTime", label: "Read Time (min)", type: "number", required: true },
  { key: "featured", label: "Featured", type: "boolean" },
];

export default function BlogAdmin() {
  return <CrudManager title="Blog Posts" apiEndpoint="/api/admin/blog" fields={fields} />;
}
