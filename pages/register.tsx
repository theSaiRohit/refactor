import Head from "next/head";
import { useRouter } from "next/router";
import { companyName, description } from "@/common-data";
import RegisterContainer from "@/modules/register/register-container";

export default function Register() {
  const router = useRouter();
  const eventName = (router.query?.event as string) ?? "";
  if (eventName === "") {
    return <span>Error</span>;
  }
  return (
    <>
      <Head>
        <title>{`Register | ${companyName}`}</title>
        <meta name="description" content={description} />
      </Head>
      <section id="register">
        <RegisterContainer eventName={eventName} />
      </section>
    </>
  );
}
