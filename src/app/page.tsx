import Link from "next/link";
import { postdata } from "./data/postdata";

export default function Home() {
  type Post = {
    id: String;
    title: String;
    date: String;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Main Page</h1>
      <div>
        {postdata.map(({ id, title, date }: Post) => (
          <>
            <div>
              <br />
              <Link href="/data">{title}</Link>
              <br />
              <Link href="/data">{date}</Link>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
