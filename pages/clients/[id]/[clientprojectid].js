import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query.id);
  console.log(router.query.clientprojectid);
  return (
    <div>
      <h1>Specific Project for Specific Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
