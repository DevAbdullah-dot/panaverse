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
      <div>
        {postdata.map(({ id, title, date }: Post) => (
          <>
            <div>
              <br />
              <Link href="/post/1">{title}</Link>
              <br />
              <Link href="/post/1">{date}</Link>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
