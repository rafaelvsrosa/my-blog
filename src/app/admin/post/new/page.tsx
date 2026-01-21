import { MenagePostForm } from "@/components/admin/MenagePostForm";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <>
      <h1>Criar Post</h1>
      <MenagePostForm />;
    </>
  );
}
